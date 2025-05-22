import { useState } from 'react';

import Header from '@/components/Header'
import Layout from '@/components/Layout'
import TabHeader from '@/components/TabHeader'
import ProgressCard from '@/components/ProgressCard';

// const agreementDetails = {
//     "Agreement": {
//         "Reference ID": "AG-LP-66664-0038833",
//         "Status": "Active",
//         "Created On": "09/01/2025 15:04",
//         "Owner": "PA&L Users",
//         "Stage": "PA&L User Decision",
//         "Agreement Status": {
//             "Request Status": "PA&L User Decision",
//             "Decision": null,
//             "Status": "Pending Approval - PA&L User\nIn Order to Work with the request\n1. 'Pick' - then choose Approve: to process to next step\nApprove: to process to next step"
//         },
//         "Agreement Business Process": {
//             "Duration": "27 days",
//             "Stages": [
//                 {
//                     "Stage": "Assigned to PA & L User",
//                     "Date": "14/12/2024",
//                     "Duration": "4hr 30min"
//                 },
//                 {
//                     "Stage": "PA & L User Decision",
//                     "Date": "14/12/2024",
//                     "Duration": "4hr 30min"
//                 },
//                 {
//                     "Stage": "PA & L Manager Decision",
//                     "Date": "14/12/2024",
//                     "Duration": "4hr 30min"
//                 },
//                 {
//                     "Stage": "Finance Review",
//                     "Date": null,
//                     "Duration": null
//                 },
//                 {
//                     "Stage": "PA & L Zone Director Decision",
//                     "Date": null,
//                     "Duration": null
//                 },
//                 {
//                     "Stage": "Customer Signature",
//                     "Date": null,
//                     "Duration": null
//                 },
//                 {
//                     "Stage": "BS Zone Director Decision",
//                     "Date": null,
//                     "Duration": null
//                 },
//                 {
//                     "Stage": "End",
//                     "Date": null,
//                     "Duration": null
//                 }
//             ]
//         }
//     }
// }
const agreementData = [
    { title: "Reference ID", value: "AG-LP-66664-0038833", },
    { title: "Status Reason", value: "Active", },
    { title: "Created On", value: "09/01/2025 15:04", },
    { title: "Owner", value: "PA&L Users", },
    { title: "Stage", value: "PA&L User Decision", },
];

const tabArray = [
    { id: 1, name: 'Agreement Status' },
    { id: 2, name: 'Agreement Details' },
    { id: 3, name: 'Operational Milestones' },
    { id: 4, name: 'Payment Milestones' },
    { id: 5, name: 'Deposits' },
    { id: 5, name: 'Audit History'},
  ];

const AgreementDetailsPage = () => {
    const [activeTab, setActiveTab] = useState<number>(1);
    const renderComponent = () => {
    switch (activeTab) {
      case 1:
        return <AgreementStatus />
      case 2:
        return <AgreementDetails />
      case 3:
        return <OperationalMilestone />
      case 4:
        return <PaymentMilestone />
      case 5:
        return <AuditHistory />
    }

  }
    return (
        <Layout>
            <Header />
            <div className='grid-cols-2 p-5'>
                <TabHeader data={agreementData} tabArray={tabArray} activeTab={activeTab} setActiveTab={setActiveTab} />
                <ProgressCard/>
            </div>
             {renderComponent()}
        </Layout>
    )
}

export default AgreementDetailsPage;

const AgreementStatus=()=>{
    return(
        <div>

        </div>
    )
}

const AgreementDetails=()=>{
    return(
        <div>
            
        </div>
    )
}

const OperationalMilestone=()=>{
    return(
         <div>
            
        </div>
    )
}
const PaymentMilestone=()=>{
    return(
         <div>
            
        </div>
    )
}

const Deposits=()=>{
    return(
         <div>
            
        </div>
    )
}

const AuditHistory=()=>{
    return(
         <div>
            
        </div>
    )
}