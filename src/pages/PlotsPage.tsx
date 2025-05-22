
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


// 
const statusArray = [
  { id: 1, name: 'All', value: 'all' },
  { id: 2, name: 'Allocated', value: 'allocated' },
  { id: 3, name: 'No Longer Used', value: 'NoLongerUsed' },
  { id: 3, name: 'On Hold', value: 'onHold' }
]
const applicationTypeArray = [
  { id: 1, name: 'Logistics', value: 'logistics' },
  { id: 2, name: 'Economic Zone', value: 'economicZone' },
  { id: 3, name: 'All', value: 'all' },
  { id: 4, name: 'Commercial', value: 'commercial' },
  { id: 5, name: 'Industrial', value: 'industrial' },
  { id: 6, name: 'Utility', value: 'utility' },
  { id: 7, name: 'Health', value: 'health' },
  { id: 8, name: 'Not Available', value: 'notAvailable' },
  { id: 9, name: 'Open Space', value: 'openSpace' },
  { id: 10, name: 'Service', value: 'service' },
  { id: 11, name: 'Water Front', value: 'waterFront' },
];
const filterArray = [
  { id: 1, name: 'Zones', value: 'zones' },
  { id: 2, name: 'Clusters', value: 'clusters' },
]



const plotData = [
  { id: 1, plot: 'ME-IZ-LE-256', pin: 478929, project: 'Industrial', applicationType: 'MIZ', dimension: '1200.00', location: '1000.00', size: '1000.00', typeOfPlot: 'Industrial', agreementType: 'Hold', investor: 'Sosco Will', commencementDate: '25/11/2024 12:13', endDate: '25/11/2024 12:13', statusReason: 'yes', developmentStatus: 'completed', clearanceStatus: 'Hold due to Operational Violation' },
  { id: 2, plot: 'ME-IZ-LE-128', pin: 478929, project: 'Industrial', applicationType: 'MIZ', dimension: '1200.00', location: '1000.00', size: '1000.00', typeOfPlot: 'Industrial', agreementType: 'Hold', investor: 'Sosco Will', commencementDate: '25/11/2024 12:13', endDate: '25/11/2024 12:13', statusReason: 'yes', developmentStatus: 'completed', clearanceStatus: 'Hold due to Operational Violation' },
  { id: 3, plot: 'ME-IZ-LEehu-020', pin: 478929, project: 'Industrial', applicationType: 'MIZ', dimension: '1200.00', location: '1000.00', size: '1000.00', typeOfPlot: 'Industrial', agreementType: 'Hold', investor: 'Sosco Will', commencementDate: '25/11/2024 12:13', endDate: '25/11/2024 12:13', statusReason: 'yes', developmentStatus: 'completed', clearanceStatus: 'Hold due to Operational Violation' },
  { id: 4, plot: 'ME-IZdd-LE-256', pin: 478929, project: 'non-Industrial', applicationType: 'MIZ', dimension: '1200.00', location: '1000.00', size: '1000.00', typeOfPlot: 'Industrial', agreementType: 'Hold', investor: 'Sosco Will', commencementDate: '25/11/2024 12:13', endDate: '25/11/2024 12:13', statusReason: 'yes', developmentStatus: 'completed', clearanceStatus: 'Hold due to Operational Violation' },
  { id: 5, plot: 'ME-IZ-qqLE-256', pin: 478929, project: 'Industrial', applicationType: 'MIZ', dimension: '1200.00', location: '1000.00', size: '1000.00', typeOfPlot: 'Industrial', agreementType: 'Hold', investor: 'Sosco Will', commencementDate: '25/11/2024 12:13', endDate: '25/11/2024 12:13', statusReason: 'yes', developmentStatus: 'completed', clearanceStatus: 'Hold due to Operational Violation' },
  { id: 6, plot: 'ME-IZ-eLE-256', pin: 478929, project: 'Industrial', applicationType: 'MIZ', dimension: '1200.00', location: '1000.00', size: '1000.00', typeOfPlot: 'Industrial', agreementType: 'Hold', investor: 'Sosco Will', commencementDate: '25/11/2024 12:13', endDate: '25/11/2024 12:13', statusReason: 'yes', developmentStatus: 'completed', clearanceStatus: 'Hold due to Operational Violation' },
  { id: 7, plot: 'ME-IZ-eeeLE-256', pin: 478929, project: 'non-Industrial', applicationType: 'MIZ', dimension: '1200.00', location: '1000.00', size: '1000.00', typeOfPlot: 'Industrial', agreementType: 'Hold', investor: 'Sosco Will', commencementDate: '25/11/2024 12:13', endDate: '25/11/2024 12:13', statusReason: 'yes', developmentStatus: 'completed', clearanceStatus: 'Hold due to Operational Violation' },
  { id: 8, plot: 'ME-IZ-e-256', pin: 478929, project: 'Industrial', applicationType: 'MIZ', dimension: '1200.00', location: '1000.00', size: '1000.00', typeOfPlot: 'Industrial', agreementType: 'Hold', investor: 'Sosco Will', commencementDate: '25/11/2024 12:13', endDate: '25/11/2024 12:13', statusReason: 'yes', developmentStatus: 'completed', clearanceStatus: 'Hold due to Operational Violation' },
  { id: 9, plot: 'ME-IZ-e-256', pin: 478929, project: 'non-Industrial', applicationType: 'MIZ', dimension: '1200.00', location: '1000.00', size: '1000.00', typeOfPlot: 'Industrial', agreementType: 'Hold', investor: 'Sosco Will', commencementDate: '25/11/2024 12:13', endDate: '25/11/2024 12:13', statusReason: 'yes', developmentStatus: 'completed', clearanceStatus: 'Hold due to Operational Violation' },
  { id: 10, plot: 'ME-IZ-eeLE-256', pin: 478929, project: 'Industrial', applicationType: 'MIZ', dimension: '1200.00', location: '1000.00', size: '1000.00', typeOfPlot: 'Industrial', agreementType: 'Hold', investor: 'Sosco Will', commencementDate: '25/11/2024 12:13', endDate: '25/11/2024 12:13', statusReason: 'yes', developmentStatus: 'completed', clearanceStatus: 'Hold due to Operational Violation' },
  { id: 11, plot: 'ME-IZ-eeLE-256', pin: 478929, project: 'Industrial', applicationType: 'MIZ', dimension: '1200.00', location: '1000.00', size: '1000.00', typeOfPlot: 'Industrial', agreementType: 'Hold', investor: 'Sosco Will', commencementDate: '25/11/2024 12:13', endDate: '25/11/2024 12:13', statusReason: 'yes', developmentStatus: 'completed', clearanceStatus: 'Hold due to Operational Violation' },
  { id: 12, plot: 'ME-IZ-LeeE-256', pin: 478929, project: 'Industrial', applicationType: 'MIZ', dimension: '1200.00', location: '1000.00', size: '1000.00', typeOfPlot: 'Industrial', agreementType: 'Hold', investor: 'Sosco Will', commencementDate: '25/11/2024 12:13', endDate: '25/11/2024 12:13', statusReason: 'yes', developmentStatus: 'completed', clearanceStatus: 'Hold due to Operational Violation' },
  { id: 13, plot: 'ME-IZ-eeLE-256', pin: 478929, project: 'Industrial', applicationType: 'MIZ', dimension: '1200.00', location: '1000.00', size: '1000.00', typeOfPlot: 'Industrial', agreementType: 'Hold', investor: 'Sosco Will', commencementDate: '25/11/2024 12:13', endDate: '25/11/2024 12:13', statusReason: 'yes', developmentStatus: 'completed', clearanceStatus: 'Hold due to Operational Violation' },
  { id: 14, plot: 'ME-IZ-eeLE-256', pin: 478929, project: 'Industrial', applicationType: 'MIZ', dimension: '1200.00', location: '1000.00', size: '1000.00', typeOfPlot: 'Industrial', agreementType: 'Hold', investor: 'Sosco Will', commencementDate: '25/11/2024 12:13', endDate: '25/11/2024 12:13', statusReason: 'yes', developmentStatus: 'completed', clearanceStatus: 'Hold due to Operational Violation' },
  { id: 15, plot: 'ME-IZ-LE-256', pin: 478929, project: 'Industrial', applicationType: 'MIZ', dimension: '1200.00', location: '1000.00', size: '1000.00', typeOfPlot: 'Industrial', agreementType: 'Hold', investor: 'Sosco Will', commencementDate: '25/11/2024 12:13', endDate: '25/11/2024 12:13', statusReason: 'yes', developmentStatus: 'completed', clearanceStatus: 'Hold due to Operational Violation' },
  { id: 16, plot: 'ME-IZ-LeeE-256', pin: 478929, project: 'Industrial', applicationType: 'MIZ', dimension: '1200.00', location: '1000.00', size: '1000.00', typeOfPlot: 'Industrial', agreementType: 'Hold', investor: 'Sosco Will', commencementDate: '25/11/2024 12:13', endDate: '25/11/2024 12:13', statusReason: 'yes', developmentStatus: 'completed', clearanceStatus: 'Hold due to Operational Violation' },
  { id: 17, plot: 'ME-IZ-eeLE-256', pin: 478929, project: 'Industrial', applicationType: 'MIZ', dimension: '1200.00', location: '1000.00', size: '1000.00', typeOfPlot: 'Industrial', agreementType: 'Hold', investor: 'Sosco Will', commencementDate: '25/11/2024 12:13', endDate: '25/11/2024 12:13', statusReason: 'yes', developmentStatus: 'completed', clearanceStatus: 'Hold due to Operational Violation' },
  { id: 18, plot: 'ME-IZ-eeLE-256', pin: 478929, project: 'Industrial', applicationType: 'MIZ', dimension: '1200.00', location: '1000.00', size: '1000.00', typeOfPlot: 'Industrial', agreementType: 'Hold', investor: 'Sosco Will', commencementDate: '25/11/2024 12:13', endDate: '25/11/2024 12:13', statusReason: 'yes', developmentStatus: 'completed', clearanceStatus: 'Hold due to Operational Violation' },
  { id: 19, plot: 'ME-IZ-LeeE-256', pin: 478929, project: 'Industrial', applicationType: 'MIZ', dimension: '1200.00', location: '1000.00', size: '1000.00', typeOfPlot: 'Industrial', agreementType: 'Hold', investor: 'Sosco Will', commencementDate: '25/11/2024 12:13', endDate: '25/11/2024 12:13', statusReason: 'yes', developmentStatus: 'completed', clearanceStatus: 'Hold due to Operational Violation' },

];


