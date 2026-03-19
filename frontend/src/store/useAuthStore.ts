import {create} from 'zustand'
import axios from '../lib/axios'
import type {AuthState, User} from '../types/auth'


export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    loading: false,
    error: null,

    login: async(email:string, password:string) => {
			try{
				set({loading: true, error:null});

				const res = await axios.post("/auth/login", {email, password})

				console.log("FULL RESPONSE ", res)
				console.log("USER NAME: ", res.data.uu, res.data.message);

				set({user: res.data.uu, loading:false})

				return true

			}catch(error:any){
				set({error:error.response?.data?.message || "Login Failed", loading: false})

				return false
			}
    },

		logout: async() => {
			try {
				await axios.post('/auth/logout');
				set({user:null})
				console.log("Logout Clicked")

				return true
			} catch (error:any) {
				set({error: error.response?.data.message || "Logout Failed", loading: false})

				return false
			}
		},

		checkAuth: async():Promise<void> => {
			set({loading:true})
			try{
				const res = await axios.get<{profile:User}>('/auth/dashboard', {withCredentials: true});
				set({user: res.data.profile, error:null})
			}catch(error){
				set({user:null})
			}finally{
				set({loading:false})
			}
		}
}))