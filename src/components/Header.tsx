import accessibilityIcon  from '../assets/icons/accessibility.svg';
import notificationIcon from '../assets/icons/notification.svg';
import searchIcon from '../assets/icons/search.svg';

const Header = () => {
    const buttonArray=[
        {id:1,name:'accessbility',src:'',icon:accessibilityIcon},
        {id:3,name:'notification',src:'',icon:notificationIcon},
    ]
    return (
        <div className='flex justify-between items-center p-5 w-full gap-10 border-b-1'>
            <div>
                <span>Hello,</span>
                <h6>Mushthofa Ahmad Kamal</h6>
            </div>
            <div className='flex bg-[#ffffff] gap-4 w-200 shadow-sm p-3 rounded-xl'>
                <img src={searchIcon}/>
                <input
                    className="w-100"
                    placeholder="Search for plots, application etc..."
                    type="text"
                    name="search"
                />
            </div>
            <div className='flex gap-2' >
                {buttonArray.map((button)=>(
                    <button key={button.id} className='shadow-sm p-2 bg-white rounded-lg'>
                        <img src={button.icon}/>
                    </button>
                ))}
            </div>


        </div>
    )
}

export default Header