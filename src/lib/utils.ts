import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getFirstLetters=(str:string)=>{
  
let acronym = str.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')
return acronym
}

export const returnSelectTitle=(data:{name:string,value:string}[],value:string)=>{
  const findSelectedItem=data.find((item:any)=>item.value===value);
  return findSelectedItem?.name;
}