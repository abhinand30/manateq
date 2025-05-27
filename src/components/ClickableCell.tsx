import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ClickableCell = (row, key) => {
   
    const navigate=useNavigate();
    return (
    <button
        onClick={() => navigate(`${row[key]}`)}
        className="flex items-center text-[#83764F] underline underline-offset-2 decoration-[#83764F]"
    >
        {row[key]}
        <ArrowUpRight className="size-[16px]" />
    </button>
    )
}
 
