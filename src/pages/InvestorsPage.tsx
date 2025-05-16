import Header from '@/components/Header';
import { useState } from 'react';

import CommonTable from '@/components/CommonTable';
import Layout from '@/components/Layout';
import CommonCard from '@/components/CommonCard';
import exportIcon from '../assets/exportIcon.png'
import detailIcon from '../assets/icons/detailIcon.png';
import searchIcon from '../assets/icons/search.svg';
import gridIcon from '../assets/icons/gridIcon.png';
import DropDownComponent from '@/components/DropDownComponent';

const investorData = [
  { id: 1, name: 'John Bosco', CRNumber: 478929, fax: 'AK-LP-B-374837', website: 'www.soscowll.com', typeOfInvestor: 'Sole Proprietorship', createdOn: '25/11/2024 11:14', modifiedOn: '25/11/2024 12:13' },
  { id: 2, name: 'John Bosco', CRNumber: 478929, fax: 'AK-LP-B-374837', website: 'www.soscowll.com', typeOfInvestor: 'Sole Proprietorship', createdOn: '25/11/2024 11:14', modifiedOn: '25/11/2024 12:13' },
  { id: 3, name: 'John Bosco', CRNumber: 478929, fax: 'AK-LP-B-374837', website: 'www.soscowll.com', typeOfInvestor: 'Sole Proprietorship', createdOn: '25/11/2024 11:14', modifiedOn: '25/11/2024 12:13' },
  { id: 4, name: 'John Bosco', CRNumber: 478929, fax: 'AK-LP-B-374837', website: 'www.soscowll.com', typeOfInvestor: 'Sole Proprietorship', createdOn: '25/11/2024 11:14', modifiedOn: '25/11/2024 12:13' },
  { id: 5, name: 'John Bosco', CRNumber: 478929, fax: 'AK-LP-B-374837', website: 'www.soscowll.com', typeOfInvestor: 'Sole Proprietorship', createdOn: '25/11/2024 11:14', modifiedOn: '25/11/2024 12:13' },
  { id: 6, name: 'John Bosco', CRNumber: 478929, fax: 'AK-LP-B-374837', website: 'www.soscowll.com', typeOfInvestor: 'Sole Proprietorship', createdOn: '25/11/2024 11:14', modifiedOn: '25/11/2024 12:13' },
  { id: 7, name: 'John Bosco', CRNumber: 478929, fax: 'AK-LP-B-374837', website: 'www.soscowll.com', typeOfInvestor: 'Sole Proprietorship', createdOn: '25/11/2024 11:14', modifiedOn: '25/11/2024 12:13' },
  { id: 8, name: 'John Bosco', CRNumber: 478929, fax: 'AK-LP-B-374837', website: 'www.soscowll.com', typeOfInvestor: 'Sole Proprietorship', createdOn: '25/11/2024 11:14', modifiedOn: '25/11/2024 12:13' },
  { id: 9, name: 'John Bosco', CRNumber: 478929, fax: 'AK-LP-B-374837', website: 'www.soscowll.com', typeOfInvestor: 'Sole Proprietorship', createdOn: '25/11/2024 11:14', modifiedOn: '25/11/2024 12:13' },
  { id: 10, name: 'John Bosco', CRNumber: 478929, fax: 'AK-LP-B-374837', website: 'www.soscowll.com', typeOfInvestor: 'Sole Proprietorship', createdOn: '25/11/2024 11:14', modifiedOn: '25/11/2024 12:13' },
  { id: 11, name: 'John Bosco', CRNumber: 478929, fax: 'AK-LP-B-374837', website: 'www.soscowll.com', typeOfInvestor: 'Sole Proprietorship', createdOn: '25/11/2024 11:14', modifiedOn: '25/11/2024 12:13' },
  { id: 12, name: 'John Bosco', CRNumber: 478929, fax: 'AK-LP-B-374837', website: 'www.soscowll.com', typeOfInvestor: 'Sole Proprietorship', createdOn: '25/11/2024 11:14', modifiedOn: '25/11/2024 12:13' },
];
const statusArray = [
  { id: 1, name: 'Active', value: 'active' },
  { id: 2, name: 'Inactive', value: 'inactive' },
  { id: 3, name: 'Remove From Registry', value: 'removed' }
]
const sortArray = [
  { id: 1, name: 'Newest to Oldest', value: 'old' },
  { id: 2, name: 'Oldest to Newest', value: 'new' },
]
const InvestorsPage = () => {
  const [status, setStatus] = useState<String>('');
  const [sort, setSort] = useState('');
  const [grid, setGrid] = useState<boolean>(false);

  const TableHeader = [
    { id: 1, selector: "name", title: "Investor Name", isLink: true },
    { id: 2, selector: "CRNumber", title: "CR Number" },
    { id: 3, selector: "fax", title: "Fax" },
    { id: 4, selector: "website", title: "Website", isLink: true },
    { id: 5, selector: "typeOfInvestor", title: "Type of Investor" },
    { id: 6, selector: "createdOn", title: "Created On" },
    { id: 7, selector: "modifiedOn", title: "Modified On" },
  ];
  

  const handleGrid = () => {
    setGrid(!grid);
  }
  return (
    <Layout>
      <Header />
      <div className='p-4 sticky'>
        {/* filter Contianer */}
        <div className='h-10 w-full flex justify-between px-4'>
          <div className='flex gap-5'>
            <button className='flex size-10 rounded-sm shadow-lg items-center justify-center'>
              <img src={searchIcon} className='size-6' />
            </button>
            <DropDownComponent value={status} setvalue={setStatus} data={statusArray} title={'Status'} />
            <DropDownComponent value={sort} setValue={setSort} data={sortArray} title={'Sort By'} />
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
            {investorData.map((investor) => (
              <CommonCard key={investor.id} icon={detailIcon} data={investor} />
            ))}
          </div>
        ) : (
          <CommonTable data={investorData} header={TableHeader} />
        )}

      </div>


    </Layout>



  );
};

export default InvestorsPage;


