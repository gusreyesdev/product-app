import { Root } from "@/Root";
import { DashboardLayout } from "@/layouts";
import { DashboardPage, PaymentPage, ProductPage, SummaryPage } from "@/pages";

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
          {
            path: "details",
            element: <ProductPage />,
          },
          {
            path: "summary",
            element: <SummaryPage />,
          },
          {
            path: "payment",
            element: <PaymentPage />,
          },
        ],
      },
    ],
  },
]);
