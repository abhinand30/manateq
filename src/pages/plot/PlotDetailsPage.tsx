import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import CommonTable from '@/components/CommonTable';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import TabHeader from '@/components/TabHeader';
import refreshIcon from "@/assets/icons/refreshIcon.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import DropDownComponent from '@/components/DropDownComponent';
import { ClickableCell } from '@/components/ClickableCell';
import profileImage from '@/assets/profile.jpg';
import pdfIcon from '@/assets/icons/pdfIcon.png';
import downloadIcon from '@/assets/icons/downloadIcon.png';
import visibleIcon from '@/assets/icons/visible.png';


const plotInformationData = {
    investApplicationType: '', plotNumber: '', pin: 7838383, project: 'sjsdjsj@gamil.com', plotType: 'dhdj.com', plotConstruction: '', plotCompliance: 'dkkddjkjd',
    cluster: 'uyey', size: '', location_AR: '', location_EN: ''
  };
  const plotClearanceData = { blocked: 'yes', legalViolation: 'no', operationalViolation: 'yes', HSEViolation: '', financialStatus: 'no' };
  const plotInformationHeader = [
    { id: 1, title: 'Invest Application Type', name: 'applicationType' },
    { id: 2, title: 'Plot Number', name: 'plotNumber' },
    { id: 3, title: 'PIN', name: 'pin' },
    { id: 4, title: 'Project', name: 'project', link: true },
    { id: 5, title: 'plot Type', name: 'plotType' },
    { id: 6, title: 'Plot Construction', name: 'plotConstruction' },
    { id: 7, title: 'Plot Compliance', name: 'plotCompliance' },
    { id: 8, title: 'Cluster', name: 'cluster', link: true },
    { id: 9, title: 'Size', name: 'size' },
    { id: 10, title: 'Location (AR))', name: 'location_AR' },
    { id: 11, title: 'Location (EN)', name: 'location_EN' },
    { id: 12, title: 'Zone Type(AR)', name: 'zoneType_AR' },
    { id: 12, title: 'Zone Type(EN)', name: 'zoneType_EN' },
  ];

  const plotClearanceHeader = [
    { id: 1, title: 'Blocked (STEP-IN RIGHTS)', name: 'blocked' },
    { id: 2, title: 'Hold due to Legal Violation', name: 'legalViolation' },
    { id: 3, title: 'Hold due to Operational Violation', name: 'operationalViolation' },
    { id: 4, title: 'Hold due to HSE Violation', name: 'HSEViolation' },
    { id: 5, title: 'Hold Due to Financial Status', name: 'financialStatus' },
  ];

  const plotAgreementHeader = [
    { title: 'Draft Agreement', name: 'draftAgreement', link: true },
    { title: 'Current Agreement', name: 'currentAgreement', link: true },
    { title: 'Investor', name: 'investor', link: true },
    { title: 'Agreement Type', name: 'agreementType' },
    { title: 'Commencement Date', name: 'commencementDate' },
    { title: 'End Date', name: 'endDate' },
    { title: 'Land use Activity', name: 'landUseActivity', link: true },
    { title: 'Consultant Name', name: 'consultantName' },
  ];

  const buildingPermitArray = [
    { title: 'Current Building Permit', name: 'buildPermit', link: true },
    { title: 'Completion Cetificate Obtained Date', name: 'competionCertificateDate',  },
    { title: 'Building File Obtained Date', name: 'buildingFileObtained', },
    { title: 'Building File Application', name: 'buildingFileApplication', buttons: true },
  ];
  const buildingPermitdata={ buildPermit:'N/2017/777/89',competionCertificateDate:'',buildingFileObtained:'',buildingFileApplication:'buildingFileApplication'}

  const agreementData = { draftAgreement: "AG-Indusrialist-7778", currentAgreement: 'AG-Indusrialist-73737', investor: "SOSCO LO", agreementType: 'lease', commencementDate: '2024-05-10', endDate: '2024-05-10', landUseActivity: 'dd', consultantName: 'ABC' }
  const completionCertificateHeader=[
     { title: 'Building File Application', name: 'buildingFileApplication', buttons: true },
      { title: 'Completion Certificate Obtained Date', name: 'certificateCompletionDate', },
  ]
  const completionHeader={buildingFileApplication:'',certificateCompletionDate:'2024-05-19'}


 const plotAccessData = [
    { id: 1, referenceNo: '737373', actionTaken: 'open Plot', loggedInUser: 'hsshsh', plot: 'ME-IZ-TK', actionDate: '2024-05-23' }
  ]
