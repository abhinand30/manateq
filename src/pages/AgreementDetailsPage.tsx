import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TabHeader from '@/components/TabHeader'
import ProgressCard from '@/components/ProgressCard';
import Layout from '@/components/Layout'
import Header from '@/components/Header';
import refreshIcon from "@/assets/icons/refreshIcon.png"
import expandIcon from "@/assets/icons/expandIcon.png"
import searchIcon from '@/assets/icons/search.svg';
import menuIcon from '@/assets/icons/menuIcon.png'
import clipIcon from '@/assets/icons/clipIcon.png';
import ViewMoreText from '@/components/ViewMore';
import ButtonComponent from '@/components/ButtonComponent';
import { getFirstLetters } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import chatIcon from '@/assets/icons/chatIcon.png'
import { ClickableCell } from '@/components/ClickableCell';
import CommonTable from '@/components/CommonTable';
import { emailData, exportTypeArray } from '@/data/data';
import DropDownComponent from '@/components/DropDownComponent';


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
    { id: 6, name: 'Audit History' },
];

const agreement_process = {
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
                return <Deposits />
            case 6:
                return <AuditHistory />
        }

    }
    return (
        <Layout>
            <Header />
            <div className="flex gap-2 p-2">
                {/* Left side */}
                <div className='w-3/4 p-2'>
                    <TabHeader data={agreementData} tabArray={tabArray} activeTab={activeTab} setActiveTab={setActiveTab} />
                    {renderComponent()}
                </div>

                {/* Right side */}
                <div>
                    <ProgressCard data={agreement_process} />
                </div>
            </div>
        </Layout>

    )
}

export default AgreementDetailsPage;

const AgreementStatus = () => {
    return (
        <div>

        </div>
    )
}

