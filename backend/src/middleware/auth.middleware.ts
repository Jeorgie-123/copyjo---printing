import { Response, NextFunction} from 'express'
import { AuthRequest } from '../types/auth.js'
import jwt from "jsonwebtoken";

export const adminAuth = (req:AuthRequest, res: Response, next: NextFunction):Response | void => {
    console.log("Cookies Receive: ", req.cookies.tokennjeng);

    let token: string | undefined;

    if (req.cookies?.tokennjeng) {
      token = req.cookies.tokennjeng;
    }

    if (!token) {
      return res.status(401).json({ message: "Not authorized" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
        id: string;
      };

    req.adminId = decoded.id; 

    //decoded = {
    //id: "123",
    //fullname: "John",
    //email: "john@gmail.com"
 

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }

}