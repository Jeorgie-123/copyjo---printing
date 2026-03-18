import { Request, Response } from "express";
import type { loginRequestBody, User, userWithoutPassword, cookieOptions } from '../types/auth.js';
import { supabase } from '../supabaseClient.js';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

//Cookie – A small piece of data stored in the user’s browser that is sent to the server with every request.
//Token – A secure string created by the server that proves a user is authenticated.
//Session – A server-side storage that keeps track of a user’s login using a session ID.


const JWT_SECRET = process.env.JWT_SECRET || "fallback";

const CookieOptions: cookieOptions = {
	httpOnly: true,
	secure: process.env.NODE_ENV === 'production',
	sameSite: 'strict',
	maxAge: 7 * 24 * 60 * 60 * 1000 //7 days
}

export const loginController = async( req: Request<{}, {}, loginRequestBody>, res:Response):Promise<Response> => {
	try{
		const {email, password} = req.body;

		if(!email || !password){
			return res.status(400).json({message: "All fields are required"});
		}

		const {data:user, error} = await supabase
		.from('userrs')
		.select('*')
		.eq('email', email)
		.single();

		if(!user || error){
			return res.status(400).json({message: "Invalid Credentials"})
		}

		const isMatch = await bcrypt.compare(password, user.password)
		if(!isMatch){
			return res.status(400).json({message: "Invalid Credentials"});
		}

		console.log("User is: ", user);

		const {password:_, ...userNoPassword} = user as User

		//JWT
		const token = jwt.sign({
			id: user.id,
			fullname: user.fullname,
			email: user.email
		}, JWT_SECRET,{
			expiresIn: '7d'
		})

		res.cookie("tokennjeng", token, CookieOptions);
		console.log("token: " , token)

		return res.status(200).json({uu: userNoPassword as userWithoutPassword, message: `Login Successfully for ${user.fullname}`})
		
	}catch(error){
		console.log("Error is: ", error);
		return res.status(500).json({message: "Internal Server Error"});
	}
}