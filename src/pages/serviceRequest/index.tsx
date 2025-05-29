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
import SubHeader from '@/components/SubHeader';
import { returnSelectTitle } from '@/lib/utils';
import { agreementExpiryData, allServiceRequestData, investorBlackListData, investorBlockData, 
  landSwapData, landTransferData, plotMergeData, plotSizeChangeData } from '@/data/data';



const statusArray = [
  { id: 1, name: 'New', value: 'new' },
  { id: 2, name: 'In Progress', value: 'inProgress' },
  { id: 3, name: 'Completed', value: 'completed' },
  { id: 4, name: 'Cancelled', value: 'cancelled' },
  { id: 5, name: 'Rejected', value: 'rejected' }
]
const sortByArray = [
  { id: 1, value: 'newestToOldest', name: 'Newest to Oldest' },
  { id: 2, value: 'oldestToNewest', name: 'Oldest to Newest' },
]
const filterByArray = [
  { id: 1, value: 'activeRequest', name: 'Active Request' },
  { id: 2, value: 'inactiveRequest', name: 'Inactive Requaest' },
]

const investorBlackLIstHeader = [
  { id: 1, cell: (row: any) => ClickableCell({row:row, field:'refId'}), title: 'Reference ID' },
  { id: 2, cell: (row: any) => ClickableCell({row:row, field:'investor'}), title: 'Investor' },
  { id: 3, selector: "type", title: "Type" },
  { id: 4, cell: (row: any) => ClickableCell({row:row, field:'requestingDepartment'}), title: 'Requesting Department' },
  { id: 3, selector: "createdOn", title: "createdOn" },
]

const investorBlockHeader = [
  { id: 1, cell: (row: any) => ClickableCell({row:row, field:'refId'}), title: 'Reference ID' },
  { id: 2, cell: (row: any) => ClickableCell({row:row, field:'investor'}), title: 'Investor' },
  { id: 3, cell: (row: any) => ClickableCell({row:row, field:'contactPerson'}), title: "Contact Person" },
  { id: 4, cell: (row: any) => ClickableCell({row:row, field:'currentAgreement'}), title: "Current Agreement" },
  { id: 5, selector: "createdOn", title: "createdOn" },
]

const serviceRequestsArray = [
  { id: 0, name: 'All Service Requests', value: 'allServiceRequest' },
  { id: 1, name: 'Investor Blacklist', value: 'investorBlacklist' },
  { id: 2, name: 'Block/Unblock Investor (Finance)', value: 'blockUnblockInvestor' },
  { id: 3, name: 'Steps In Rights Block Plot', value: 'blockPlot' },
  { id: 4, name: 'Steps In Rights Unblock Plot', value: 'unblockPlot' },
  { id: 5, name: 'Agreement Expiry and Renewal', value: 'agreementExpiryRenewal' },
  { id: 6, name: 'Termination', value: 'termination' },
  { id: 7, name: 'Land Swap', value: 'landSwap' },
  { id: 8, name: 'Plot Merge', value: 'plotMerge' },
  { id: 9, name: 'Plot Size Change', value: 'plotSizeChange' },
  { id: 10, name: 'Land Transfer', value: 'landTransfer' },
];