const investorData = [
    {  title: 'Reference Number', value: 272727 },
    {  title: 'Status Reason', value: 0 },
    {  title: 'Clearance Status', value: 0 },
    {  title: 'Development Status', value: 63637 },
    {  title: 'Size', value: 1200 },
  ];

  const tabArray = [
    { id: 1, name: 'General' },
    { id: 2, name: 'Applications' },
    { id: 3, name: 'Plot Access Logs' },
    { id: 4, name: 'Plot Attachments' },
    { id: 5, name: 'audit history' },
  ];

    const plotAllApplicationHeader = [
    { id: 1, cell: (row: any) => ClickableCell({row:row, field:'applicantID'}), title: 'Applicant ID' },
    { id: 2, title: 'Location', selector: 'location' },
    { id: 3, cell: (row: any) => ClickableCell({row:row, field:'owner'}), title: 'Owner' },
    { id: 4, cell: (row: any) => ClickableCell({row:row, field:'assignedbussinessAnalyst'}), title: 'Assigned Bussiness Analyst' },
    { id: 5, title: 'Application Status', selector: 'applicationStatus' },
    { id: 6, title: 'External Status', selector: 'externalStatus' },
    { id: 7, title: 'Created On', selector: 'createdOn' },
    { id: 8, title: 'Submission Date', selector: 'submissionDate' },
    { id: 9, title: 'Completion Date', selector: 'completionDate' },
    { id: 10, cell: (row: any) => ClickableCell({row:row, field:'plotNumber'}), title: 'Plot Number' },
    { id: 11, cell: (row: any) => ClickableCell({row:row, field:'currentAgreement'}), title: 'Current Agreement' },
    { id: 12, title: 'Commencement Date', selector: 'commencementDate' },
    { id: 13, title: 'End Date (Current)', selector: 'endDate' },
  ];

  const plotAllApplicationData = [
    { id: 1, applicantID: 37737, location: '7hshh', owner: 'ajjsj', assignedbussinessAnalyst: 'yeye', applicationStatus: 'dhhdh', externalStatus: 'pending', createdOn: '2025-02-01', submissionDate: '2025-02-01', completionDate: '2025-02-01', plotNumber: '3636', currentAgreement: 'tet', commencementDate: '2025-02-01', endDate: '2025-02-01' }
    , { id: 2, applicantID: 37737, location: '7hshh', owner: 'ajjsj', assignedbussinessAnalyst: 'yeye', applicationStatus: 'dhhdh', externalStatus: 'pending', createdOn: '2025-02-01', submissionDate: '2025-02-01', completionDate: '2025-02-01', plotNumber: '3636', currentAgreement: 'tet', commencementDate: '2025-02-01', endDate: '2025-02-01' }
  ]


  const plotRelatedApplicationHeader = [
    { id: 1, cell: (row: any) => ClickableCell({row:row, field:'applicantID'}), title: 'Applicant ID' },
    { id: 2, title: 'Location', selector: 'location' },
    { id: 3, cell: (row: any) => ClickableCell({row:row, field:'applicant'}), title: 'Applicant' },
    { id: 4, title: 'Email (Applicant)', selector: 'email' },
    { id: 5, title: 'Mobile', selector: 'mobile' },
    { id: 6, cell: (row: any) => ClickableCell({row:row, field:'investor'}), title: 'investor' },
    { id: 7, title: 'CR Number(Investors)', selector: 'CRNumber' },
    { id: 8, cell: (row: any) => ClickableCell({row:row, field:'owner'}), title: 'Owner' },
    { id: 9, title: 'Application Status', selector: 'applicationStatus' },
    { id: 10, title: 'External Status', selector: 'externalStatus' },
    { id: 11, title: 'Created On', selector: 'createdOn' },
  ];
  const plotRelatedApplicationData = [
    { id: 1, applicantID: 37737, location: '7hshh', applicant: 'ajjsj', email: 'ajjsi@gmail.com', mobile: 8373737373, investor: 'sossco', CRNumber: 377373, owner: 'abhshsh', applicationStatus: 'pending', externalStatus: 'progress', createdOn: '2025-02-01' }
    , { id: 2, applicantID: 37737, location: '7hshh', applicant: 'ajjsj', email: 'ajjsi@gmail.com', mobile: 8373737373, investor: 'sossco', CRNumber: 377373, owner: 'abhshsh', applicationStatus: 'pending', externalStatus: 'progress', createdOn: '2025-02-01' }

  ]
  const plotCommercialApplicationHeader = [
    { id: 1, cell: (row: any) => ClickableCell({row:row, field: 'applicantID'}), title: 'Applicant ID' },
    { id: 2, title: 'Location', selector: 'location' },
    { id: 3, cell: (row: any) => ClickableCell({row:row, field:'applicant'}), title: 'Applicant' },
    { id: 4, title: 'Email (Applicant)', selector: 'email' },
    { id: 5, title: 'Mobile', selector: 'mobile' },
    { id: 6, cell: (row: any) => ClickableCell({row:row, field:'investor'}), title: 'investor' },
    { id: 7, title: 'CR Number(Investors)', selector: 'CRNumber' },
    { id: 8, cell: (row: any) => ClickableCell({row:row, field:'owner'}), title: 'Owner' },
    { id: 9, title: 'Application Status', selector: 'applicationStatus' },
    { id: 10, title: 'External Status', selector: 'externalStatus' },
    { id: 11, title: 'Created On', selector: 'createdOn' },
  ];

  const plotCommercialApplicationData = [
    { id: 1, applicantID: 37737, location: '7hshh', applicant: 'ajjsj', email: 'ajjsi@gmail.com', mobile: 8373737373, investor: 'sossco', CRNumber: 377373, owner: 'abhshsh', applicationStatus: 'pending', externalStatus: 'progress', createdOn: '2025-02-01' }
    , { id: 2, applicantID: 37737, location: '7hshh', applicant: 'ajjsj', email: 'ajjsi@gmail.com', mobile: 8373737373, investor: 'sossco', CRNumber: 377373, owner: 'abhshsh', applicationStatus: 'pending', externalStatus: 'progress', createdOn: '2025-02-01' }
  ]
 
    const plotExportTypeArray = [
    { id: 1, name: 'EZ Applications', value: 'EZApplication' },
    { id: 2, name: 'LP Applications', value: 'LPApplication' },
    { id: 3, name: 'Commercial and Waterfront Applications', value: 'commercialAndWaterfrontApplications' },
    { id: 4, name: 'Industrial Applications', value: 'industrial Applications' },
    { id: 5, name: 'Ready Mix Applications', value: 'readyMixApplications' },
    { id: 6, name: 'Warehouse Applications', value: 'warehouseApplications' },
  ];

