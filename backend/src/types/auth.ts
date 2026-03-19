import { Request } from "express";


export interface loginRequestBody {
    email: string;
    password: string;
}

export interface User {
    id: string,
    email: string,
    password: string,
    created_at: string,
    fullname: string

}

export interface userWithoutPassword {
    id: string,
    email: string,
    created_at: string,
    fullname: string

}

export interface cookieOptions {
    httpOnly:boolean,
    secure:boolean,
    sameSite: 'strict' | 'lax' | 'none',
    maxAge: number
}

export interface AuthRequest extends Request {
    adminId?: string
    cookies: {
        [key: string]: string;
    };
}