
import Header from '@/components/Header'

import exportIcon from '@/assets/exportIcon.png'
import ProfileCard from './ProfileCard';
import chatTextIcon from '@/assets/icons/ChatText.png';
import loaderIcon from '@/assets/icons/loading.png';
import chatIcon from '@/assets/icons/Chat.png'
import Cards from './Cards';
import { BarCharts } from './BarCharts';
import CarouselComponent from "./Carousel";
import SLAGragh from './SLAGrapgh';
import Layout from '@/components/Layout';

const plotRequestsArray = [
  { id: 1, title: 'block plot Requests', icon: chatTextIcon, bgcolor: '#8F3985' },
  { id: 2, title: 'Unblock Plot requests', icon: loaderIcon, bgcolor: '#F45D01' },
  { id: 3, title: 'Investor Blacklist requests', icon: chatIcon, bgcolor: '#4C9F70' },
];

const RecentRequestArray = [
  { id: 1009, RequestType: 'Agreement Renewal', date: '14/12/2024', status: 'Pending Finance Director', investor: 'SOSCO WLL', contactPerson: 'Test Name', agreement: 'TC-14-2201', plot: '7-service-Hub' },
  { id: 1010, RequestType: 'block plot Requests', date: '14/12/2024', status: 'Completed Finance Director', investor: 'LL', contactPerson: 'linu', agreement: 'TC-18-2000', plot: 'ggdh' },
  { id: 1011, RequestType: 'block plot Requests', date: '14/12/2024', status: 'Pending Finance Director', investor: 'SOSCO WLL', contactPerson: 'Test Name', agreement: 'TC-18-2067', plot: 'uundh' },
];
const DashboardPage = () => {
  return (
    <Layout>
        <Header />
          <div className="w-full bg-[#F8F8F8] ">
      {/* Dashborad Heading */}
      <div className="flex flex-col sm:flex-col lg:flex-row justify-between p-5 border-b px-10">

        <h4 className='text-2xl'>My Dashboard</h4>
        <button className='flex p-2 gap-2 items-center bg-white shadow-sm rounded-[16px] h-[40px] w-[107px]'>
          <img src={exportIcon} alt='export' className="size-[20px]" />
          Export
        </button>
      </div>

      {/*Row-1 */}
      <div className="m-[40px] ">

        <div className='flex flex-col sm:flex-col lg:flex-row max-h-[450px] h-auto gap-10 mb-12'>
          <ProfileCard />
          <div className={"mb-50"}>
            {plotRequestsArray.map((plotRequest) => (
              <Cards key={plotRequest.id} plotRequest={plotRequest} />
            ))}
          </div>

          <CarouselComponent data={RecentRequestArray} />
        </div>
        {/* Row-2 */}
        <div className="mb-20">
          <BarCharts />
        </div>

        {/* Row-3 */}
        <div >
          <SLAGragh />
        </div>


      </div>
    </div>
    </Layout>
  );
};

export default DashboardPage;



