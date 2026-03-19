import { useAuthStore } from "../store/useAuthStore"
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const AdminDashbaord: FC = () => {

  const navigate = useNavigate();

  const {logout , user} = useAuthStore();

  const handleLogout = async () => {
    await logout();
    toast.success("Logout Successfully");
    navigate('/login-admin')
  }

  return (
    <div>AdminDashbaord Hi! {user?.fullname}
      <button className="p-4 bg-yellow-500" onClick={handleLogout}>Logout</button>
    </div>
  )
} 

export default AdminDashbaord