const agreementExpiryHeader = [
  { id: 1, cell: (row: any) => ClickableCell({row:row, field:'refId'}), title: 'Reference ID' },
  { id: 2, cell: (row: any) => ClickableCell({row:row, field:'Agreement'}), title: "Agreement" },
  { id: 3, cell: (row: any) => ClickableCell({row:row, field:'industrialApplications'}), title: "Industrial Applications" },
  { id: 4, selector: "createdOn", title: "Agreement Renewal Decision" },
  { id: 5, selector: "Plot", title: "plot" },
  { id: 6, cell: (row: any) => ClickableCell({row:row, field:'investor'}), title: 'Investor' },
  { id: 3, cell: (row: any) => ClickableCell({row:row, field:'contactPerson'}), title: "Contact Person" },
]
const terminationHeader = [
  { id: 1, cell: (row: any) => ClickableCell({row:row, field:'refId'}), title: 'Reference ID' },
  { id: 2, selector: "createdOn", title: "Created On" },
]
const terminationData = [
  { "refId": "36724", "createdOn": "25/11/2024 - 12:27" },
  { "refId": "36724", "createdOn": "25/11/2024 - 12:27" },
  { "refId": "36724", "createdOn": "25/11/2024 - 12:27" },
  { "refId": "36724", "createdOn": "25/11/2024 - 12:27" },
  { "refId": "36724", "createdOn": "25/11/2024 - 12:27" }
]
const landSwapHeader = [
  { id: 1, cell: (row: any) => ClickableCell({row:row, field:'refId'}), title: 'Reference ID' },
  { id: 2, cell: (row: any) => ClickableCell({row:row, field:'investor'}), title: 'Investor' },
  { id: 3, cell: (row: any) => ClickableCell({row:row, field:'contactPerson'}), title: "Contact Person" },
  { id: 4, cell: (row: any) => ClickableCell({row:row, field:'currentAgreement'}), title: "Current Agreement" },
  { id: 5, cell: (row: any) => ClickableCell({row:row, field:'newAgreement'}), title: "New Agreement" },
  { id: 6, selector: "createdOn", title: "Created On" },
];



const plotMergeHeader = [
  { id: 1, cell: (row: any) => ClickableCell({row:row, field:'refId'}), title: 'Reference ID' },
  { id: 2, cell: (row: any) => ClickableCell({row:row, field:'investor'}), title: 'Investor' },
  { id: 3, cell: (row: any) => ClickableCell({row:row, field:'contactPerson'}), title: "Contact Person" },
  { id: 4, cell: (row: any) => ClickableCell({row:row, field:'plot1'}), title: "Plot 1" },
  { id: 5, cell: (row: any) => ClickableCell({row:row, field:'plot2'}), title: "Plot 2" },
  { id: 6, selector: "createdOn", title: "Created On" },
];
const plotSizeChangeHeader = [
  { id: 1, cell: (row: any) => ClickableCell({row:row, field:'refId'}), title: 'Reference ID' },
  { id: 2, cell: (row: any) => ClickableCell({row:row, field:'investor'}), title: 'Investor' },
  { id: 3, cell: (row: any) => ClickableCell({row:row, field:'contactPerson'}), title: "Contact Person" },
  { id: 4, cell: (row: any) => ClickableCell({row:row, field:'plot'}), title: "Plot" },
  { id: 5, selector: "createdOn", title: "Created On" },
];

const landTransferHeader = [
  { id: 1, cell: (row: any) => ClickableCell({row:row, field:'refId'}), title: "Reference ID", },
  { id: 2, cell: (row: any) => ClickableCell({row:row, field:'applicant'}), title: "Applicant" },
  { id: 3, cell: (row: any) => ClickableCell({row:row, field:'contactPerson'}), title: "Contact Person" },
  { id: 4, cell: (row: any) => ClickableCell({row:row, field:'investor'}), title: 'Investor' },
  { id: 5, cell: (row: any) => ClickableCell({row:row, field:'Agreement'}), title: "Agreement" },
  { id: 6, cell: (row: any) => ClickableCell({row:row, field: 'plot'}), title: "Plot" },
  { id: 7, cell: (row: any) => ClickableCell({row:row, field:'transferToInvestor'}), title: "Transfer to Investor" },
  { id: 8, cell: (row: any) => ClickableCell({row:row, field: 'newContactPerson'}), title: "New Contact Person" },
  { id: 9, selector: "requestStatus", title: "Request Status" },
  { id: 10, selector: "statusReason", title: "Status Reason" },
];



