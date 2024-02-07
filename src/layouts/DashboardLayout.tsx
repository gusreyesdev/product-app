import { Navigate, Outlet } from "react-router-dom";
import { Loader } from "@/components/Loader";

export const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Outlet />
    </div>
  );
};
