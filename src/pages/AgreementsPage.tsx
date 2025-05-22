
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

import CommonTable from '@/components/CommonTable';
import DropDownComponent from '@/components/DropDownComponent';
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import searchIcon from '../assets/icons/search.svg';
import exportIcon from '../assets/exportIcon.png';
import detailIcon from '../assets/icons/detailIcon.png';
import gridIcon from '../assets/icons/gridIcon.png';
import CommonCard from '@/components/CommonCard';
import { ClickableCell } from '@/components/ClickableCell';


// 
const statusArray = [
  { id: 1, name: 'Active', value: 'active' },
  { id: 2, name: 'Pending Work', value: 'pendingWork' },
  { id: 3, name: 'Completed', value: 'completed' },
  { id: 4, name: 'Cancelled', value: 'cancelled' },
  { id: 5, name: 'Expired', value: 'expired' },
  { id: 6, name: 'On Hold', value: 'onHold' },
  { id: 7, name: 'Cancelled', value: 'terminated' },
  { id: 8, name: 'Return From Finance', value: 'returnFromFinance' },

]
const agreementTypeArray = [
  { id: 1, name: 'Reservation', value: 'reservation' },
  { id: 2, name: 'Lease', value: 'lease' },
  { id: 3, name: 'Land Allocation Extension', value: 'landAllocationExtension' },
  { id: 4, name: 'Land Allocation', value: 'landAllocation' },
];
const currentStageArray = [
  { id: 1, name: 'PA&L User', value: 'PA&User' },
  { id: 2, name: 'PA&L Manager', value: 'PA&LManager' },
  { id: 3, name: 'Finance Review', value: 'financeReview' },
  { id: 4, name: 'PA&L Zone Director', value: 'PA&LZoneDirector' },
  { id: 5, name: 'Customer Signature', value: 'customerSignature' },
  { id: 6, name: 'BSC Zone Director', value: 'BSCZoneDirector' },
]


const dummyData = [
  {
    referenceID: "REF-001",
    investor: "Acme Corp",
    project: "Industrial Zone A",
    plot: "ME-IZ-LE-001",
    industrialApplicatons: "Approved",
    statusReason: "Operational",
    createdOn: "22/05/2025",
    modifiedOn: "23/05/2025",
    sendToCustomer: "Yes",
    signedByCustomer: "Pending",
    signedByManateq: "Approved",
    clearanceStatus: "Cleared",
    commencementDate:"09/05/2025",
  },
  {
    referenceID: "REF-002",
    investor: "Dunder Mifflin",
    project: "Paper Mill Expansion",
    plot: "ME-IZ-LE-002",
    industrialApplicatons: "Processing",
    statusReason: "Under Review",
    createdOn: "20/05/2025",
    modifiedOn: "21/05/2025",
    sendToCustomer: "No",
    signedByCustomer: "Signed",
    signedByManateq: "Signed",
    clearanceStatus: "Pending Approval",
    commencementDate:"09/05/2025",
  },
  {
    referenceID: "REF-003",
    investor: "Cyberdyne Systems",
    project: "Tech Hub",
    plot: "ME-IZ-LE-003",
    industrialApplicatons: "Rejected",
    statusReason: "Incomplete Documentation",
    createdOn: "18/05/2025",
    modifiedOn: "19/05/2025",
    sendToCustomer: "No",
    signedByCustomer: "Not Signed",
    signedByManateq: "Not Signed",
    clearanceStatus: "Hold due to Operational Violation",
    commencementDate:"09/05/2025",
  },
  {
    referenceID: "REF-004",
    investor: "Globex Corp",
    project: "Solar Park",
    plot: "ME-IZ-LE-004",
    industrialApplicatons: "Approved",
    statusReason: "Environmental Compliance Met",
    createdOn: "17/05/2025",
    modifiedOn: "18/05/2025",
    sendToCustomer: "Yes",
    signedByCustomer: "Signed",
    signedByManateq: "Approved",
    clearanceStatus: "Cleared",
    commencementDate:"09/05/2025",
  },
  {
    referenceID: "REF-005",
    investor: "Wayne Enterprises",
    project: "Automotive Facility",
    plot: "ME-IZ-LE-005",
    industrialApplicatons: "Processing",
    statusReason: "Pending Site Inspection",
    createdOn: "16/05/2025",
    modifiedOn: "17/05/2025",
    sendToCustomer: "Yes",
    signedByCustomer: "Signed",
    signedByManateq: "Pending",
    clearanceStatus: "Pending Final Review",commencementDate:"09/05/2025",
  },
  {
    referenceID: "REF-006",
    investor: "Stark Industries",
    project: "AI Research Center",
    plot: "ME-IZ-LE-006",
    industrialApplicatons: "Rejected",
    statusReason: "Regulatory Compliance Issues",
    createdOn: "15/05/2025",
    modifiedOn: "16/05/2025",
    sendToCustomer: "No",
    signedByCustomer: "Not Signed",
    signedByManateq: "Not Signed",
    clearanceStatus: "Hold due to Policy Violation",
    commencementDate:"09/05/2025",
  },
  {
    referenceID: "REF-007",
    investor: "Umbrella Corp",
    project: "Bio-Tech Park",
    plot: "ME-IZ-LE-007",
    industrialApplicatons: "Approved",
    statusReason: "Lab Safety Approved",
    createdOn: "14/05/2025",
    modifiedOn: "15/05/2025",
    sendToCustomer: "Yes",
    signedByCustomer: "Signed",
    signedByManateq: "Approved",
    clearanceStatus: "Cleared"
    ,commencementDate:"09/05/2025",
  },
  {
    referenceID: "REF-008",
    investor: "Tesla Energy",
    project: "Battery Production Facility",
    plot: "ME-IZ-LE-008",
    industrialApplicatons: "Processing",
    statusReason: "Infrastructure Upgrade Required",
    createdOn: "13/05/2025",
    modifiedOn: "14/05/2025",
    sendToCustomer: "No",
    signedByCustomer: "Pending",
    signedByManateq: "Pending",
    clearanceStatus: "Pending Environmental Review",
    commencementDate:"09/05/2025",
  },
  {
    referenceID: "REF-009",
    investor: "Blue Origin",
    project: "Space Tech Research Hub",
    plot: "ME-IZ-LE-009",
    industrialApplicatons: "Rejected",
    statusReason: "Funding Unapproved",
    createdOn: "12/05/2025",
    modifiedOn: "13/05/2025",
    sendToCustomer: "No",
    signedByCustomer: "Not Signed",
    signedByManateq: "Not Signed",
    clearanceStatus: "Hold due to Financial Issues",
    commencementDate:"09/05/2025",
  },
  {
    referenceID: "REF-010",
    investor: "Google X",
    project: "Quantum Computing Lab",
    plot: "ME-IZ-LE-010",
    industrialApplicatons: "Approved",
    statusReason: "Innovation Grant Secured",
    createdOn: "11/05/2025",
    modifiedOn: "12/05/2025",
    sendToCustomer: "Yes",
    signedByCustomer: "Signed",
    signedByManateq: "Approved",
    clearanceStatus: "Cleared",
    commencementDate:"09/05/2025",
  },
  {
    referenceID: "REF-011",
    investor: "Netflix Studios",
    project: "Animation Production House",
    plot: "ME-IZ-LE-011",
    industrialApplicatons: "Processing",
    statusReason: "Infrastructure Expansion In Progress",
    createdOn: "10/05/2025",
    modifiedOn: "11/05/2025",
    sendToCustomer: "No",
    signedByCustomer: "Pending",
    signedByManateq: "Pending",
    clearanceStatus: "Pending Facility Inspection",
    commencementDate:"09/05/2025",
  },
  {
    referenceID: "REF-012",
    investor: "Amazon Robotics",
    project: "AI Warehouse Automation",
    plot: "ME-IZ-LE-012",
    industrialApplicatons: "Approved",
    statusReason: "Operational AI Testing Successful",
    createdOn: "09/05/2025",
    modifiedOn: "10/05/2025",
    sendToCustomer: "Yes",
    signedByCustomer: "Signed",
    signedByManateq: "Approved",
    clearanceStatus: "Cleared",
    commencementDate:"09/05/2025",
  }
];




