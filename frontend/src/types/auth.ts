export interface User { //it comes from uu in the backend
    id: string,
    email: string,
    fullname: string,
    created_at: string
}

export interface AuthState {
    user: User | null,
    loading: boolean,
    error: string | null

    login: (email:string, password:string) => Promise<boolean>;
    logout: () => Promise<boolean>;
    checkAuth: () => Promise<void>;
}
