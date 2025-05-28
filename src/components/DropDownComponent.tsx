import { ChevronDown } from 'lucide-react';

import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { returnSelectTitle } from '@/lib/utils';

interface dropdownProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  data: { name: string, value: string }[],
  title?: string;
  notShow?: boolean;
}
const DropDownComponent: React.FC<dropdownProps> = (props) => {
  const { value, setValue, data, title, notShow } = props;
  return (
    <DropdownMenu >
      <DropdownMenuTrigger className="flex bg-white h-10 p-2 px-5 rounded-sm items-center text-[#918F90]">
        {value && !notShow ? returnSelectTitle(data, value) : title}
        <ChevronDown size={20} className="text-gray-500" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        {data.map((select, index) => (
          <DropdownMenuCheckboxItem textValue={select.value} onCheckedChange={() => setValue(select.value)} key={index}>
            {select.name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


export default DropDownComponent