import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CommonTable from '@/components/CommonTable';
import DropDownComponent from '@/components/DropDownComponent';
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import searchIcon from '@/assets/icons/search.svg';
import exportIcon from '@/assets/exportIcon.png';
import detailIcon from '@/assets/icons/detailIcon.png';
import gridIcon from '@/assets/icons/gridIcon.png';
import CommonCard from '@/components/CommonCard';
import { ClickableCell } from '@/components/ClickableCell';



const statusArray = [
  { id: 1, name: 'New', value: 'new' },
  { id: 2, name: 'In Progress', value: 'inProgress' },
  { id: 3, name: 'Completed', value: 'completed' },
  { id: 4, name: 'Cancelled', value: 'cancelled' },
   { id:5, name: 'Rejected', value: 'rejected' }
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
const sortByArray=[
  { id: 1, value: 'newestToOldest', name: 'Newest to Oldest' },
  { id: 2, value: 'oldestToNewest', name: 'Oldest to Newest' },
]
const filterByArray=[
  { id: 1, value: 'activeRequest', name: 'Active Request' },
  { id: 2, value: 'inactiveRequest', name: 'Inactive Requaest' },
]

const dummyData = [
  { referenceID: 'REF-001', applicant: 'John Doe', contactPerson: 'Jane Smith', investor: 'Acme Corp', agreement: 'Lease', plot: 'ME-IZ-LE-001', requestType: 'New Application', requestStatus: 'Pending', serviceStatus: 'Active', owner: 'XYZ Properties', createdOn: '22/05/2025', ownerImage: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg' },
  { referenceID: 'REF-002', applicant: 'Michael Scott', contactPerson: 'Dwight Schrute', investor: 'Dunder Mifflin', agreement: 'Purchase', plot: 'ME-IZ-LE-002', requestType: 'Modification', requestStatus: 'Approved', serviceStatus: 'Operational', owner: 'ABC Realty', createdOn: '20/05/2025', ownerImage: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg' },
  { referenceID: 'REF-003', applicant: 'Sarah Connor', contactPerson: 'Kyle Reese', investor: 'Cyberdyne Systems', agreement: 'Rent', plot: 'ME-IZ-LE-003', requestType: 'Renewal', requestStatus: 'Rejected', serviceStatus: 'Inactive', owner: 'DEF Holdings', createdOn: '18/05/2025', ownerImage: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg' }
];

const ServiceRequestsPage = () => {
  const navigate = useNavigate();

  const [grid, setGrid] = useState<boolean>(false);
  const [filters, setFilters] = useState({
    status: '',
    filter: '',
    sort:'' 
  });


  const TableHeader = [
    { id: 1, cell: (row: any) => ClickableCell(row, 'referenceID'), title: "Reference ID", },
    { id: 2, cell: (row: any) => ClickableCell(row, 'applicant'), title: "Applicant" },
    { id: 3, cell: (row: any) => ClickableCell(row, 'contactPerson'), title: "Contact Person" },
    { id: 4, cell: (row: any) => ClickableCell(row, 'investor'), title: "Investor", },
    { id: 5, cell: (row: any) => ClickableCell(row, 'agreement'), title: "Agreement" },
    { id: 6, cell: (row: any) => ClickableCell(row, 'plot'), title: "Plot" },
    { id: 7, cell: (row: any) => ClickableCell(row, 'requestType'), title: "Request Type" },
    { id: 8, selector: "requestStatus", title: "Request Status" },
    { id: 9, selector: "serviceStatus", title: "Service Status" },
    { id: 10, cell: (row: any) => <button onClick={() => navigate(`${row?.owner}`, { state: { data: row } })} className="flex  gap-2 items-center "><img src={row?.ownerImage} alt='img' className="size-[30px] rounded-full" />{row.owner}</button>, title: 'Onwer' },
    { id: 11, selector: "createdOn", title: "Created On" },
  ];
  const handleGrid = () => {
    setGrid(!grid);
  }
  const handleChange = (key:string, value:string) => {
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
            value={filters.filter}
            setValue={(value: any) => handleChange('filter', value)}
            data={filterByArray}
            title="Filter By"
          />
          <DropDownComponent
            value={filters.sort}
            setValue={(value: any) => handleChange('sort', value)}
            data={sortByArray}
            title="Sort By"
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
          {dummyData.map((plot,index) => (
            <CommonCard key={index} icon={detailIcon} data={plot} />
          ))}
        </div>

      ) : (
        <div className='overflow-x-hidden'>
          <CommonTable data={dummyData} header={TableHeader} />
        </div>

      )}

    </Layout>
  )
}

export default ServiceRequestsPage;