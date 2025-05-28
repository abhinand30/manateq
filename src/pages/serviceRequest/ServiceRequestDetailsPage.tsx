import { ArrowUpRight, PlusIcon, RefreshCwIcon, SaveIcon } from 'lucide-react';
import { useState } from 'react'
import { Link } from 'react-router-dom';

import Header from '@/components/Header'
import Layout from '@/components/Layout'
import ProgressCard from '@/components/ProgressCard';
import SubHeader from '@/components/SubHeader'
import TabHeader from '@/components/TabHeader';
import searchIcon from '@/assets/icons/search.svg';
import expandIcon from "@/assets/icons/expandIcon.png"
import menuIcon from '@/assets/icons/menuIcon.png';
import refreshIcon from "@/assets/icons/refreshIcon.png"
import ButtonComponent from '@/components/ButtonComponent';
import clipIcon from '@/assets/icons/clipIcon.png';
import ViewMoreText from '@/components/ViewMore';
import { getFirstLetters } from '@/lib/utils';
import { agreementAuditTableData, emailData } from '@/data/data';
import chatIcon from '@/assets/icons/chatIcon.png'
import CommonTable from '@/components/CommonTable';
import { ClickableCell } from '@/components/ClickableCell';



const ServiceRequestTabData = [
  { title: "Reference ID", value: "AG-LP-66664-0038833", },
  { title: "Status Reason", value: "Pending", },
];
const ServiceRequestTabArray = [
  { id: 1, name: 'General' },
  { id: 2, name: 'Timeline' },
  { id: 3, name: 'Administration' },
  { id: 4, name: 'Audit History' },
];

const serviceRequest_process = {
  duration: "Active for 5 days",
  "stages": [
    {
      "stage": "Legal Team",
      "date": "14/12/2024",
      "duration": "4hr 30min",
      "status": "completed"
    },
    {
      "stage": "Finance Director",
      "date": "No date available",
      "status": "inProcess"
    },
    {
      "stage": "Chief of Requesting Department",
      "date": "No date available",
      "status": "pending"
    },
    {
      "stage": "End",
      "date": "No date available",
      "status": "pending"
    }
  ]
}


const serviceRequestAuditHeader = [
  { id: 1, selector: "changedDate", title: "Changed Date" },
  { id: 2, cell: (row: any) => ClickableCell(row, "changedBy"), title: "Changed By" },
  { id: 3, cell: (row: any) => ClickableCell(row, "event"), title: "Event" },
  { id: 4, selector: "changedField", title: "Changed Field" },
  { id: 5, selector: "oldValue", title: "Old Value" },
  { id: 6, selector: "newValue", title: "New Value" }
];
function ServiceRequestDetailsPage() {
  const [activeTab, setActiveTab] = useState<number>(1);
  const renderComponent = () => {
    switch (activeTab) {
      case 1:
        return <General />

      case 2:
        return <Timeline />
      case 3:
        return <Administration />
      case 4:
        return <AuditHistory />
    }

  }
  const buttonArray=[
    
  ]
  return (
    <Layout>
      <Header />
      <SubHeader />
      <div className="flex gap-2 p-2">
        {/* Left side */}
        <div className='w-3/4 p-2'>
            <div className='flex justify-end gap-5 mb-4'>
              {/* <img src={refreshIcon} alt="re" /> */}
               <button className='flex gap-2 text-[#83764F] border-[#83764F] rounded-lg  border-1 p-2  px-5'><PlusIcon/> Add New Request</button>
                <button className='flex gap-2 text-[#83764F] border-[#83764F] rounded-lg  border-1 p-2  px-5'><RefreshCwIcon/> Refresh</button>
                 <button className='flex gap-2 text-[#83764F] border-[#83764F] rounded-lg  border-1 p-2  px-5'><SaveIcon/> Save</button>
            </div>
          <TabHeader data={ServiceRequestTabData} tabArray={ServiceRequestTabArray} activeTab={activeTab} setActiveTab={setActiveTab} />
          {renderComponent()}
        </div>

        {/* Right side */}
        <div>
          <ProgressCard data={serviceRequest_process} />
        </div>
      </div>
    </Layout>
  )
};

export default ServiceRequestDetailsPage;

