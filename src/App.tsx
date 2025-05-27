import { createBrowserRouter, RouterProvider } from "react-router-dom"

import DashboardPage from "./pages/dashBoard"
import NotFound from "./pages/NotFound"
import PlotsPage from "./pages/plot"
import AgreementsPage from "./pages/agreement"
import InvestorsPage from "./pages/investors"
import ServiceRequestsPage from "./pages/serviceRequest"
import InvestorDetailPage from './pages/investors/InvestorDetailPage'
import PlotDetailsPage from "./pages/plot/PlotDetailsPage"
import ServiceRequestDetailsPage from "./pages/serviceRequest/ServiceRequestDetailsPage"
import AgreementDetailsPage from "./pages/agreement/AgreementDetailsPage"

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
     {
      path: "/plots/:id", 
      element: <PlotDetailsPage />, 
    },
    {
      path: "/service-requests/:id", 
      element: < ServiceRequestDetailsPage/>, 
    },
     {
      path: "/agreements/:id", 
      element: < AgreementDetailsPage/>, 
    },
  ]);
  
  return (
    <RouterProvider router={router}/>  
  )
}

export default App