const AgreementsPage = () => {
  const navigate=useNavigate();
  const [grid, setGrid] = useState<boolean>(false);
  const [filters, setFilters] = useState({
    status: '',
    agreementType:'',
    currentStage: '',
  });

// cell:(row:any)=>ClickableCell(row,''),title:''
  const TableHeader = [
    
    {id:1,cell:(row:any)=>ClickableCell(row,'referenceID'),title:'Reference ID'},
    { id: 2, cell:(row:any)=>ClickableCell(row,'investor'), title: "Investor" },
    { id: 3, cell:(row:any)=>ClickableCell(row,'project'), title: "Project" },
    { id: 4, cell:(row:any)=>ClickableCell(row,'plot'), title: "Plot" },
    { id: 5,selector:'industrialApplicatons', title: "Industrial Applications" },
    { id: 6, selector:'statusReason', title: "Status Reason" },
    { id: 7, selector:'createdOn', title: "Created On" },
    { id: 8, selector:'modifiedOn', title: "Modified On" },
    { id: 9, selector:'sendToCustomer', title: "Send To Customer" },
    { id: 10,selector:'signedByCustomer', title: "Signed By Customer" },
    { id: 11,selector:'signedByManateq', title: "Signed By Manateq" },
    { id: 12,selector:'clearanceStatus', title: "Clearance Status" },
    { id: 13,selector:'commencementDate', title: "Commencement Date" },
  ];

 

  const handleGrid = () => {
    setGrid(!grid);
  }

  const handleChange = (key:string, value:any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Layout>
      <Header />

      <div className='h-10 w-[100%] flex justify-between px-4 mt-4'>
        <div className='flex gap-5'>
          <button className='flex size-10 rounded-sm shadow-lg items-center justify-center'>
            <img src={searchIcon} className='size-6' />
          </button>
           <DropDownComponent
            value={filters.status}
            setValue={(value: any) => handleChange('status', value)}
            data={statusArray}
            title="Status Reason"
          />
            <DropDownComponent
            value={filters.agreementType}
            setValue={(value: any) => handleChange('agreementType', value)}
            data={agreementTypeArray}
            title="Application Type"
          />
          <DropDownComponent
            value={filters.currentStage}
            setValue={(value: any) => handleChange('currentStage', value)}
            data={currentStageArray}
            title="Current Stage"
          />
        </div>

        <div className='flex gap-5'>
          <button className='flex p-2 gap-2 shadow-sm rounded-lg h-10 items-center'>
            <img src={exportIcon} alt='export' className='size-5' />
            export
          </button>
          <button onClick={handleGrid} className='flex p-2 gap-2 shadow-sm rounded-lg h-10 items-center'>
            <img src={gridIcon} alt='icon' className='size-5' />
            {grid ? 'Grid View' : 'List View'}
          </button>
        </div>

      </div>
      {grid ? (

        <div className='grid grid-cols-3 gap-4'>
          {dummyData.map((agreement,index) => (
            <CommonCard key={index} icon={detailIcon} data={agreement} />
          ))}
        </div>

      ) : (
        <div className='overflow-x-scroll'>
          <CommonTable data={dummyData} header={TableHeader} />
        </div>

      )}

    </Layout>
  )
}

export default AgreementsPage;