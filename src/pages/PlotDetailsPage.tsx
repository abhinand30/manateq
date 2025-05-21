import CommonTable from '@/components/CommonTable';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import TabHeader from '@/components/TabHeader';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronRight } from 'lucide-react';

import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const PlotDetailsPage = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const investorData = [
    { id: 1, title: 'Reference Number', value: 272727 },
    { id: 2, title: 'Status Reason', value: 0 },
    { id: 3, title: 'Clearance Status', value: 0 },
    { id: 4, title: 'Development Status', value: 63637 },
    { id: 4, title: 'Size', value: 1200 },
  ];

  const tabArray = [
    { id: 1, name: 'General' },
    { id: 2, name: 'Applications' },
    { id: 3, name: 'Plot Access Logs' },
    { id: 4, name: 'Plot Attachments' },
    { id: 5, name: 'audit history' },
  ];
  const renderComponent = () => {
    switch (activeTab) {
      case 1:
        return < General />
      case 2:
        return <Applications/>

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
  const plotInformationHeader = [
    { id: 1, title: 'Invest Application Type', name: 'investApplicationType' },
    { id: 2, title: 'Arabic Investor Name', name: 'plotNumber' },
    { id: 3, title: 'PIN', name: 'pin' },
    { id: 4, title: 'Project', name: 'project' },
    { id: 5, title: 'plot Type', name: 'plotType' },
    { id: 6, title: 'Plot Construction', name: 'plotConstruction' },
    { id: 7, title: 'Plot Compliance', name: 'plotCompliance' },
    { id: 8, title: 'Cluster', name: 'cluster' },
    { id: 9, title: 'Size', name: 'size' },
    { id: 10, title: 'Location (AR))', name: 'location_AR' },
    { id: 11, title: 'Location (EN)', name: 'location_EN' },
    { id: 12, title: 'Zone Type(AR)', name: 'zoneType_AR' },
    { id: 12, title: 'Zone Type(EN)', name: 'zoneType_EN' },
  ];
  const plotInformationData = { investApplicationType: '', plotNumber: '', pin: 7838383, project: 'sjsdjsj@gamil.com', plotType: 'dhdj.com', plotConstruction: '', plotCompliance: 'dkkddjkjd', 
    cluster: '', size: '', location_AR: '',location_EN:'' };
    const plotClearanceHeader=[
      { id: 1, title: 'Blocked (STEP-IN RIGHTS)', name: 'blocked' },
      { id: 2, title: 'Hold due to Legal Violation', name: 'legalViolation' },
      { id: 3, title: 'Hold due to Operational Violation', name: 'operationalViolation' },
      { id: 4, title: 'Hold due to HSE Violation', name: 'HSEViolation' },
      { id: 5, title: 'Hold Due to Financial Status', name: 'financialStatus' },
    ];
    const plotClearanceData={blocked:'yes',legalViolation:'no',operationalViolation:'yes',HSEViolation:'',financialStatus:'no'};
    //
    const plotAgreementHeader=[
       { title: 'Draft Agreement', name: 'draftAgreement',link:true },
       { title: 'Current Agreement', name: 'currentAgreement',link:true },
       { title: 'Investor', name: 'investor',link:true },
       { title: 'Agreement Type', name: 'agreementType' },
       { title: 'Commencement Date', name: 'commencementDate' },
       { title: 'End Date', name: 'endDate' },
       { title: 'Land use Activity', name: 'landUseActivity',link:true },
       { title: 'Consultant Name', name: 'consultantName' },

    ];
    const agreementData={draftAgreement:"AG-Indusrialist-7778",currentAgreement:'AG-Indusrialist-73737',investor:"SOSCO LO",agreementType:'lease',commencementDate:'2024-05-10',endDate:'2024-05-10',landUseActivity:'dd',consultantName:'ABC'}
    const permitDetailsHeader=[{id:1,title:'',name:''}] 
     const permitDetailsData={}
  const sections = [
  { id: "item-1", title: "Plot Information", headers: plotInformationHeader, data: plotInformationData },
  { id: "item-2", title: "Clearance Details", headers: plotClearanceHeader, data: plotClearanceData },
  { id: "item-3", title: "Agreement and Land Use Details", headers: plotAgreementHeader, data: agreementData },
  { id: "item-4", title: "Building permit Details and Building File Applications", headers: plotAgreementHeader, data: {} },
  { id: "item-5", title: "Completion Certificate", headers: plotAgreementHeader, data: {} },
];

const SectionAccordion = ({ id, title, headers, data }:{id:string;title:string;headers:[],data:any}) => (
  <AccordionItem value={id}>
    <AccordionTrigger className="p-4">{title}</AccordionTrigger>
    <AccordionContent>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {headers.map((item:any, index:number) => (
          <div key={index}>
            <p className="text-[#231F2099]">{item.title}</p>
            {data[item.name]?.link?(
                <button  onClick={()=>console.log(data[item.link])} className='flex text-[#83764F] '>{data[item.name] ? data[item.name] : "--"}   <ChevronRight size={24} className="text-gray-500" /></button>
            ):(
                <p>{data[item.name] ? data[item.name] : "--"}</p>
            )}
          
          </div>
        ))}
      </div>
    </AccordionContent>
  </AccordionItem>
);
  return (
    <div className='border border-1 m-4 '>
       <div className="border border-1 m-4 rounded-lg">
      <Accordion type="single" collapsible className="w-full">
        {sections.map((section) => (
          <SectionAccordion key={section.id} {...section} />
        ))}
      </Accordion>
    </div>
    </div>

  )
}

const Applications=()=>{
    const allApplicationHeader = [
    { id: 1, title: 'Invest Application Type', name: 'applicantID' },
    { id: 2, title: 'Arabic Investor Name', name: 'location' },
    { id: 3, title: 'PIN', name: 'owner' },
    { id: 4, title: 'Project', name: 'assignedbussinessAnalyst' },
    { id: 5, title: 'plot Type', name: 'applicationStatus' },
    { id: 6, title: 'Plot Construction', name: 'externalStatus' },
    { id: 7, title: 'Plot Compliance', name: 'createdOn' },
    { id: 8, title: 'Cluster', name: 'submissionDate' },
    { id: 9, title: 'Size', name: 'completionDate' },
    { id: 10, title: 'Location (AR))', name: 'plotNumber' },
    { id: 11, title: 'Location (EN)', name: 'currentAgreement' },
    { id: 12, title: 'Zone Type(AR)', name: 'commencementDate' },
    { id: 12, title: 'Zone Type(EN)', name: 'endDate' },
  ];
  const allApplicationData=[{id:1,applicantID:37737,location:'7hshh',owner:'ajjsj',assignedbussinessAnalyst:'yeye',applicationStatus:'dhhdh',externalStatus:'pending',createdOn:'2025-02-01',submissionDate:'',plotNumber:'3636',currentAgreement:'tet',commencementDate:'',endDate:''}]
 
  const sections = [
  { id: "item-1", title: "All Applications", headers: allApplicationHeader, data: allApplicationData },
  { id: "item-2", title: "Related Commercial Applications", headers: allApplicationHeader, data: allApplicationData },
  { id: "item-3", title: "Commercial and waterfront Applications", headers: allApplicationHeader, data: allApplicationData },
];
const SectionAccordion = ({ id, title, headers, data }:{id:string;title:string;headers:[],data:any}) => (
  <AccordionItem value={id}>
    <AccordionTrigger className="p-4">{title}</AccordionTrigger>
    <AccordionContent>
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4"> */}
        {/* {headers.map((item:any, index:number) => (
          <div key={index}> */}
            <CommonTable data={allApplicationData} header={headers}/>
            {/* <p className="text-[#231F2099]">{item.title}</p>
            {data[item.name]?.link?(
                <button onClick={()=>console.log(data[item.link])} className='flex text-[#83764F] '>{data[item.name] ? data[item.name] : "--"}   <ChevronRight size={24} className="text-gray-500" /></button>
            ):(
                <p>{data[item.name] ? data[item.name] : "--"}</p>
            )}
           */}
          {/* </div>
        ))} */}
      {/* </div> */}
    </AccordionContent>
  </AccordionItem>
);
 return(
  <div className='border border-1 m-4 '>
       <div className="border border-1 m-4 rounded-lg">
      <Accordion type="single" collapsible className="w-full">
        {sections.map((section) => (
          <SectionAccordion key={section.id} {...section} />
        ))}
      </Accordion>
    </div>
    </div>

 )
}