const General = () => {


  const serviceRequestBlackListHeader = [
    { id: 1, title: 'Investor', name: 'invetor', isLink: true },
    { id: 2, title: 'Contact Person', name: 'contactPerson', isLink: true },
    { id: 3, title: 'Plot Number', name: 'plotNumber', isLink: true },
    { id: 4, title: 'Current Agreement', name: 'currentAgreement', isLink: true },
    { id: 5, title: 'Requesting Department', name: 'requestingDepartment', isLink: true },
    { id: 6, title: 'Type', name: 'type', },
    { id: 7, title: 'Comment', name: 'comment' },


  ];
  const serviceReqBlackListGeneralData = {
    "investor": "Sosco WLI",
    "contactPerson": "Aftab Khan",
    "plotNumber": "Ak-LP-B-119",
    "currentAgreement": "AG-LP-5774-000003848",
    "requestingDepartment": "manateq-crm-sb",
    "type": "---",
    "comment": "---"
  }

  return (
    <div className='bg-white p-4'>
      <p className='text-redcolor mb-5'>Information</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-bgColor rounded-[16px] dark:border-gray-700 dark:bg-gray-900 p-4">
        {serviceRequestBlackListHeader.map(({ title, name, isLink }, index) => (
          <div key={index}>
            <p>{title}</p>
            {name === 'comment' ? (
              <div className='flex w-[500px] h-15 bg-white border-1 rounded-sm p-4'>
                {serviceReqBlackListGeneralData[name]}
              </div>
            ) : (
              <div className='flex items-center justify-between'>
                <p className={`flex items-center ${isLink ? 'text-linkcolor' : ''}`}>
                  {serviceReqBlackListGeneralData[name]} <ArrowUpRight className="size-[16px]" />
                </p>
                <button className='button-container size-[40px] border-1 bg-bgColor'>
                  <img src={searchIcon} alt='search' />
                </button>

              </div>
            )}



          </div>
        ))}
      </div>
    </div>
  )
};

const Timeline = () => {
  const [isCollapse, setIsCollapse] = useState<boolean>(false);
  const agreementTimelineButtonsArray = [
    { id: 1, title: 'Expand All Records', icon: expandIcon, onClick: () => (console.log('test')), style: 'border-1 border-[#83764F]  text-[#83764F]' },
    { id: 2, title: 'Refresh Timeline', icon: refreshIcon, onClick: () => (console.log('test')), style: 'border-1 border-[#83764F]  text-[#83764F]' },
    { id: 3, icon: searchIcon, onClick: () => (console.log('test')), style: 'bg-[#93A6B30F]' },
    { id: 4, icon: menuIcon, onClick: () => (console.log('test')), style: 'flex shadow-sm justify-center' },
  ]
  return (
    <div className='p-4 bg-white shadow-sm mt-5 rounded-lg'>
      <div className='flex justify-between'>
        <p className='text-redcolor'>Timeline</p>
        <div className='flex gap-3'>
          {agreementTimelineButtonsArray.map((button, index) => (
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
  )
}
const Administration = () => {

  const administartionBlackListData = {
    "created_by": "Lama Yamout",
    "created_on": "2025-01-09T09:40:00",
    "modified_by": "Aftab Ahmed",
    "modified_on": "2025-01-09T09:40:00",
    "owner": "Finance Team",
    "name": "1078"
  }

  const administartionHeaderBlackListHeader = [
    { id: 1, title: 'Created By', name: 'created_by', isLink: true, },
    { id: 2, title: 'Created On', name: 'created_on', },
    { id: 3, title: 'Modified By', name: 'modified_by', isLink: true },
    { id: 4, title: 'Modified On', name: 'modified_on', },
    { id: 5, title: 'Owner', name: 'owner', isLink: true, isSearch: true },
    { id: 6, title: 'Name', name: 'name', },

  ]
  return (
    <div className='bg-white p-4'>
      <p className='text-redcolor mb-5'>Administration</p>
      
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-bgColor rounded-[16px] dark:border-gray-700 dark:bg-gray-900 p-4">
          {administartionHeaderBlackListHeader.map(({ title, name, isLink, isSearch }, index) => (
            <div key={index} className='mb-5'>
              <p>{title}</p>
              <div className="flex items-center justify-between">
                <p className={`flex items-center ${isLink ? 'text-linkcolor underline' : ''}`}>
                  {administartionBlackListData[name]} {isLink && <ArrowUpRight className="size-[16px]" />}
                </p>
                {isSearch && (
                  <button className="button-container size-[40px] border-1 mr-5">
                    <img src={searchIcon} alt="search" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

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
      <CommonTable data={agreementAuditTableData} header={serviceRequestAuditHeader} />
    </div>
  )
}