const AgreementDetails = () => {
    const [isCollapse, setIsCollapse] = useState<boolean>(false);
    const [openAccordion, setOpenAccordion] = useState(null);


    const agreementArray = [
        { id: 1, title: 'agreement Information' },
        { id: 3, title: 'Related Information' },
        { id: 4, title: 'Plot Information' }
    ];

    const toggleAccordion = (id: any) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    const agreementInformationHeader = [
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
    const agreementInformationData = { agreementTemplate: 'AGT0003748', agreementType: 'Lease', contractDuration: 25, duration: 25, commencementDate: '05/01/2025', endDate: '05/01/2025', agreement_ID: 'AGT0003748', sendToCustomer: 'Pending', signedByCustomer: 'Pending', statusReason: 'Pending' }

    const relatedInformationHeader = [
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
    const relatedInformationData = { investor: 'Sosco Will', contactPerson: 'Arthur Tailor', industrialApplication: 'AG-INDUS-837636', oldAgreement: 'AG-INDUS-837636', AXKey: '', subLease: '', cancellationDate: '12/02/2025', trigerinvestorRole: 'no', description: '' }

    const plotInformationHeader = [
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
    const plotInformationData = { project: 'AS', plot: 'AS-LP-A-242', location_EN: 'Aba Saleel Logistics Park', plotNumber: 'AS-LP-A-242', plotType: '', size: 1000.01, totalQFA: '', dimension: '', oldCluster: 'Light Industries & Assembly', statusReason: 'On Hold by Manateq', subCluster: '' }

    const buttonArray = [
        { id: 1, title: 'Expand All Records', icon: expandIcon, onClick: () => (console.log('test')), style: 'border-1 border-[#83764F]  text-[#83764F]' },
        { id: 2, title: 'Refresh Timeline', icon: refreshIcon, onClick: () => (console.log('test')), style: 'border-1 border-[#83764F]  text-[#83764F]' },
        { id: 3, icon: searchIcon, onClick: () => (console.log('test')), style: 'bg-[#93A6B30F]' },
        { id: 4, icon: menuIcon, onClick: () => (console.log('test')), style: 'flex shadow-sm justify-center' },
    ]
    return (
        <div >

            <div className="shadow-sm p-6 rounded-[10px] ">

                <div className='border border-gray-200 rounded-[10px]'>
                    {agreementArray.map((agreement) => (
                        <div key={agreement.id} className='border-t-1  border-gray-200 dark:border-gray-700'>
                            <h2 id={`accordion-heading-${agreement.id}`}>
                                <button className={`flex items-center justify-between w-full p-5 font-medium  ${openAccordion === agreement.id ? 'text-[#862634]' : 'text-gray-500'}  dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
                                    onClick={() => toggleAccordion(agreement.id)}
                                    aria-expanded={openAccordion === agreement.id}
                                    aria-controls={`accordion-body-${agreement.id}`}
                                >
                                    <span className={`flex items-center capitalize`}>{agreement.title}</span>
                                    <svg
                                        className={`w-3 h-3 shrink-0 ${openAccordion === agreement.id ? '' : 'rotate-180'}`}
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5 5 1 1 5"
                                        />
                                    </svg>
                                </button>
                            </h2>
                            {openAccordion === agreement.id && (
                                <div id={`accordion-body-${agreement.id}`} className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                    {openAccordion === agreement.id && (
                                        <div id={`accordion-body-${agreement.id}`} className="p-5">
                                            {(() => {
                                                switch (agreement.title) {
                                                    case 'agreement Information':
                                                        return (
                                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4  border  border-gray-200 dark:border-gray-700 dark:bg-gray-900 p-4">
                                                                {agreementInformationHeader.map((info, index) => (
                                                                    <div key={index}>
                                                                        <p className="text-[#231F2099]">{info.title}</p>
                                                                        <p>{agreementInformationData[info.name] === '' ? '--' : agreementInformationData[info.name]}</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        );
                                                    case 'Related Information':
                                                        return (
                                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4  border  border-gray-200 dark:border-gray-700 dark:bg-gray-900 p-4">
                                                                {relatedInformationHeader.map((item, index) => (
                                                                    <div key={index}>
                                                                        <p className="text-[#231F2099]">{item.title}</p>
                                                                        <p>{relatedInformationData[item.name] === '' ? '--' : relatedInformationData[item.name]}</p>
                                                                    </div>
                                                                ))}
                                                            </div>

                                                        )
                                                    case 'Plot Information':
                                                        return (
                                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4  border  border-gray-200 dark:border-gray-700 dark:bg-gray-900 p-4">
                                                                {plotInformationHeader.map((item, index) => (
                                                                    <div key={index}>
                                                                        <p className="text-[#231F2099]">{item.title}</p>
                                                                        <p>{plotInformationData[item.name] === '' ? '--' : plotInformationData[item.name]}</p>
                                                                    </div>
                                                                ))}
                                                            </div>

                                                        )
                                                    default:
                                                        return null;
                                                }
                                            })()}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {/* Timeline */}
            <div className='p-4 bg-white shadow-sm mt-5 rounded-lg'>
                <div className='flex justify-between'>
                    <p className='text-[#862634]'>Timeline</p>
                    <div className='flex gap-3'>
                        {buttonArray.map((button) => (
                            <ButtonComponent onClick={button.onClick} style={button.style}>
                                <img src={button.icon} />
                                <span>{button.title}</span>
                            </ButtonComponent>
                        ))}
                    </div>

                </div>
                <div>

                    <div className='relative w-full mt-5'>
                        <textarea id="message" rows={3} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter a note..."></textarea>
                        <img src={clipIcon} alt='icon' className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer" />
                    </div>


                </div>
                <div className='flex gap-5 mt-10 items-center'>
                    <hr className='w-[90%]' />
                    <div className='flex gap-2 items-center' onClick={() => setIsCollapse(!isCollapse)}>
                        {isCollapse ? 'Collapse' : 'Expand'}
                        <svg
                            className={`w-3 h-3 shrink-0 ${isCollapse ? '' : 'rotate-180'}`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        > <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            /></svg>
                    </div>
                </div>
                <div >
                    {isCollapse && (
                        emailData.map((email, index) => (
                            <div key={index} className='flex gap-2 mt-5'>
                                <div className='flex size-[40px] bg-[#E7D4D680] rounded-full items-center justify-center text-[#862634]'>
                                    <span>{getFirstLetters(email.user)}</span>
                                </div>
                                <div className='border-1 w-[95%] p-4 rounded-sm'>

                                    <div className='flex bg-[#862634] gap-2 text-white p-1 px-2 rounded-r-lg rounded-l-e-sm rounded-bl-lg w-[270px]'><img src={chatIcon} alt='logo' className='size-[20px]' />Email from:<Link to='#' className='underline'>Salman Hameed</Link></div>
                                    <ViewMoreText text={email.msg} />
                                </div>

                            </div>
                        ))

                    )}

                </div>
            </div>
        </div>
    )
}

const OperationalMilestone = () => {

    const TableHeader = [
        { id: 1, cell: (row: any) => ClickableCell(row, 'referenceID'), title: "Reference ID" },
        { id: 2, cell: (row: any) => ClickableCell(row, 'agreement'), title: "Agreement" },
        { id: 3, selector: "mandatory", title: "Mandatory" },
        { id: 4, selector: "SLADuration", title: "SLA Duration" },
        { id: 5, selector: "SLADurationType", title: "SLA Duration Type" },
        { id: 6, selector: "dueDate", title: "Due Date" },
        { id: 7, selector: "statusReason", title: "Status Reason" },
        { id: 8, selector: "createdOn", title: "Created On" },
    ];
    const tableData = [
        { "referenceID": "AG-LP-16664-00038833", "agreement": "AGT0003748", "mandatory": "Yes", "SLADuration": "18/02/2024", "SLADurationType": "Normal", "dueDate": "18/02/2024", "statusReason": "Pending", "createdOn": "18/02/2024 08:15" }
    ]
    return (
        <div>
            <CommonTable data={tableData} header={TableHeader} />
        </div>
    )
};


const PaymentMilestone = () => {
    const [exportType, setExportType] = useState<string>('');
   const [status, setStatus] = useState('allPaymentMilestones');

    const allTableHeader = [
        { id: 1, cell: (row: any) => ClickableCell(row, 'referenceID'), title: "Reference ID" },
        { id: 2, cell: (row: any) => ClickableCell(row, 'agreement'), title: "Agreement" },
        { id: 3, selector: "mandatory", title: "Mandatory" },
        { id: 4, selector: "collectedAmount", title: "Details Collected Amount" },
        { id: 5, selector: "remainingAmount", title: "Details Remaining Amount" },
        { id: 6, selector: "dueDate", title: "Due Date" },
        { id: 7, selector: "statusReason", title: "Status Reason" },
        { id: 8, selector: "isChequeReceived", title: "Is Cheque Received" }
    ];
    const allTableData = [
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
   

    const overDueHeader = [
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
    const overDuePaymentData =
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
    const invoicedData =
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
    const dueMonthHeader = [...overDueHeader, { id: 10, cell: (row: any) => ClickableCell(row, 'investor'), title: "Investor" },]
    const returnHeader = [{ id: 1, cell: (row: any) => ClickableCell(row, 'Ref_ID'), title: "Reference ID" },
    { id: 2, cell: (row: any) => ClickableCell(row, 'agreement'), title: "Agreement" },
    { id: 3, selector: 'Agreement', title: 'Agreement' },
    { id: 4, selector: 'Net_Value',title:'Net Value' },
    {id: 5, selector: 'Status_Reason',title:'Status Reason'},
    {id: 6, selector: 'Created_On',title:'Created On'},
];

    const returnData = [
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
     const statusArray = [
        { id: 1, name: "All Payment Milestones", value: "allPaymentMilestones" },
        { id: 2, name: "Overdue Payment Milestone", value: "overduePaymentMilestone" },
        { id: 3, name: "Invoiced", value: "invoiced" },
        { id: 4, name: "Due this month", value: "dueThisMonth" },
        { id: 5, name: "Collected Payment", value: "collectedPayment" },
        { id: 6, name: "Returned Cancelled", value: "returnedCancelled" }
    ];


    return (
        <div className='shadow-xl rounded-[16px] p-4 gap-[10px] '>
            <div className='flex justify-between  items-center py-2'>
                  <DropDownComponent value={status} setValue={setStatus} data={statusArray} title={'Status'} />
                <DropDownComponent value={exportType} setvalue={setExportType} data={exportTypeArray} title={'Export'} />
            </div>
            {(()=>{
                switch(status){
                    case 'allPaymentMilestones':
                    return (<CommonTable header={allTableHeader} data={allTableData}/>)
                
                    case'overduePaymentMilestone':
                    return(<CommonTable header={overDueHeader} data={overDuePaymentData}/>)

                     case'invoiced':
                    return(<CommonTable header={allTableHeader} data={invoicedData}/>)

                     case'dueThisMonth':
                    return(<CommonTable header={dueMonthHeader} data={allTableData}/>)

                     case'collectedPayment':
                    return(<CommonTable header={allTableHeader} data={allTableData}/>)
                     case'returnedCancelled':
                    return(<CommonTable header={returnHeader} data={returnData}/>)
                      default:
                            return null;
                }
                })()}
        </div>
    )
}

const Deposits = () => {
    const [exportType, setExportType] = useState<string>('');
    const TableHeader = [
        { id: 1, cell: (row: any) => ClickableCell(row, "referenceID"), title: "Reference ID" },
        { id: 2, cell: (row: any) => ClickableCell(row, "agreement"), title: "Agreement" },
        { id: 3, selector: "checkNumber", title: "Check Number" },
        { id: 4, selector: "amount", title: "Amount" },
        { id: 5, selector: "bankName", title: "Bank Name" },
        { id: 6, selector: "depositStatus", title: "deposit Status" },
        { id: 7, selector: 'createdOn', title: 'Created On' }
    ];

    const tableData = [
        {
            referenceID: "AG-LP-16664-00038833",
            agreement: "AGT0003748",
            checkNumber: "123456789",
            amount: "50,000",
            bankName: "QIB",
            depositStatus: 'Deposited',
            createdOn: '01/01/2025'

        }
    ];

    return (
        <div className='shadow-xl rounded-[16px] p-4 gap-[10px] '>
            <div className='flex justify-between  items-center py-2'>
                <p>Deposits</p>
                <DropDownComponent value={exportType} setvalue={setExportType} data={exportTypeArray} title={'Export'} />
            </div>
            <CommonTable data={tableData} header={TableHeader} />
        </div>
    )
}

const AuditHistory = () => {
    const TableHeader = [
        { id: 1, selector: "changedDate", title: "Changed Date" },
        { id: 2, selector: "changedBy", title: "Changed By" },
        { id: 3, selector: "event", title: "Event" },
        { id: 4, selector: "changedField", title: "Changed Field" },
        { id: 5, selector: "oldValue", title: "Old Value" }
    ];
    const tableData = [
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
    const invoicedData = [
        {
            "Details Collected Amount": "0.00 ر.ق",
            "Details Remaining Amount": "0.00 ر.ق",
            "Due Date": "05/03/2025",
            "Status Reason": "Active",
            "Created On": "05/03/2025 15:17"
        },
        {
            "Details Collected Amount": "0.00 ر.ق",
            "Details Remaining Amount": "0.00 ر.ق",
            "Due Date": "05/03/2025",
            "Status Reason": "Active",
            "Created On": "05/03/2025 15:17"
        },
        {
            "Details Collected Amount": "0.00 ر.ق",
            "Details Remaining Amount": "0.00 ر.ق",
            "Due Date": "05/03/2025",
            "Status Reason": "Active",
            "Created On": "05/03/2025 15:17"
        },
        {
            "Details Collected Amount": "0.00 ر.ق",
            "Details Remaining Amount": "0.00 ر.ق",
            "Due Date": "05/03/2025",
            "Status Reason": "Active",
            "Created On": "05/03/2025 15:17"
        },
        {
            "Details Collected Amount": "0.00 ر.ق",
            "Details Remaining Amount": "0.00 ر.ق",
            "Due Date": "05/03/2025",
            "Status Reason": "Active",
            "Created On": "05/03/2025 15:17"
        }
    ]

    return (
        <div className='shadow-xl rounded-[16px] p-4 gap-[10px] '>
            <div className='flex justify-between  items-center py-2'>
                <p>Deposits</p>
                <button className='flex gap-2 text-[#83764F] border-[#83764F] rounded-lg border border-1 p-2  px-5'><img src={refreshIcon} alt="re" />Refresh</button>
            </div>
            <CommonTable data={tableData} header={TableHeader} />
        </div>
    )
}