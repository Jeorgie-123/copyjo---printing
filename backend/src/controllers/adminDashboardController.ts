import { supabase } from "../supabaseClient.js";
import { AuthRequest } from "../types/auth.js";
import { Response } from "express";

export const adminDashboard = async (req:AuthRequest, res:Response):Promise<Response> => {
	try {
		const adminId = req.adminId;

		const {data: admin, error} = await supabase
		.from('userrs')
		.select('*')
		.eq('id', adminId)
		.single()

		if(!admin || error){
			return res.status(404).json({message:"Admin Not Found"})
		}

		return res.status(200).json({profile:admin, message: "Good"})
		
	} catch (error) {
		console.log("Error AdminDash: ", error)
		return res.status(500).json({message: "Internal Server Errorrr"})
	}
}