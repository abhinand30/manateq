import { ArrowUpRight } from "lucide-react";

import React from "react";
import { Link } from "react-router-dom";

interface cellProps{
    row:any;
    field:any;
    value?:string;
}
export const ClickableCell:React.FC<cellProps> = (props) => {
    const { row, field,value }=props;
  // const navigate = useNavigate();
console.log(value)
  return (
    <Link
    to={row[field]} state={{value:value}}
      // onClick={() => navigate(`${row[field]}`)}
      className="flex items-center text-[#83764F] underline underline-offset-2 decoration-[#83764F]"
    >
      {row[field]}
      <ArrowUpRight className="size-[16px]" />
    </Link>
  );
};