const PlotDetailsPage = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  

  //  {id:,cell:(row:any)=>ClickableCell(row,''),title:''},

 
  const renderComponent = () => {
    switch (activeTab) {
      case 1:
        return < General />
      case 2:
        return <Applications />
      case 3:
        return <PlotAccess />
      case 4:
        return <PlotAttachments />
      case 5:
        return <AuditHistory />

    }

  }
  return (

    <Layout>
      <Header />
      <div className='p-5'>
        <TabHeader data={investorData} tabArray={tabArray} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      {renderComponent()}

    </Layout>
  )
}

export default PlotDetailsPage;

const General = () => {
    const sections = [
    { id: "item-1", title: "Plot Information", headers: plotInformationHeader, data: plotInformationData },
    { id: "item-2", title: "Clearance Details", headers: plotClearanceHeader, data: plotClearanceData },
    { id: "item-3", title: "Agreement and Land Use Details", headers: plotAgreementHeader, data: agreementData },
    { id: "item-4", title: "Building permit Details and Building File Applications", headers: buildingPermitArray, data: buildingPermitdata },
    { id: "item-5", title: "Completion Certificate", headers: completionCertificateHeader, data:completionHeader },
  ];
 
  const SectionAccordion = ({ id, title, headers, data }: { id: string; title: string; headers: [], data: any }) => (
    <AccordionItem value={id}>
      <AccordionTrigger className="p-4">{title}</AccordionTrigger>
      <AccordionContent>
        <div className="grid grid-cols-2 items-center md:grid-cols-4 gap-4 p-4">
          {headers.map(({ title, name, link, buttons }, index) => (
            <div key={index}>
              <p className="text-fade mb-1">{title}</p>
              {link ? (
                <button onClick={() => console.log(data[link])} className='flex text-[#83764F] items-center'>{data[name] ? data[name] : "--"}   <ArrowUpRight size={20} color='#83764F' /></button>
              ) : buttons ? (
                <div className='border-dashed gap-2 flex p-4 rounded-lg w-auto m-2 border-1'>
                  <img src={pdfIcon} alt='pdf' className='h-[40px] w-auto' />
                  <div className='gap-1'>
                    <p>{data[name]}</p>
                    <p className=''>PDF</p>
                  </div>
                  
                        <button className='flex size-[30px] border-1 items-center justify-center rounded-sm'><img src={visibleIcon} alt='logo' /></button>
                  <button className='flex size-[30px] border-1 items-center justify-center rounded-sm'><img src={downloadIcon} alt='icon' /></button>
                   
              
                </div>
              ) : (

                <p className='text-[#83764F] '>{data[name] ? data[name] : "--"}</p>

              )}

            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
  return (
    <div className='bg-white m-4 p-[32px] '>
      <div className=" border-1 rounded-lg">
        <Accordion type="single" collapsible className="w-full">
          {sections.map((section) => (
            <SectionAccordion key={section.id} {...section} />
          ))}
        </Accordion>
      </div>
    </div>

  )
}

const Applications = () => {

    const sections = [
    { id: "item-1", title: "All Applications", headers: plotAllApplicationHeader, data: plotAllApplicationData },
    { id: "item-2", title: "Related Commercial Applications", headers: plotRelatedApplicationHeader, data: plotRelatedApplicationData },
    { id: "item-3", title: "Commercial and waterfront Applications", headers: plotCommercialApplicationHeader, data: plotCommercialApplicationData },
  ];

  const SectionAccordion = ({ id, title, headers, data }: { id: string; title: string; headers: [], data: any }) => (
    <AccordionItem value={id}>
      <AccordionTrigger className="p-4">{title}</AccordionTrigger>
      <AccordionContent>
        <div className=" p-4">
          <CommonTable data={data} header={headers} />

        </div>
      </AccordionContent>
    </AccordionItem>
  );
  return (
    <div className=' border-1 m-4 '>
      <div className=" border-1 m-4 rounded-lg">
        <Accordion type="single" collapsible className="w-full">
          {sections.map((section) => (
            <SectionAccordion key={section.id} {...section} />
          ))}
        </Accordion>
      </div>
    </div>

  )
};

const PlotAccess = () => {
  const [exportType, setExportType] = useState<string>('');
  const navigate = useNavigate();
    const plotAccessHeader = [
    { id: 1, cell: (row: any) => ClickableCell({row:row, field:'referenceNo'}), title: 'Reference Number' },
    { id: 2, title: 'Action Taken', selector: 'actionTaken' },
    {
      id: 3, cell: (row: any) => <button onClick={() => navigate(`${row.loggedInUser}`, { state: { data: row } })} className="flex  gap-2 items-center text-[#83764F] underline underline-offset-2 decoration-[#83764F]"><img src={profileImage} className="size-[30px] rounded-full" alt="Profile" />{row.loggedInUser}<ArrowUpRight className="size-[16px]" />
      </button>, title: 'Logged In User'
    },
    { id: 4, cell: (row: any) => ClickableCell({row:row, field:'plot'}), title: 'Plot' },
    { id: 5, title: 'Action Date', selector: 'actionDate' },
  ]


  return (
    <div className='m-4 p-4 shadow-sm'>
      <div className='flex justify-between'>
        <h4>Plot Access Log</h4>
        <div className='flex gap-3'>
          <DropDownComponent value={exportType} setValue={setExportType} data={plotExportTypeArray} title={'Export'} />
          <button className='flex gap-2 text-[#83764F] border-[#83764F] rounded-lg  border-1 p-2  px-5'><img src={refreshIcon} alt="re" />Refresh</button>
        </div>
      </div>

      <CommonTable header={plotAccessHeader} data={plotAccessData} />

    </div>
  )
}


const PlotAttachments = () => {
  const navigate = useNavigate();
  const plotAttachmentsHeader = [
    { id: 1, title: 'Document Name', selector: 'documentName' },
    {
      id: 2, cell: (row: any) => <button onClick={() => navigate(`${row?.type}`, { state: { data: row } })} className="flex  gap-2 items-center "><img src={pdfIcon} className="" alt="Profile" />{row.type}
      </button>, title: 'Type'
    },
    { id: 3, title: 'Created On', selector: 'createdOn' },
    { id: 4, title: 'Last Modified', selector: 'lastModified' },
    {
      id: 2, cell: () => <div className='flex gap-2'>
        <button className='flex size-[30px] border-1 items-center justify-center rounded-sm'><img src={visibleIcon} alt='logo' /></button>
        <button className='flex size-[30px] border-1 items-center justify-center rounded-sm'><img src={downloadIcon} alt='icon' /></button>
      </div>, title: 'Type'
    },
  ];
  const plotAttachmentsData = [
    { id: 1, documentName: "Gate Level", type: 'PDF', createdOn: '2024-05-01', lastModified: '2024-05-01', actions: 'url' }
  ];

  return (
    <div className='m-4 p-4 shadow-sm'>
      <h4>Plot Access Log</h4>
      <CommonTable header={plotAttachmentsHeader} data={plotAttachmentsData} />

    </div>
  )
}

const AuditHistory = () => {
  //{id:,cell:(row:any)=>ClickableCell(row,''),title:''},
  const TableHeader = [
    { id: 1, selector: "changedDate", title: "Changed Date", },
    { id: 2, cell: (row: any) => ClickableCell({row:row, field:'changedBy'}), title: "Changed By", },
    { id: 3, cell: (row: any) => ClickableCell({row:row, field:"event"}), title: "Event" },
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
        <p className='text-redcolor'>Audit History</p>
        <button className='flex gap-2 text-[#83764F] border-[#83764F] rounded-lg  border-1 p-2  px-5'><img src={refreshIcon} alt="re" />Refresh</button>
      </div>

      <div className='overflow-auto '>
        <CommonTable data={AuditHistoryData} header={TableHeader} />
      </div>
    </div>
  )
}