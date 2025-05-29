import homeIcon from '@/assets/icons/homeIcon.png';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Link } from 'react-router-dom';
import seperatorIcon from '@/assets/icons/sepatorIcon.png'

const SubHeader = () => {
  return (
    <div className=' border-b-1 h-25 px-10 p-3'>
      <h1 className='text-[28px]'>Service Requests</h1>
      <div className='flex items-center gap-3'>
        <img src={homeIcon} className='size-[20px]' alt='home' />

        <Breadcrumb>
          <BreadcrumbList  className='text-[18px] gap-10'>
            <img src={seperatorIcon} alt='seperator' />
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link to="/components" className='' >Service Requests</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {/* <BreadcrumbSeparator /> */}
            <img src={seperatorIcon} alt='seperator' />
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link to="/components" className='text-[18px]'>Service Requests</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>


    </div>
  )
}

export default SubHeader