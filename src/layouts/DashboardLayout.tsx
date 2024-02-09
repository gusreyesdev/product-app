import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
 
  return (
    <div className="h-screen">
      <Outlet />
    </div>
  );
};