const ServiceRequestsPage = () => {
  const navigate = useNavigate();

  const [grid, setGrid] = useState<boolean>(false);
  const [filters, setFilters] = useState({
    status: '',
    filter: '',
    sort: '',
    serviceRequestType: 'investorBlacklist'
  });
 
  const allServiceRequestHeader = [
    { id: 1, cell: (row: any) => ClickableCell({row:row, field:'referenceID',value:filters.serviceRequestType}), title: "refId", },
    { id: 2, cell: (row: any) => ClickableCell({row:row, field:'applicant'}), title: "Applicant" },
    { id: 3, cell: (row: any) => ClickableCell({row:row, field:'contactPerson'}), title: "Contact Person" },
    { id: 4, cell: (row: any) => ClickableCell({row:row, field:'investor'}), title: "investor", },
    { id: 5, cell: (row: any) => ClickableCell({row:row, field:'agreement'}), title: "Agreement" },
    { id: 6, cell: (row: any) => ClickableCell({row:row, field:'plot'}), title: "Plot" },
    { id: 7, cell: (row: any) => ClickableCell({row:row, field:'requestType'}), title: "Request Type" },
    { id: 8, selector: "requestStatus", title: "Request Status" },
    { id: 9, selector: "serviceStatus", title: "Service Status" },
    { id: 10, cell: (row: any) => <button onClick={() => navigate(`${row?.owner}`, { state: { data: row } })} className="flex  gap-1 items-center "><img src={row?.ownerImage} alt='img' className="profile-container" />{row.owner}</button>, title: 'Onwer' },
    { id: 11, selector: "createdOn", title: "Created On" },
  ];

  const handleGrid = () => {
    setGrid(!grid);
  }
  const handleChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const renderTable = () => {
    switch (filters.serviceRequestType) {
      case 'allServiceRequest':
        return (<CommonTable header={allServiceRequestHeader} data={allServiceRequestData} />)

      case 'investorBlacklist':
        return (<CommonTable header={investorBlackLIstHeader} data={investorBlackListData} />)

      case 'Block/UnblockInvestor':
        return (<CommonTable header={investorBlockHeader} data={investorBlockData} />)

      case 'blockPlot':
        return (<CommonTable header={investorBlockHeader} data={investorBlockData} />)

      case 'unblockPlot':
        return (<CommonTable header={investorBlockHeader} data={investorBlockData} />)

      case 'agreementExpiry&Renewal':
        return (<CommonTable header={agreementExpiryHeader} data={agreementExpiryData} />)

      case 'termination':
        return <CommonTable header={terminationHeader} data={terminationData} />

      case 'landSwap':
        return (<CommonTable header={landSwapHeader} data={landSwapData} />)

      case 'plotMerge':
        return (<CommonTable header={plotMergeHeader} data={plotMergeData} />)

      case 'plotSizeChange':
        return (<CommonTable header={plotSizeChangeHeader} data={plotSizeChangeData} />)

      case 'landTransfer':
        return (<CommonTable header={landTransferHeader} data={landTransferData} />)
      default:
        return null;
    }
  }

  return (
    <Layout>
      <Header />
      <SubHeader />
      <div className='p-5'>
        <div className='flex gap-5'>
          <p className='text-[28px]'>{returnSelectTitle(serviceRequestsArray, filters.serviceRequestType)}</p>
          <DropDownComponent
            value={filters.serviceRequestType}
            setValue={(value: any) => handleChange('serviceRequestType', value)}
            data={serviceRequestsArray}
            notShow={true}
          />
        </div>

        <div className='h-10 w-[100%] flex justify-between  mt-4'>

          <div className='flex gap-5'>
            <button className='button-container size-10'>
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
            <button className='button-container bg-white p-4'>
              <img src={exportIcon} alt='export' className='size-5' />
              export
            </button>
            <button onClick={handleGrid} className='button-container bg-white p-4'>
              <img src={gridIcon} alt='icon' className='size-5' />
              {grid ? 'Grid View' : 'List View'}
            </button>
          </div>

        </div>
        {grid ? (

          <div className='grid grid-cols-3 gap-4'>
            {allServiceRequestData.map((plot, index) => (
              <CommonCard key={index} icon={detailIcon} data={plot} />
            ))}
          </div>

        ) : (
          <div className='overflow-scroll'>
            {renderTable()}
          </div>

        )}
      </div>
    </Layout>
  )
}

export default ServiceRequestsPage;