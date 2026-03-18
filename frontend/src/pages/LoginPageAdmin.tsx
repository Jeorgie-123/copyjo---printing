import { useState } from "react";
import type {FC} from 'react';

const LoginPageAdmin:FC = () => {

	const [showPassword, setShowPassword] = useState<boolean>(false);
	const togglePassword = (): void => {
		setShowPassword(!showPassword)
	}
  return (
    <div className="min-h-screen bg-[#5A3E28] flex justify-center items-center">
			<div className="flex flex-col justify-center">
				<div className="space-y-2">
					<h1 className="dmserif text-white text-center text-3xl tracking-normal font-bold">Admin Login</h1>
					<p className="text-[#DFC9A9] text-center text-xs">Manage products, orders, and customer messages</p>
				</div>
				<div className="bg-white p-7 rounded-lg shadow-lg w-80 xl:mt-8 mt-6 space-y-4">
					<form className="space-y-4">
						<div className="flex flex-col space-y-2">	
							<label className="text-xs text-[#5A3E28]">Email Address</label>
							<input type="email" className="border border-[#F1E0C6] px-4 py-2 rounded-lg bg-[#FDFAF5] placeholder:text-gray-400 text-xs" placeholder="jeng@gmail.com"></input>
						</div>

						<div className="flex flex-col space-y-2 relative">	
							<label className="text-xs text-[#5A3E28]">Password</label>
							<input type={showPassword ? 'text' : "password"} className="border border-[#F1E0C6] px-4 py-2 rounded-lg bg-[#FDFAF5] placeholder:text-gray-400 text-xs" placeholder="**********"></input>
							<button type="button" className="absolute right-3 top-6 text-xs text-[#ce9f7b]"onClick={togglePassword}>{showPassword ? "Hide" : "Show"}</button>
						</div>

						<div className="text-center">
							<button className="bg-[#AC824D] py-3 w-full px-4 rounded-lg text-xs font-bold text-center text-white hover:bg-[#7e4e13] cursor-pointer transition duration-300">Login to Dashboard</button>
						</div>
					</form>

					<div className="bg-[#efdecb] h-px w-full mt-5"></div>

					<div className="text-center">
						<p className="text-xs text-[#AC824D]">Admin dashboard features</p>

						<div className="grid grid-cols-3 mt-5 gap-3">
							<div className="bg-[#FDFAF5] border border-[#FAF2E5] px-3 py-2 rounded-lg cursor-pointer transition duration-300 hover:bg-[#e7dcca]">
								<div className="space-y-1">
									<p>📦</p>
									<p className="text-xs text-[#AC824D]">Orders</p>
								</div>
							</div>

							<div className="bg-[#FDFAF5] border border-[#FAF2E5] px-3 py-2 rounded-lg cursor-pointer transition duration-300 hover:bg-[#e7dcca]">
								<div className="space-y-1">
									<p>🖼️</p>
									<p className="text-xs text-[#AC824D]">Products</p>
								</div>
							</div>

							<div className="bg-[#FDFAF5] border border-[#FAF2E5] px-3 py-2 rounded-lg cursor-pointer transition duration-300 hover:bg-[#e7dcca]">
								<div className="space-y-1">
									<p>💬</p>
									<p className="text-xs text-[#AC824D]">Messages</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    </div>
  )
}

export default LoginPageAdmin