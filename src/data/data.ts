import expandIcon from "@/assets/icons/expandIcon.png"
import searchIcon from '@/assets/icons/search.svg';
import menuIcon from '@/assets/icons/menuIcon.png';
import refreshIcon from "@/assets/icons/refreshIcon.png"
import { ClickableCell } from "@/components/ClickableCell";

export const emailData = [
    {
      id: 1,
      user: 'Salman Hameed',
      msg: `Hello Sir, 
  
  I hope you're doing well. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    },
    {
      id: 2,
      user: 'Aisha Khan',
      msg: `Hello Sir, 
  
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    },
    {
      id: 3,
      user: 'Rahul Sharma',
      msg: `Hello, 
  
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    }
  ];
  

   export const exportTypeArray = [
    { id: 1, name: 'EZ Applications', value: 'EZApplication' },
    { id: 2, name: 'LP Applications', value: 'LPApplication' },
    { id: 3, name: 'Commercial and Waterfront Applications', value: 'commercialAndWaterfrontApplications' },
    { id: 4, name: 'Industrial Applications', value: 'industrial Applications' },
    { id: 5, name: 'Ready Mix Applications', value: 'readyMixApplications' },
    { id: 6, name: 'Warehouse Applications', value: 'warehouseApplications' },
  ];





  // 
export const agreementTabData = [
    { title: "Reference ID", value: "AG-LP-66664-0038833", },
    { title: "Status Reason", value: "Active", },
    { title: "Created On", value: "09/01/2025 15:04", },
    { title: "Owner", value: "PA&L Users", },
    { title: "Stage", value: "PA&L User Decision", },
];

export const agreementTabArray = [
    { id: 1, name: 'Agreement Status' },
    { id: 2, name: 'Agreement Details' },
    { id: 3, name: 'Operational Milestones' },
    { id: 4, name: 'Payment Milestones' },
    { id: 5, name: 'Deposits' },
    { id: 6, name: 'Audit History' },
];

export const agreement_process = {
    duration: "27 days",
    stages: [
        {
            stage: "Assigned to PA & L User",
            date: "14/12/2024",
            duration: "4hr 30min",
            status: 'completed'
        },
        {
            stage: "PA & L User Decision",
            date: "14/12/2024",
            duration: "4hr 30min",
            status: 'completed'
        },
        {
            stage: "PA & L Manager Decision",
            date: "14/12/2024",
            duration: "4hr 30min",
            status: 'inProcess'
        },
        {
            stage: "Finance Review",
            date: null,
            duration: null,
            status: 'pending'
        },
        {
            stage: "PA & L Zone Director Decision",
            date: null,
            duration: null,
            status: 'pending'
        },
        {
            stage: "Customer Signature",
            date: null,
            duration: null,
            status: 'pending'
        },
        {
            stage: "BS Zone Director Decision",
            date: null,
            duration: null,
            status: 'pending'
        },
        {
            stage: "End",
            date: null,
            duration: null,
            status: 'pending'
        }
    ]
}

export const agreementInformationHeader = [
    { id: 1, title: 'Agreement Template', name: 'agreementTemplate' },
    { id: 2, title: 'Agreement Type', name: 'agreementType' },
    { id: 3, title: 'Contract Duration', name: 'contractDuration' },
    { id: 4, title: 'Duration in Months', name: 'duration' },
    { id: 5, title: 'Commencement Date', name: 'commencementDate' },
    { id: 6, title: 'End Date', name: 'endDate' },
    { id: 7, title: 'Agreement Detail ID', name: 'agreement_ID' },
    { id: 8, title: 'Send to Customer', name: 'sendToCustomer' },
    { id: 9, title: 'Signed by Customer', name: 'signedByCustomer' },
    { id: 10, title: 'Status Reason', name: 'statusReason' },
];
export const agreementInformationData = { agreementTemplate: 'AGT0003748', agreementType: 'Lease', contractDuration: 25, duration: 25, commencementDate: '05/01/2025', endDate: '05/01/2025', agreement_ID: 'AGT0003748', sendToCustomer: 'Pending', signedByCustomer: 'Pending', statusReason: 'Pending' }

export const agreementRelatedInfoHeader = [
    { id: 1, title: "Investor", name: "investor", isLink: true },
    { id: 2, title: "Contact Person", name: "contactPerson", isLink: true },
    { id: 3, title: "Industrial Application", name: "industrialApplication", isLink: true },
    { id: 4, title: "AX Key", name: "AXKey" },
    { id: 5, title: "Sub Lease", name: "subLease" },
    { id: 6, title: "Old Agreement", name: "oldAgreement", isLink: true },
    { id: 7, title: "Cancellation Date", name: "cancellationDate" },
    { id: 8, title: "Trigger Investor Role", name: "trigerinvestorRole" },
    { id: 9, title: "Description", name: "decsription" },
]
export const agreementRelatedInformationData = { investor: 'Sosco Will', contactPerson: 'Arthur Tailor', industrialApplication: 'AG-INDUS-837636', oldAgreement: 'AG-INDUS-837636', AXKey: '', subLease: '', cancellationDate: '12/02/2025', trigerinvestorRole: 'no', description: '' }

export const agreementPlotInformationHeader = [
    { id: 1, title: 'Project', name: 'project' },
    { id: 2, title: 'Plot', name: 'plot' },
    { id: 3, title: 'Location EN', name: 'location_EN' },
    { id: 4, title: 'Plot Number', name: 'plotNUmber' },
    { id: 5, title: 'Plot Type', name: 'plotType' },
    { id: 6, title: 'Size', name: 'size' },
    { id: 7, title: 'Total QFA (m2)', name: 'totalQFA' },
    { id: 8, title: 'Dimension', name: 'dimension' },
    { id: 9, title: 'Old Cluster', name: 'oldCluster' },
    { id: 10, title: 'Status Reason', name: 'statusReason' },
    { id: 11, title: 'Sub Cluster', name: 'subCluster' }
]
export const agreementPlotInformationData = { project: 'AS', plot: 'AS-LP-A-242', location_EN: 'Aba Saleel Logistics Park', plotNumber: 'AS-LP-A-242', plotType: '', size: 1000.01, totalQFA: '', dimension: '', oldCluster: 'Light Industries & Assembly', statusReason: 'On Hold by Manateq', subCluster: '' }

export const agreementTimelineButtonsArray = [
    { id: 1, title: 'Expand All Records', icon: expandIcon, onClick: () => (console.log('test')), style: 'border-1 border-[#83764F]  text-[#83764F]' },
    { id: 2, title: 'Refresh Timeline', icon: refreshIcon, onClick: () => (console.log('test')), style: 'border-1 border-[#83764F]  text-[#83764F]' },
    { id: 3, icon: searchIcon, onClick: () => (console.log('test')), style: 'bg-[#93A6B30F]' },
    { id: 4, icon: menuIcon, onClick: () => (console.log('test')), style: 'flex shadow-sm justify-center' },
]


export const agreementAllTableHeader = [
        { id: 1, cell: (row: any) => ClickableCell(row, 'referenceID'), title: "Reference ID" },
        { id: 2, cell: (row: any) => ClickableCell(row, 'agreement'), title: "Agreement" },
        { id: 3, selector: "mandatory", title: "Mandatory" },
        { id: 4, selector: "collectedAmount", title: "Details Collected Amount" },
        { id: 5, selector: "remainingAmount", title: "Details Remaining Amount" },
        { id: 6, selector: "dueDate", title: "Due Date" },
        { id: 7, selector: "statusReason", title: "Status Reason" },
        { id: 8, selector: "isChequeReceived", title: "Is Cheque Received" }
    ];
    export const agreementAllTableData = [
        {
            "referenceID": "AG-LP-16664-00038833",
            "agreement": "AGT0003748",
            "mandatory": "Yes",
            "collectedAmount": "0.00 ر.ق",
            "remainingAmount": "0.00 ر.ق",
            "dueDate": "05/03/2025",
            "statusReason": "Active",
            "isChequeReceived": "No"
        },
        {
            "referenceID": "AG-LP-16664-00038834",
            "agreement": "AGT0003749",
            "mandatory": "No",
            "collectedAmount": "0.00 ر.ق",
            "remainingAmount": "0.00 ر.ق",
            "dueDate": "05/03/2025",
            "statusReason": "Active",
            "isChequeReceived": "No"
        }
    ]


    export const agreementOverDueHeader = [
        { id: 1, cell: (row: any) => ClickableCell(row, 'referenceID'), title: "Reference ID" },
        { id: 2, cell: (row: any) => ClickableCell(row, 'agreement'), title: "Agreement" },
        { id: 3, selector: "netValue", title: "Net Value" },
        { id: 4, selector: 'detailsAmount', title: 'Details Amount' },
        { id: 5, selector: 'detailsCollectedAmount', title: 'Details Collected Amount' },
        { id: 6, selector: 'detailsRemainingAmount', title: 'Details Remaining Amount' },

        { id: 7, selector: 'dueDate', title: 'Due Date' },
        { id: 8, selector: 'statusReason', title: 'Status Reason' },
        { id: 9, selector: 'createdOn', title: 'Created On' },
    ]
    export const agreementOverDuePaymentData =
        [
            {
                "ReferenceID": "AG-LP-883-000083",
                "agreement": "AG-LP-883-009590",
                "netValue": "10,002.00 ر.ق",
                "detailsAmount": "0.00 ر.ق",
                "detailsCollectedAmount": "0.00 ر.ق",
                "detailsRemainingAmount": "0.00 ر.ق",
                "dueDate": "05/03/2025",
                "statusReason": "Active",
                "createdOn": "05/03/2025 15:17"
            },
            {
                "ReferenceID": "AG-LP-883-000084",
                "agreement": "AG-LP-883-009591",
                "netValue": "15,750.00 ر.ق",
                "detailsAmount": "0.00 ر.ق",
                "detailsCollectedAmount": "0.00 ر.ق",
                "detailsRemainingAmount": "0.00 ر.ق",
                "dueDate": "05/03/2025",
                "statusReason": "Active",
                "createdOn": "05/03/2025 15:17"
            },
            {
                "ReferenceID": "AG-LP-883-000085",
                "agreement": "AG-LP-883-009592",
                "netValue": "8,500.00 ر.ق",
                "detailsAmount": "0.00 ر.ق",
                "detailsCollectedAmount": "0.00 ر.ق",
                "detailsRemainingAmount": "0.00 ر.ق",
                "dueDate": "05/03/2025",
                "statusReason": "Active",
                "createdOn": "05/03/2025 15:17"

            },
            {
                "ReferenceID": "AG-LP-883-000086",
                "agreement": "AG-LP-883-009593",
                "netValue": "22,300.00 ر.ق",
                "detailsCollectedAmount": "0.00 ر.ق",
                "detailsRemainingAmount": "0.00 ر.ق",
                "dueDate": "05/03/2025",
                "statusReason": "Active",
                "createdOn": "05/03/2025 15:17"
            },
            {
                "ReferenceID": "AG-LP-883-000087",
                "agreement": "AG-LP-883-009594",
                "netValue": "11,245.00 ر.ق",
                "detailsAmount": "0.00 ر.ق",
                "detailsCollectedAmount": "0.00 ر.ق",
                "detailsRemainingAmount": "0.00 ر.ق",
                "dueDate": "05/03/2025",
                "statusReason": "Active",
                "createdOn": "05/03/2025 15:17"
            }
        ];
    export const agreementInvoicedData =
        [
            {
                "ReferenceID": "AG-LP-883-000083",
                "agreement": "AG-LP-883-009590",
                "netValue": "10,002.00 ر.ق",
                "detailsAmount": "0.00 ر.ق",
                "detailsCollectedAmount": "0.00 ر.ق",
                "detailsRemainingAmount": "0.00 ر.ق",
                "dueDate": "05/03/2025",
                "statusReason": "Active",
                "createdOn": "05/03/2025 15:17"
            },
            {
                "ReferenceID": "AG-LP-883-000084",
                "agreement": "AG-LP-883-009591",
                "netValue": "15,750.00 ر.ق",
                "detailsAmount": "0.00 ر.ق",
                "detailsCollectedAmount": "0.00 ر.ق",
                "detailsRemainingAmount": "0.00 ر.ق",
                "dueDate": "05/03/2025",
                "statusReason": "Active",
                "createdOn": "05/03/2025 15:17"
            },
            {
                "ReferenceID": "AG-LP-883-000085",
                "agreement": "AG-LP-883-009592",
                "netValue": "8,500.00 ر.ق",
                "detailsAmount": "0.00 ر.ق",
                "detailsCollectedAmount": "0.00 ر.ق",
                "detailsRemainingAmount": "0.00 ر.ق",
                "dueDate": "05/03/2025",
                "statusReason": "Active",
                "createdOn": "05/03/2025 15:17"

            },
            {
                "ReferenceID": "AG-LP-883-000086",
                "agreement": "AG-LP-883-009593",
                "netValue": "22,300.00 ر.ق",
                "detailsCollectedAmount": "0.00 ر.ق",
                "detailsRemainingAmount": "0.00 ر.ق",
                "dueDate": "05/03/2025",
                "statusReason": "Active",
                "createdOn": "05/03/2025 15:17"
            },
            {
                "ReferenceID": "AG-LP-883-000087",
                "agreement": "AG-LP-883-009594",
                "netValue": "11,245.00 ر.ق",
                "detailsAmount": "0.00 ر.ق",
                "detailsCollectedAmount": "0.00 ر.ق",
                "detailsRemainingAmount": "0.00 ر.ق",
                "dueDate": "05/03/2025",
                "statusReason": "Active",
                "createdOn": "05/03/2025 15:17"
            }
        ];
    export const  agreementDueMonthHeader = [...agreementOverDueHeader, { id: 10, cell: (row: any) => ClickableCell(row, 'investor'), title: "Investor" },]
    export const agreementReturnHeader = [{ id: 1, cell: (row: any) => ClickableCell(row, 'Ref_ID'), title: "Reference ID" },
    { id: 2, cell: (row: any) => ClickableCell(row, 'agreement'), title: "Agreement" },
    { id: 3, selector: 'Agreement', title: 'Agreement' },
    { id: 4, selector: 'Net_Value', title: 'Net Value' },
    { id: 5, selector: 'Status_Reason', title: 'Status Reason' },
    { id: 6, selector: 'Created_On', title: 'Created On' },
    ];

    export const agreementeturnData = [
        {
            "Ref_ID": "AG-LP-883-000083",
            "Agreement": "AG-LP-883-009590",
            "Net_Value": "10,002.00 ر.ق",
            "Due_Date": "05/03/2025",
            "Status_Reason": "Active",
            "Created_On": "05/03/2023"
        },
        {
            "Ref_ID": "AG-LP-883-000083",
            "Agreement": "AG-LP-883-009590",
            "Net_Value": "10,002.00 ر.ق",
            "Due_Date": "05/03/2025",
            "Status_Reason": "Active",
            "Created_On": "05/03/2023"
        },
        {
            "Ref_ID": "AG-LP-883-000083",
            "Agreement": "AG-LP-883-009590",
            "Net_Value": "10,002.00 ر.ق",
            "Due_Date": "05/03/2025",
            "Status_Reason": "Active",
            "Created_On": "05/03/2023"
        },
        {
            "Ref_ID": "AG-LP-883-000083",
            "Agreement": "AG-LP-883-009590",
            "Net_Value": "10,002.00 ر.ق",
            "Due_Date": "05/03/2025",
            "Status_Reason": "Active",
            "Created_On": "05/03/2023"
        },
        {
            "Ref_ID": "AG-LP-883-000083",
            "Agreement": "AG-LP-883-009590",
            "Net_Value": "10,002.00 ر.ق",
            "Due_Date": "05/03/2025",
            "Status_Reason": "Active",
            "Created_On": "05/03/2023"
        }
    ]
    export const agreementStatusArray = [
        { id: 1, name: "All Payment Milestones", value: "allPaymentMilestones" },
        { id: 2, name: "Overdue Payment Milestone", value: "overduePaymentMilestone" },
        { id: 3, name: "Invoiced", value: "invoiced" },
        { id: 4, name: "Due this month", value: "dueThisMonth" },
        { id: 5, name: "Collected Payment", value: "collectedPayment" },
        { id: 6, name: "Returned Cancelled", value: "returnedCancelled" }
    ];

     export const agreementOperationalHeader = [
        { id: 1, cell: (row: any) => ClickableCell(row, 'referenceID'), title: "Reference ID" },
        { id: 2, cell: (row: any) => ClickableCell(row, 'agreement'), title: "Agreement" },
        { id: 3, selector: "mandatory", title: "Mandatory" },
        { id: 4, selector: "SLADuration", title: "SLA Duration" },
        { id: 5, selector: "SLADurationType", title: "SLA Duration Type" },
        { id: 6, selector: "dueDate", title: "Due Date" },
        { id: 7, selector: "statusReason", title: "Status Reason" },
        { id: 8, selector: "createdOn", title: "Created On" },
    ];

    export const agreementAuditHeader = [
        { id: 1, selector: "changedDate", title: "Changed Date" },
        { id: 2, selector: "changedBy", title: "Changed By" },
        { id: 3, selector: "event", title: "Event" },
        { id: 4, selector: "changedField", title: "Changed Field" },
        { id: 5, selector: "oldValue", title: "Old Value" }
    ];
    export const agreementAuditTableData = [
        {
            "changedDate": "03/02/2025 - 12:27",
            "changedBy": "D8346h728",
            "event": "Update",
            "changedField": "Land Use Activity",
            "oldValue": "Active Propos"
        },
        {
            "changedDate": "03/02/2025 - 12:27",
            "changedBy": "D8346h728",
            "event": "Update",
            "changedField": "Land Use Activity",
            "oldValue": "Active Propos"
        },
        {
            "changedDate": "03/02/2025 - 12:27",
            "changedBy": "D8346h728",
            "event": "Update",
            "changedField": "Land Use Activity",
            "oldValue": "Active Propos"
        }
    ]

 
      export const agreementReturnData = [
        {
            "Ref_ID": "AG-LP-883-000083",
            "Agreement": "AG-LP-883-009590",
            "Net_Value": "10,002.00 ر.ق",
            "Due_Date": "05/03/2025",
            "Status_Reason": "Active",
            "Created_On": "05/03/2023"
        },
        {
            "Ref_ID": "AG-LP-883-000083",
            "Agreement": "AG-LP-883-009590",
            "Net_Value": "10,002.00 ر.ق",
            "Due_Date": "05/03/2025",
            "Status_Reason": "Active",
            "Created_On": "05/03/2023"
        },
        {
            "Ref_ID": "AG-LP-883-000083",
            "Agreement": "AG-LP-883-009590",
            "Net_Value": "10,002.00 ر.ق",
            "Due_Date": "05/03/2025",
            "Status_Reason": "Active",
            "Created_On": "05/03/2023"
        },
        {
            "Ref_ID": "AG-LP-883-000083",
            "Agreement": "AG-LP-883-009590",
            "Net_Value": "10,002.00 ر.ق",
            "Due_Date": "05/03/2025",
            "Status_Reason": "Active",
            "Created_On": "05/03/2023"
        },
        {
            "Ref_ID": "AG-LP-883-000083",
            "Agreement": "AG-LP-883-009590",
            "Net_Value": "10,002.00 ر.ق",
            "Due_Date": "05/03/2025",
            "Status_Reason": "Active",
            "Created_On": "05/03/2023"
        }
    ];

 export const agreementStatusHeader = [
        { id: 1, title: 'Request Status', name: 'requestStatus',isLink:true },
        { id: 2, title: 'Decision', name: 'decision' },
        { id: 2, title: 'Status', name: 'status' },
    ];
  // 