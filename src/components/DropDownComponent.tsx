import { ChevronDown } from 'lucide-react'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"


    const DropDownComponent = (props) => {
        const { value, setValue, data, title } = props
        return (
          <DropdownMenu >
            <DropdownMenuTrigger className="flex h-10 shadow-sm p-2 px-5 rounded-sm  items-center text-[#918F90]">
              {value ? value : title} <ChevronDown size={20} className="text-gray-500" />
            </DropdownMenuTrigger>
      
            <DropdownMenuContent className="w-56">
              {data.map((select, index) => (
                <DropdownMenuCheckboxItem
                  textValue={select.value}
                  onCheckedChange={() => setValue(select.value)}
                  key={index}
                >
                  {select.name}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )
      }


export default DropDownComponent