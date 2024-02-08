import { Navigate, Outlet, useLocation } from "react-router-dom";

import { Toaster } from "@/components/ui/toaster";

export const Root = () => {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return <Navigate to="/dashboard" />;
  }

  return (
    <main>
      <Outlet />
      <Toaster />
    </main>
  );
};
