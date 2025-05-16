import { createBrowserRouter, RouterProvider } from "react-router-dom"

import DashboardPage from "./pages/DashboardPage"
import NotFound from "./pages/NotFound"
import PlotsPage from "./pages/PlotsPage"
import AgreementsPage from "./pages/AgreementsPage"
import InvestorsPage from "./pages/InvestorsPage"
import ServiceRequestsPage from "./pages/ServiceRequestsPage"
import InvestorDetailPage from './pages/InvestorDetailPage'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
      errorElement: <NotFound />,
    },
    {
      path: "/plots",
      element: <PlotsPage />,
    },
    {
      path: "/agreements",
      element: <AgreementsPage />,
    },
    {
      path: "/service-requests",
      element: <ServiceRequestsPage />,
    },
    {
      path: "/investors",
      element: <InvestorsPage />,
    },
    {
      path: "/investors/:id", 
      element: <InvestorDetailPage />, 
    },
  ]);
  
  return (
    <RouterProvider router={router}/>  
  )
}

export default App
