import React, { useState } from 'react';

import Layout from '@/components/Layout'
import buildingIcon from '../assets/icons/buildingIcon.png'
import Header from '@/components/Header';
import profileImage from '@/assets/profile.jpg';
import DropDownComponent from '@/components/DropDownComponent';
import CommonTable from '@/components/CommonTable';
import refreshIcon from "@/assets/icons/refreshIcon.png"
import ButtonComponent from '@/components/ButtonComponent';
import expandIcon from "@/assets/icons/expandIcon.png"
import searchIcon from '@/assets/icons/search.svg';
import menuIcon from '@/assets/icons/menuIcon.png'
// import { useLocation } from 'react-router-dom';

const InvestorDetailPage = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const investorData = [
    { id: 1, title: 'CR Number', value: 1929 },
    { id: 2, title: 'Qatari Owned Percentage', value: 0 },
    { id: 3, title: 'Foreign Owned Percentage', value: 0 },
    { id: 4, title: 'Owner', value: 'abdulla Ahammed' },
  ];

  const tabArray = [
    { id: 1, name: 'summary' },
    { id: 2, name: 'applications' },
    { id: 3, name: 'agreements' },
    { id: 4, name: 'service and operational requests' },
    { id: 5, name: 'audit history' },
  ];

  const renderComponent = () => {
    switch (activeTab) {
      case 1:
        return <Summary />
      case 2:
        return <Applications />
      case 3:
        return <Agreements />
      case 4:
        return <ServiceRequest />
      case 5:
        return <AuditHistory />
    }

  }
  return (
    <Layout>
      <Header />
      <div className="p-4">


        {/*Tab  */}
        <div className='h-[260px] w-auto  shadow-sm rounded-[10px] py-4 mb-5'>
          <div className='flex px-4  gap-2'>
            <img src={buildingIcon} alt='logo' />
            <span className='text-[#231F2099]'>Investor</span>
          </div>
          <div className='flex items-center gap-2 uppercase mt-5 px-4'>
            <img src={profileImage} alt='img' className='size-[56px] rounded-full' />
            <h4 className='text-[18px] font-[600]'>Sotota Contracting Telecom and Maintenance</h4>

          </div>
          <div className='m-5 mx-20 flex gap-10 justify-between'>
            {investorData.map((investor, index) => (
              <div key={index}>
                <p className='text-[14px] font-light text-[#231F2099] '>{investor?.title}</p>
                <p>{investor?.value}</p>
              </div>
            ))}
          </div>
          <hr className="w-full" />

          <div className="text-sm font-medium text-center text-gray-500  dark:text-gray-400">
            <ul className="flex flex-wrap mt-2">
              {tabArray.map((tab) => (
                <li key={tab.id} onClick={() => setActiveTab(tab.id)}
                  className={`inline-block p-3 mx-2  rounded-t-lg hover:text-[#862634] ${tab.id === activeTab && 'border-[#862634] text-[#862634] border-b-2'} hover:border-[#862634] dark:hover:text-[#862634] capitalize`} >
                  {tab.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
       
        {renderComponent()}
       
      </div>
    </Layout>
  )
}

export default InvestorDetailPage;



const Summary = () => {
  const [isCollapse,setIsCollapse]=useState<boolean>(false);
  const investorArray = [
    { id: 1, title: 'Investor Information' },
    { id: 2, title: 'Investor Activities' },
    { id: 3, title: 'Investor Contacts' },
    { id: 4, title: 'Investor Profile' }
  ];

  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id: any) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };
  const investorInformationHeader = [
    { id: 1, title: 'Investor Name', name:'investorName' },
    { id: 2, title: 'Arabic Investor Name', name:'arabicInvestorName' },
    { id: 3, title: 'Phone', name:'phone' },
    { id: 4, title: 'Email', name:'email' },
    { id: 5, title: 'Website', name:'website' },
    { id: 6, title: 'PO BOX', name:'POBox' },
    { id: 7, title: 'Address', name: 'address' },
    { id: 8, title: 'Arabic Investor Address', name: 'arabicInvestorAddress'},
    { id: 9, title: 'Corporate HQ Location', name: 'corporateHQLocation' },
  ];
  const investorInformationData={investorName:'',arabicInvestorName:'',phone:7838383,email:'sjsdjsj@gamil.com',website:'dhdj.com',POBox:'',address:'dkkddjkjd',arabicInvestorAddress:'',corporateHQLocation:''}
  const investorActivitiesData = [
    { id: 1, name: 1282, serial: 'Lama Yamout' },
    { id: 2, name: 1282, serial: 'Lama Yamout' },
    { id: 3, name: 1282, serial: 'Lama Yamout' },
    { id: 4, name: 1282, serial: 'Lama Yamout' },
    { id: 5, name: 1282, serial: 'Lama Yamout' }
  ]
  const investorActivitiesHeader = [
    { id: 1, selector: "name", title: "Name", },
    { id: 2, selector: "serial", title: "Serial", }
  ];

  const investorContactsData = [
    { id: 1, userID: 1282, fullName: 'Lama Youmout', investor: 'Lama Youdyy', contactPhone: 993939393 },
    { id: 2, userID: 1282, fullName: 'Lama Youmout', investor: 'Lama Youdyy', contactPhone: 993939393 },
    { id: 3, userID: 1282, fullName: 'Lama Youmout', investor: 'Lama Youdyy', contactPhone: 993939393 },
    { id: 4, userID: 1282, fullName: 'Lama Youmout', investor: 'Lama Youdyy', contactPhone: 993939393 },
    { id: 5, userID: 1282, fullName: 'Lama Youmout', investor: 'Lama Youdyy', contactPhone: 993939393 },
  ];

  const investorContactsHeader = [
    { id: 1, selector: "userID", title: "User ID", },
    { id: 2, selector: "fullName", title: "Full Name", },
    { id: 3, selector: "investor", title: "Investor", },
    { id: 4, selector: "contactPhone", title: "Contact Phone", },
  ];


  const investorProfileHeader = [
    { id: 1, name: 'onHold',title: 'On Hold' },
    { id: 2, name: 'CRNumber', title: 'CRNumber' },
    { id: 3, name: 'CRInsuranceDate', title: 'CR InsuranceDate' },
    { id: 4, name: 'CRExpiryDate', title: 'CR Expiry Date' },
    { id: 5, name: 'industrialLicenseNumber', title: 'Industrial License Number' },
    { id: 6, name: 'industrialInsuranceDate', title: 'Industrial Insurance Date' },
    { id: 7, name: 'investorCategory', title: 'Investor Category' },
    { id: 8, name: 'legalStatus', title: 'Legal Status' },
    { id: 9, name: 'sector', title: 'Sector' },
    { id: 10, name: 'typeofOperation', title: 'Type of Operation' },
    { id: 11, name: 'existingOperation', title: 'Existing Operation in Qatar' },
    { id: 12, name: 'primaryContact', title: 'Primary Contact' },
  ];
  const investorProfile={onHold:'No',CRNumber:24863,CRInsuranceDate:'',CRExpiryDate:'',industrialLicenseNumber:162626,industrialInsuranceDate:7373737,investorCategory:'',legalStatus:'',sector:'',typeofOperation:'',existingOperation:'',primaryContact:47747448}

  const buttonArray=[
    {id:1,title:'Expand All Records',icon:expandIcon,onClick:()=>(console.log('test')),style:'border-1 border-[#83764F]  text-[#83764F]'},
    {id:2,title:'Refresh Timeline',icon:refreshIcon,onClick:()=>(console.log('test')),style:'border-1 border-[#83764F]  text-[#83764F]'},
    {id:3,icon:searchIcon,onClick:()=>(console.log('test')),style:'bg-[#93A6B30F]'},
    {id:4,icon:menuIcon,onClick:()=>(console.log('test')),style:'flex shadow-sm justify-center'},

    
  ]
  return (
    <div >

      <div className="shadow-sm p-6 rounded-[10px] ">
        <div className='border border-gray-200 rounded-[10px]'>
          {investorArray.map((investor) => (
            <div key={investor.id} className='border-t-1  border-gray-200 dark:border-gray-700'>
              <h2 id={`accordion-heading-${investor.id}`}>
                <button className={`flex items-center justify-between w-full p-5 font-medium  ${openAccordion === investor.id?'text-[#862634]':'text-gray-500'}  dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
                  onClick={() => toggleAccordion(investor.id)}
                  aria-expanded={openAccordion === investor.id}
                  aria-controls={`accordion-body-${investor.id}`}
                >
                  <span className={`flex items-center capitalize`}>{investor.title}</span>
                  <svg
                    className={`w-3 h-3 shrink-0 ${openAccordion === investor.id ? 'rotate-180' : ''}`}
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
              {openAccordion === investor.id && (
                <div id={`accordion-body-${investor.id}`} className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  {openAccordion === investor.id && (
                    <div id={`accordion-body-${investor.id}`} className="p-5">
                      {(() => {
                        switch (investor.title) {
                          case 'Investor Information':
                            return (
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4  border  border-gray-200 dark:border-gray-700 dark:bg-gray-900 p-4">
                                {investorInformationHeader.map((info, index) => (
                                  <div key={index}>
                                    <p className="text-[#231F2099]">{info.title}</p>
                                    <p>{investorInformationData[info.name] === '' ? '--' : investorInformationData[info.name]}</p>
                                  </div>
                                ))}
                              </div>
                            );
                          case 'Investor Activities':
                            return <CommonTable data={investorActivitiesData} header={investorActivitiesHeader} />
                          case 'Investor Contacts':
                            return <CommonTable data={investorContactsData} header={investorContactsHeader} />
                          case 'Investor Profile':
                            return <div className="grid grid-cols-2 md:grid-cols-4 gap-4  border  border-gray-200 dark:border-gray-700 dark:bg-gray-900 p-4">
                              {investorProfileHeader.map((info, index) => (
                                <div key={index}>
                                  <p className="text-[#231F2099]">{info.title}</p>
                                  <p>{investorProfile[info.name] === '' ? '--' : investorProfile[info.name]}</p>
                                </div>
                              ))}
                            </div>
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
      <div className='p-4 bg-white shadow-sm mt-5'>
        <div className='flex justify-between'>
          <p className='text-[#862634]'>Timeline</p>
          <div className='flex gap-3'>
                {buttonArray.map((button)=>(
                  <ButtonComponent onClick={button.onClick} style={button.style}>
                      <img src={button.icon}/>
                      <span>{button.title}</span>
                  </ButtonComponent>
                ))}
          </div>
         
        </div>
        <div className='flex gap-5 mt-10 items-center'>
            <hr className='w-[90%]'/>
            <div className='flex gap-2 items-center' onClick={()=>setIsCollapse(!isCollapse)}>
              Collapse
              <svg
                    className={`w-3 h-3 shrink-0 ${isCollapse  ? 'rotate-180' : ''}`}
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
          <div>
            <div className=''>
              <span>SH</span>
            </div>
          </div>
      </div>
    </div>
  );
};

const Applications = () => {

  const [applicationType, setApplicationType] = useState<string>('sss');
  const [exportType, setExportType] = useState<string>('sss');
  const applicationTypeArray = [
    { id: 1, name: 'EZ Applications', value: 'EZApplication' },
    { id: 2, name: 'LP Applications', value: 'LPApplication' },
    { id: 3, name: 'Commercial and Waterfront Applications', value: 'commercialAndWaterfrontApplications' },
    { id: 4, name: 'Industrial Applications', value: 'industrial Applications' },
    { id: 5, name: 'Ready Mix Applications', value: 'readyMixApplications' },
    { id: 6, name: 'Warehouse Applications', value: 'warehouseApplications' },

  ]
  const exportTypeArray = [
    { id: 1, name: 'EZ Applications', value: 'EZApplication' },
    { id: 2, name: 'LP Applications', value: 'LPApplication' },
    { id: 3, name: 'Commercial and Waterfront Applications', value: 'commercialAndWaterfrontApplications' },
    { id: 4, name: 'Industrial Applications', value: 'industrial Applications' },
    { id: 5, name: 'Ready Mix Applications', value: 'readyMixApplications' },
    { id: 6, name: 'Warehouse Applications', value: 'warehouseApplications' },
  ];

  const TableHeader = [
    { id: 1, selector: "applicationID", title: "Application ID", },
    // {id:1,cell:(row:any)=><Link to onClick={()=>handleShowItemModal(row)} className="bg-gray-500 text-white px-3 py-1 rounded-md shadow hover:bg-red-gray transition">
    //   show order Details</Link>,title:'Action'}
    { id: 2, selector: "dateOfSubmission", title: "Date Of Submission" },
    { id: 3, selector: "createdOn", title: "Created On" },
    { id: 4, selector: "applicantInvestorName", title: "Applicant Investor Name", },
    { id: 5, selector: "proposedLegalName", title: "Proposed Legal Name (EN)" },
    { id: 6, selector: "OSSCRComplete", title: "OSS CR Complete" },
    { id: 7, selector: "OSSLandComplete", title: "OSS Land Complete" },
    { id: 8, selector: "OSSVISAComplete", title: "OSS VISA Complete" },
    { id: 9, selector: "electricity", title: "Electricity (KVA) (EZ Plot)" },
    { id: 10, selector: "gas", title: "Gas (M3/Day)(EZ/Plot)" },
    { id: 11, selector: "landArea", title: "Land Area(sqm) (EZ Plot)" },
    { id: 12, selector: "ITTerabytes", title: "IT Terabytes (EZ Plot)" },
    { id: 13, selector: "Water", title: "Water (M3/day) (EZ Plot)" },
    { id: 14, selector: "facilityArea", title: "Facility Area (sqm) (EZ Plot)" },
    { id: 15, selector: "Project", title: "Project (EZ Plot)" },
    { id: 16, selector: "additionalAccessorComments", title: "Additional Accessor's Comments(EZ Plot)" },
    { id: 17, selector: "effluenceandWaste", title: "Effluence and Waste (EZ Plot)" },
    { id: 18, selector: "plotNumber", title: "Plot Number (EZ Plot)" },
    { id: 18, selector: "bulidingType", title: "Buliding Type (EZ Plot)" },
    { id: 19, selector: "section", title: "Section (ISIC code)" },
    { id: 20, selector: "sectionDescription", title: "Section Description (ISIC code)" },
    { id: 21, selector: "code", title: "Code (ISIC Code)" },
    { id: 22, selector: "description", title: "Description (ISIC Code)" },
    { id: 23, selector: "statusReason", title: "Status Reason" },
  ];
  const investorData = [
    { id: 1, applicationID: 'EZ-001', dateOfSubmission: 'John Bosco', createdOn: 478929, applicantInvestorName: 'AK-LP-B-374837', proposedLegalName: 'www.soscowll.com', OSSCRComplete: 'Sole Proprietorship', OSSLandComplete: '25/11/2024 11:14', OSSVISAComplete: '25/11/2024 12:13', electricity: 'EZ-001', gas: 'John Bosco', landArea: 478929, ITTerabytes: 'AK-LP-B-374837', water: 'www.soscowll.com', typeOfInvestor: 'Sole Proprietorship', facilityArea: '25/11/2024 11:14', Project: '25/11/2024 12:13', additionalAccessorComments: 'EZ-001', effluenceandWaste: 'John Bosco', plotNumber: 478929, bulidingType: 'AK-LP-B-374837', section: 'www.soscowll.com', sectionDescription: 'Sole Proprietorship', code: '25/11/2024 11:14', description: '25/11/2024 12:13', statusReason: 'ksks' },
    { id: 2, applicationID: 'EZ-001', dateOfSubmission: 'John Bosco', createdOn: 478929, applicantInvestorName: 'AK-LP-B-374837', proposedLegalName: 'www.soscowll.com', OSSCRComplete: 'Sole Proprietorship', OSSLandComplete: '25/11/2024 11:14', OSSVISAComplete: '25/11/2024 12:13', electricity: 'EZ-001', gas: 'John Bosco', landArea: 478929, ITTerabytes: 'AK-LP-B-374837', water: 'www.soscowll.com', typeOfInvestor: 'Sole Proprietorship', facilityArea: '25/11/2024 11:14', Project: '25/11/2024 12:13', additionalAccessorComments: 'EZ-001', effluenceandWaste: 'John Bosco', plotNumber: 478929, bulidingType: 'AK-LP-B-374837', section: 'www.soscowll.com', sectionDescription: 'Sole Proprietorship', code: '25/11/2024 11:14', description: '25/11/2024 12:13', statusReason: 'ksks' },
    { id: 3, applicationID: 'EZ-001', dateOfSubmission: 'John Bosco', createdOn: 478929, applicantInvestorName: 'AK-LP-B-374837', proposedLegalName: 'www.soscowll.com', OSSCRComplete: 'Sole Proprietorship', OSSLandComplete: '25/11/2024 11:14', OSSVISAComplete: '25/11/2024 12:13', electricity: 'EZ-001', gas: 'John Bosco', landArea: 478929, ITTerabytes: 'AK-LP-B-374837', water: 'www.soscowll.com', typeOfInvestor: 'Sole Proprietorship', facilityArea: '25/11/2024 11:14', Project: '25/11/2024 12:13', additionalAccessorComments: 'EZ-001', effluenceandWaste: 'John Bosco', plotNumber: 478929, bulidingType: 'AK-LP-B-374837', section: 'www.soscowll.com', sectionDescription: 'Sole Proprietorship', code: '25/11/2024 11:14', description: '25/11/2024 12:13', statusReason: 'ksks' },
    { id: 4, applicationID: 'EZ-001', dateOfSubmission: 'John Bosco', createdOn: 478929, applicantInvestorName: 'AK-LP-B-374837', proposedLegalName: 'www.soscowll.com', OSSCRComplete: 'Sole Proprietorship', OSSLandComplete: '25/11/2024 11:14', OSSVISAComplete: '25/11/2024 12:13', electricity: 'EZ-001', gas: 'John Bosco', landArea: 478929, ITTerabytes: 'AK-LP-B-374837', water: 'www.soscowll.com', typeOfInvestor: 'Sole Proprietorship', facilityArea: '25/11/2024 11:14', Project: '25/11/2024 12:13', additionalAccessorComments: 'EZ-001', effluenceandWaste: 'John Bosco', plotNumber: 478929, bulidingType: 'AK-LP-B-374837', section: 'www.soscowll.com', sectionDescription: 'Sole Proprietorship', code: '25/11/2024 11:14', description: '25/11/2024 12:13', statusReason: 'ksks' },
    { id: 5, applicationID: 'EZ-001', dateOfSubmission: 'John Bosco', createdOn: 478929, applicantInvestorName: 'AK-LP-B-374837', proposedLegalName: 'www.soscowll.com', OSSCRComplete: 'Sole Proprietorship', OSSLandComplete: '25/11/2024 11:14', OSSVISAComplete: '25/11/2024 12:13', electricity: 'EZ-001', gas: 'John Bosco', landArea: 478929, ITTerabytes: 'AK-LP-B-374837', water: 'www.soscowll.com', typeOfInvestor: 'Sole Proprietorship', facilityArea: '25/11/2024 11:14', Project: '25/11/2024 12:13', additionalAccessorComments: 'EZ-001', effluenceandWaste: 'John Bosco', plotNumber: 478929, bulidingType: 'AK-LP-B-374837', section: 'www.soscowll.com', sectionDescription: 'Sole Proprietorship', code: '25/11/2024 11:14', description: '25/11/2024 12:13', statusReason: 'ksks' },
    { id: 6, applicationID: 'EZ-001', dateOfSubmission: 'John Bosco', createdOn: 478929, applicantInvestorName: 'AK-LP-B-374837', proposedLegalName: 'www.soscowll.com', OSSCRComplete: 'Sole Proprietorship', OSSLandComplete: '25/11/2024 11:14', OSSVISAComplete: '25/11/2024 12:13', electricity: 'EZ-001', gas: 'John Bosco', landArea: 478929, ITTerabytes: 'AK-LP-B-374837', water: 'www.soscowll.com', typeOfInvestor: 'Sole Proprietorship', facilityArea: '25/11/2024 11:14', Project: '25/11/2024 12:13', additionalAccessorComments: 'EZ-001', effluenceandWaste: 'John Bosco', plotNumber: 478929, bulidingType: 'AK-LP-B-374837', section: 'www.soscowll.com', sectionDescription: 'Sole Proprietorship', code: '25/11/2024 11:14', description: '25/11/2024 12:13', statusReason: 'ksks' },
    { id: 7, applicationID: 'EZ-001', dateOfSubmission: 'John Bosco', createdOn: 478929, applicantInvestorName: 'AK-LP-B-374837', proposedLegalName: 'www.soscowll.com', OSSCRComplete: 'Sole Proprietorship', OSSLandComplete: '25/11/2024 11:14', OSSVISAComplete: '25/11/2024 12:13', electricity: 'EZ-001', gas: 'John Bosco', landArea: 478929, ITTerabytes: 'AK-LP-B-374837', water: 'www.soscowll.com', typeOfInvestor: 'Sole Proprietorship', facilityArea: '25/11/2024 11:14', Project: '25/11/2024 12:13', additionalAccessorComments: 'EZ-001', effluenceandWaste: 'John Bosco', plotNumber: 478929, bulidingType: 'AK-LP-B-374837', section: 'www.soscowll.com', sectionDescription: 'Sole Proprietorship', code: '25/11/2024 11:14', description: '25/11/2024 12:13', statusReason: 'ksks' },
  ];
  return (
    <div className='p-4 bg-white shadow-sm rounded-sm'>
      <div className='flex justify-between'>
        <DropDownComponent value={applicationType} setvalue={setApplicationType} data={applicationTypeArray} title={'application Type'} />
        <DropDownComponent value={exportType} setvalue={setExportType} data={exportTypeArray} title={'Export'} />
      </div>
      <div className='overflow-auto'>
        <CommonTable data={investorData} header={TableHeader} />
      </div>
    </div>

  )
};

const Agreements = () => {
  const TableHeader = [
    { id: 1, selector: "referenceID", title: "Reference ID", },
    // {id:1,cell:(row:any)=><Link to onClick={()=>handleShowItemModal(row)} className="bg-gray-500 text-white px-3 py-1 rounded-md shadow hover:bg-red-gray transition">
    //   show order Details</Link>,title:'Action'}
    { id: 2, selector: "investor", title: "Investor" },
    { id: 3, selector: "project", title: "Project" },
    { id: 4, selector: "plot", title: "Plot", },
    { id: 5, selector: "statusReason", title: "Status Reason" },
    { id: 6, selector: "createdOn", title: "Created On" },
    { id: 7, selector: "modifiedOn", title: "Modified On" },
    { id: 8, selector: "sentToCustomer", title: "Sent to Customer (Agreement Detail ID)" },
    { id: 9, selector: "signedByCustomer", title: "Signed by Customer (Agreement Detail ID)" },
    { id: 10, selector: "signedByManateq", title: "Signed by Manateq (Agreement Detail ID)" },
    { id: 11, selector: "industrialApplication", title: "Industrial Application" },
    { id: 12, selector: "holdDueToFinancialStatus", title: "Hold Due to Financial Status (Plot)" },
    { id: 13, selector: "holdDueToHSEViolation", title: "Hold Due to HSE Violation (Plot)" },
    { id: 14, selector: "holdDueToLegalViolation", title: "Hold Due to Legal Violation (Plot)" },
    { id: 15, selector: "holdDueToOperationalViolation", title: "Hold Due to Operational Violation (Plot)" },
    { id: 16, selector: "comencementDate", title: "Comencement Date" },
    { id: 17, selector: "endDate", title: "End Date" },
  ]
  const agreementData = [
    { id: 1, referenceID: 'AGR-2025-001', investor: 'John Doe', project: 'Project A', plot: 'Plot 12', statusReason: 'pending', createdOn: '2025-02-10', modifiedOn: '2025-02-15', sentToCustomer: 'AGD-9875', signedByCustomer: 'AGD-777', signedByManateq: 'AGD-7373', industrialApplication: 'yes', holdDueToFinancialStatus: 'no', holdDueToHSEViolation: 'yes', holdDueToLegalViolation: 'no', holdDueToOperationalViolation: 'yes', comencementDate: '2025-02-01', endDate: '2026-02-01' },
    { id: 1, referenceID: 'AGR-2025-001', investor: 'John Doe', project: 'Project A', plot: 'Plot 12', statusReason: 'pending', createdOn: '2025-02-10', modifiedOn: '2025-02-15', sentToCustomer: 'AGD-9875', signedByCustomer: 'AGD-777', signedByManateq: 'AGD-7373', industrialApplication: 'yes', holdDueToFinancialStatus: 'no', holdDueToHSEViolation: 'yes', holdDueToLegalViolation: 'no', holdDueToOperationalViolation: 'yes', comencementDate: '2025-02-01', endDate: '2026-02-01' },
    { id: 1, referenceID: 'AGR-2025-001', investor: 'John Doe', project: 'Project A', plot: 'Plot 12', statusReason: 'pending', createdOn: '2025-02-10', modifiedOn: '2025-02-15', sentToCustomer: 'AGD-9875', signedByCustomer: 'AGD-777', signedByManateq: 'AGD-7373', industrialApplication: 'yes', holdDueToFinancialStatus: 'no', holdDueToHSEViolation: 'yes', holdDueToLegalViolation: 'no', holdDueToOperationalViolation: 'yes', comencementDate: '2025-02-01', endDate: '2026-02-01' },
    { id: 1, referenceID: 'AGR-2025-001', investor: 'John Doe', project: 'Project A', plot: 'Plot 12', statusReason: 'pending', createdOn: '2025-02-10', modifiedOn: '2025-02-15', sentToCustomer: 'AGD-9875', signedByCustomer: 'AGD-777', signedByManateq: 'AGD-7373', industrialApplication: 'yes', holdDueToFinancialStatus: 'no', holdDueToHSEViolation: 'yes', holdDueToLegalViolation: 'no', holdDueToOperationalViolation: 'yes', comencementDate: '2025-02-01', endDate: '2026-02-01' },
    { id: 1, referenceID: 'AGR-2025-001', investor: 'John Doe', project: 'Project A', plot: 'Plot 12', statusReason: 'pending', createdOn: '2025-02-10', modifiedOn: '2025-02-15', sentToCustomer: 'AGD-9875', signedByCustomer: 'AGD-777', signedByManateq: 'AGD-7373', industrialApplication: 'yes', holdDueToFinancialStatus: 'no', holdDueToHSEViolation: 'yes', holdDueToLegalViolation: 'no', holdDueToOperationalViolation: 'yes', comencementDate: '2025-02-01', endDate: '2026-02-01' },
    { id: 1, referenceID: 'AGR-2025-001', investor: 'John Doe', project: 'Project A', plot: 'Plot 12', statusReason: 'pending', createdOn: '2025-02-10', modifiedOn: '2025-02-15', sentToCustomer: 'AGD-9875', signedByCustomer: 'AGD-777', signedByManateq: 'AGD-7373', industrialApplication: 'yes', holdDueToFinancialStatus: 'no', holdDueToHSEViolation: 'yes', holdDueToLegalViolation: 'no', holdDueToOperationalViolation: 'yes', comencementDate: '2025-02-01', endDate: '2026-02-01' },

  ]
  return (
    <div className='p-4 shadow-sm rounded-lg'>
      <p className='text-[#862634]'>Agreements</p>
      <div className='overflow-auto '>
        <CommonTable data={agreementData} header={TableHeader} />
      </div>
    </div>
  )
}


const ServiceRequest = () => {
  const TableHeader = [
    { id: 1, selector: "referenceID", title: "Reference ID", },
    { id: 2, selector: "applicant", title: "applicant", },
    // {id:1,cell:(row:any)=><Link to onClick={()=>handleShowItemModal(row)} className="bg-gray-500 text-white px-3 py-1 rounded-md shadow hover:bg-red-gray transition">
    //   show order Details</Link>,title:'Action'}
    { id: 3, selector: "contactPerson", title: "Contact Person" },
    { id: 4, selector: "investor", title: "Investor" },
    { id: 5, selector: "agreement", title: "Agreement", },
    { id: 6, selector: "plot", title: "Plot" },
    { id: 7, selector: "requestType", title: "Request Type" },
    { id: 8, selector: "requestStatus", title: "Request Status" },
    { id: 9, selector: "serviceStatus", title: "Service Status" },
    { id: 10, selector: "owner", title: "Owner" },
    { id: 11, selector: "createdOn", title: "Created On" },

  ]
  const agreementData = [
    { id: 1, referenceID: 'AGR-2025-001', applicant: 'John Doe', contactPerson: 'Project A', investor: 'Plot 12', agreement: 'pending', plot: '2025-02-10', requestType: '2025-02-15', requestStatus: 'AGD-9875', serviceStatus: 'AGD-777', owner: 'AGD-7373', createdOn: '2025-02-15' },
    { id: 2, referenceID: 'AGR-2025-001', applicant: 'John Doe', contactPerson: 'Project A', investor: 'Plot 12', agreement: 'pending', plot: '2025-02-10', requestType: '2025-02-15', requestStatus: 'AGD-9875', serviceStatus: 'AGD-777', owner: 'AGD-7373', createdOn: '2025-02-15' },
    { id: 3, referenceID: 'AGR-2025-001', applicant: 'John Doe', contactPerson: 'Project A', investor: 'Plot 12', agreement: 'pending', plot: '2025-02-10', requestType: '2025-02-15', requestStatus: 'AGD-9875', serviceStatus: 'AGD-777', owner: 'AGD-7373', createdOn: '2025-02-15' },
  ]
  return (
    <div className='p-4 shadow-sm rounded-lg'>
      <p className='text-[#862634]'>Service Requests</p>
      <div className='overflow-auto '>
        <CommonTable data={agreementData} header={TableHeader} />
      </div>
    </div>
  )
}

const AuditHistory = () => {
  const TableHeader = [
    { id: 1, selector: "changedDate", title: "Changed Date", },
    { id: 2, selector: "changedBy", title: "Changed By", },
    // {id:1,cell:(row:any)=><Link to onClick={()=>handleShowItemModal(row)} className="bg-gray-500 text-white px-3 py-1 rounded-md shadow hover:bg-red-gray transition">
    //   show order Details</Link>,title:'Action'}
    { id: 3, selector: "event", title: "Event" },
    { id: 4, selector: "changedField", title: "Changed Field" },
    { id: 5, selector: "oldValue", title: "Old Value", },
    { id: 6, selector: "newValue", title: "New Value" },
  ]
  const AuditHistoryData = [
    { id: 1, changedDate: '2025-01-05', changedBy: 'John Doe', event: 'Project A', changedField: 'Plot 12', oldValue: 'pending', newValue: 'jhshsh' },
    { id: 2, changedDate: '2025-01-05', changedBy: 'John Doe', event: 'Project A', changedField: 'Plot 12', oldValue: 'pending', newValue: 'jhshsh' },
    { id: 3, changedDate: '2025-01-05', changedBy: 'John Doe', event: 'Project A', changedField: 'Plot 12', oldValue: 'pending', newValue: 'jhshsh' },
  ]
  return (
    <div className='p-4 shadow-sm rounded-lg'>
      <div className='flex justify-between'>
        <p className='text-[#862634]'>Audit History</p>
        <button className='flex gap-2 text-[#83764F] border-[#83764F] rounded-lg border border-1 p-2  px-5'><img src={refreshIcon} alt="re" />Refresh</button>
      </div>

      <div className='overflow-auto '>
        <CommonTable data={AuditHistoryData} header={TableHeader} />
      </div>
    </div>
  )
}