const PlotsPage = () => {
  const navigate=useNavigate();
  const [grid, setGrid] = useState<boolean>(false);
  const [filters, setFilters] = useState({
    status: '',
    applicationType:'',
    filter: '',
  });


  const TableHeader = [
    // { id: 1, selector: "plot", title: "Plot Number", isLink: true },
    {id:1,cell:(row:any)=><button onClick={() => navigate(`${row?.plot}`, { state: { data: row } })} className="flex items-center text-[#83764F] underline underline-offset-2 decoration-[#83764F]">{row.plot}<ArrowUpRight className="size-[16px]" /></button>,title:'Plot Number'},
      
    { id: 2, selector: "pin", title: "Pin" },
    { id: 3, selector: "project", title: "Project" },
    { id: 4, selector: "applicationType", title: "Application Type", isLink: true },
    { id: 5, selector: "dimension", title: "Dimension" },
    { id: 6, selector: "location", title: "Location" },
    { id: 7, selector: "size", title: "Size" },
    { id: 8, selector: "typeOfPlot", title: "Type of Plot" },
    { id: 9, selector: "agreementType", title: "Agreement Type" },
    { id: 10, selector: "investor", title: "Investor" },
    { id: 11, selector: "commencementDate", title: "Commencement Date" },
    { id: 12, selector: "endDate", title: "End Date" },
    { id: 13, selector: "statusReason", title: "Status Reason" },
    { id: 14, selector: "developmentStatus", title: "Development Status" },
    { id: 15, selector: "clearanceStatus", title: "Clearance Status" },
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
            title="Status"
          />
            <DropDownComponent
            value={filters.applicationType}
            setValue={(value: any) => handleChange('applicationType', value)}
            data={applicationTypeArray}
            title="Application Type"
          />
          <DropDownComponent
            value={filters.filter}
            setValue={(value: any) => handleChange('sort', value)}
            data={filterArray}
            title="Filter By"
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
          {plotData.map((plot) => (
            <CommonCard key={plot.id} icon={detailIcon} data={plot} />
          ))}
        </div>

      ) : (
        <div className='overflow-x-scroll'>
          <CommonTable data={plotData} header={TableHeader} />
        </div>

      )}

    </Layout>
  )
}

export default PlotsPage