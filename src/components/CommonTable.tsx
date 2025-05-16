import { ArrowUpRight } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';
// import { commonTableProps } from '../common/type/types';

const CommonTable: React.FC = (props) => {
    const { data, header } = props;

    return (
        <div className="m-4 p-4 bg-white shadow-xs overflow-auto w-full">
  <table className="w-full bg-white dark:bg-gray-800 rounded-lg">
                <thead className="top-0 bg-gray-100">
                    <tr className="p-10">
                        {header.map((item) => (
                            //  border-b border-slate-300
                            <th
                                className="p-4 w-auto text-nowrap  transition-colors cursor-pointer bg-slate-50 hover:bg-slate-100">
                                <p
                                    className="flex items-center justify-between gap-2 text-sm font-normal leading-none text-slate-800">
                                    {item.title}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                        stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                                    </svg>
                                </p>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.id} className="border-b border-slate-100 hover:bg-gray-100">
                            {header.map(({ selector, isLink }, idx) => (
                                <td key={idx} className="w-auto text-nowrap px-4 py-3 text-gray-600">
                                    {isLink ? (
                                        <Link
                                            to={row[selector]}
                                            className="flex items-center text-[#83764F] underline underline-offset-2 decoration-[#83764F]"
                                         
                                        >
                                            {row[selector]} <ArrowUpRight className="size-[16px]" />
                                        </Link>
                                    ) : (
                                        row[selector]
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default CommonTable