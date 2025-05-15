import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import backgroundImage from '../assets/cardBackground.svg'
import profileImage from '../assets/prifileImage.svg'

const ProfileCard = () => {
  return (
    <Card className="w-[320px] h-[400px] p-0 rounded-2xl flex flex-col items-center justify-center text-center">
  <div className="flex flex-col items-center justify-center p-0">
    <img src={backgroundImage} alt="profile" className="w-full h-auto -mt-5" />
    <div className="absolute -mt-40 flex items-center justify-center size-25 rounded-full border bg-white">
      <img src={profileImage} alt="profile" className="w-24 h-24 rounded-full" />
    </div>
    {/* Profile Content */}
    <div className="mt-20 w-full">
    <p className="mt-4 text-lg font-semibold">Mushthofa Ahmad Kamal</p>

    <div className="bg-[#E6E4DC80] w-full p-2 text-sm">
      Finance Specialist
    </div>

    
      <p className="font-extralight text-[#918F90]" >Department</p>
      <p>Finance Department</p>
  

    <button className="bg-[#83764F] w-4/5 p-2 mt-4 rounded-lg text-white">
      <span>View Profile</span>
    </button>
  </div>
  </div>
</Card>

  )
}

export default ProfileCard;