import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Outlet />
    </div>
  );
};
