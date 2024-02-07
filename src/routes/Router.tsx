import { Root } from "@/Root";
import { DashboardLayout } from "@/layouts";
import { DashboardPage } from "@/pages";

import { createBrowserRouter } from "react-router-dom";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "dashboard",
        element: <DashboardLayout />,

        children: [
          {
            path: "",
            element: <DashboardPage />,
          },
        ],
      },
    ],
  },
]);
