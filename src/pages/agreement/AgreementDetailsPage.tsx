import { useState } from 'react';
import { Link } from 'react-router-dom';

import TabHeader from '@/components/TabHeader'
import ProgressCard from '@/components/ProgressCard';
import Layout from '@/components/Layout'
import Header from '@/components/Header';
import refreshIcon from "@/assets/icons/refreshIcon.png"
import clipIcon from '@/assets/icons/clipIcon.png';
import ViewMoreText from '@/components/ViewMore';
import ButtonComponent from '@/components/ButtonComponent';
import { getFirstLetters } from '@/lib/utils';
import chatIcon from '@/assets/icons/chatIcon.png'
import { ClickableCell } from '@/components/ClickableCell';
import CommonTable from '@/components/CommonTable';
import {
    agreement_process, agreementAllTableData, agreementAllTableHeader, agreementAuditHeader, agreementAuditTableData, agreementDueMonthHeader, agreementInformationData, agreementInformationHeader, agreementInvoicedData, agreementOperationalHeader, agreementOverDueHeader, agreementOverDuePaymentData,
    agreementPlotInformationData, agreementPlotInformationHeader, agreementRelatedInfoHeader, agreementRelatedInformationData, agreementReturnData, agreementReturnHeader, agreementStatusArray, agreementStatusHeader, agreementTabArray,
    agreementTabData, agreementTimelineButtonsArray, emailData, exportTypeArray
} from '@/data/data';
import DropDownComponent from '@/components/DropDownComponent';
import { ArrowUpRight } from 'lucide-react';




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
                    <TabHeader data={agreementTabData} tabArray={agreementTabArray} activeTab={activeTab} setActiveTab={setActiveTab} />
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

    const agreementStatusData = { requestStatus: 'PA&L User Decision', decision: '', status: 'Pending Approval - PA&l User' }
    return (
        <div className='p-4  bg-white rounded-xl'>
            <p className='text-redcolor mb-5'>Agreement Status</p>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 bg-bgColor rounded-[16px] dark:border-gray-700 dark:bg-gray-900 p-4">
                {agreementStatusHeader.map(({ title, name, isLink }, index) => {
                    const value = agreementStatusData[name as keyof typeof agreementStatusData] || '--';

                    return (
                        <div key={index}>
                            <p className="text-[#231F2099]">{title}</p>

                            {name === 'status' ? (
                                <div className="w-full max-w-[1000px] h-20 rounded-[10px] bg-white flex items-center p-2">
                                    <p>{value}</p>
                                </div>
                            ) : (
                                <p className={`flex items-center ${isLink ? 'text-linkcolor' : ''}`}>
                                    {value}
                                    {isLink && <ArrowUpRight className="size-[16px]" />}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>

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


    return (
        <div >

            <div className=" p-6 rounded-[10px] bg-white ">

                <div className='border border-gray-200 rounded-[10px]'>
                    {agreementArray.map((agreement) => (
                        <div key={agreement.id} className='border-t-1  border-gray-200 dark:border-gray-700'>
                            <h2 id={`accordion-heading-${agreement.id}`}>
                                <button className={`flex items-center justify-between w-full p-5 font-medium  ${openAccordion === agreement.id ? 'text-redcolor' : 'text-gray-500'}  dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
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
                                <div id={`accordion-body-${agreement.id}`} className="p-5  border-b-1 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
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
                                                                        <p>{agreementInformationData[info.name as keyof typeof agreementInformationData] === '' ? '--' : agreementInformationData[info.name as keyof typeof agreementInformationData]}</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        );
                                                    case 'Related Information':
                                                        return (
                                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4  border  border-gray-200 dark:border-gray-700 dark:bg-gray-900 p-4">
                                                                {agreementRelatedInfoHeader.map((item, index) => (
                                                                    <div key={index}>
                                                                        <p className="text-[#231F2099]">{item.title}</p>
                                                                        <p>{agreementRelatedInformationData[item.name as keyof typeof agreementRelatedInformationData] === '' ? '--' : agreementRelatedInformationData[item.name as keyof typeof agreementRelatedInformationData]}</p>
                                                                    </div>
                                                                ))}
                                                            </div>

                                                        )
                                                    case 'Plot Information':
                                                        return (
                                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4  border  border-gray-200 dark:border-gray-700 dark:bg-gray-900 p-4">
                                                                {agreementPlotInformationHeader.map((item, index) => (
                                                                    <div key={index}>
                                                                        <p className="text-[#231F2099]">{item.title}</p>
                                                                        <p>{agreementPlotInformationData[item.name as keyof typeof agreementPlotInformationData] === '' ? '--' : agreementPlotInformationData[item.name as keyof typeof agreementPlotInformationData]}</p>
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
                    <p className='text-redcolor'>Timeline</p>
                    <div className='flex gap-3'>
                        {agreementTimelineButtonsArray.map((button,index) => (
                            <ButtonComponent key={index} onClick={button.onClick} style={button.style}>
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
                                <div className='flex size-[40px] bg-[#E7D4D680] rounded-full items-center justify-center text-redcolor'>
                                    <span>{getFirstLetters(email.user)}</span>
                                </div>
                                <div className='border-1 w-[95%] p-4 rounded-sm'>

                                    <div className='flex bg-redcolor gap-2 text-white p-1 px-2 rounded-r-lg rounded-l-e-sm rounded-bl-lg w-[270px]'><img src={chatIcon} alt='logo' className='size-[20px]' />Email from:<Link to='#' className='underline'>Salman Hameed</Link></div>
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


    const tableData = [
        { "referenceID": "AG-LP-16664-00038833", "agreement": "AGT0003748", "mandatory": "Yes", "SLADuration": "18/02/2024", "SLADurationType": "Normal", "dueDate": "18/02/2024", "statusReason": "Pending", "createdOn": "18/02/2024 08:15" }
    ]
    return (
        <div>
            <CommonTable data={tableData} header={agreementOperationalHeader} />
        </div>
    )
};


const PaymentMilestone = () => {
    const [exportType, setExportType] = useState<string>('');
    const [status, setStatus] = useState('dueThisMonth');



    return (
        <div className='bg-white rounded-[16px] p-4 gap-[10px] '>
            <div className='flex justify-between  items-center py-2'>
                <DropDownComponent value={status} setValue={setStatus} data={agreementStatusArray} title={'Status'} />
                <DropDownComponent value={exportType} setValue={setExportType} data={exportTypeArray} title={'Export'} />
            </div>
            {(() => {
                switch (status) {
                    case 'allPaymentMilestones':
                        return (<CommonTable header={agreementAllTableHeader} data={agreementAllTableData} />)

                    case 'overduePaymentMilestone':
                        return (<CommonTable header={agreementOverDueHeader} data={agreementOverDuePaymentData} />)

                    case 'invoiced':
                        return (<CommonTable header={agreementAllTableHeader} data={agreementInvoicedData} />)

                    case 'dueThisMonth':
                        return (<CommonTable header={agreementDueMonthHeader} data={agreementAllTableData} />)

                    case 'collectedPayment':
                        return (<CommonTable header={agreementAllTableHeader} data={agreementAllTableData} />)
                    case 'returnedCancelled':
                        return (<CommonTable header={agreementReturnHeader} data={agreementReturnData} />)
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
        <div className='bg-white rounded-[16px] p-4 gap-[10px] '>
            <div className='flex justify-between  items-center py-2'>
                <p className='text-redcolor'>Deposits</p>
                <DropDownComponent value={exportType} setValue={setExportType} data={exportTypeArray} title={'Export'} />
            </div>
            <CommonTable data={tableData} header={TableHeader} />
        </div>
    )
}


const AuditHistory = () => {
    return (
        <div className='bg-white rounded-[16px] p-4 gap-[10px] '>
            <div className='flex justify-between  items-center py-2'>
                <p className='text-redcolor'>Audit History</p>
                <button className='flex gap-2 text-[#83764F] border-[#83764F] rounded-lg  border-1 p-2  px-5'><img src={refreshIcon} alt="re" />Refresh</button>
            </div>
            <CommonTable data={agreementAuditTableData} header={agreementAuditHeader} />
        </div>
    )
}