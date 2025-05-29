import { type ReactNode } from 'react'


interface props {

  header: {
    id: number;
     cell?: (row: any) => ReactNode | Promise<ReactNode>;
    title: string;
    selector?: string;
  }[];
  data: any;

}

const CommonTable = ({ data, header }: props) => {
  return (
    <div className="mt-4 bg-white shadow-xs border-1 rounded-lg">
      <div className="relative overflow-x-auto m-4">
        <table className="w-full text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 overflow-hidden table-auto">
          {/* Table Head */}
          <thead className="top-0  bg-gray-100 w-auto">
            <tr>
              {header.map((item, index) => (
                <th
                  key={index}
                  // onClick={() => handleSort(item?.selector)}
                  className=" py-4 align-center transition-colors cursor-pointer  px-4 bg-slate-50 hover:bg-slate-100 whitespace-nowrap"
                >
                  <p className="flex items-center gap-2 text-sm font-normal leading-none text-slate-800">
                    {item.title}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4"
                    >

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 9L12 5.25 15.75 9m-7.5 6L12 18.75 15.75 15"
                      ></path>

                    </svg>
                  </p>
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody >
            {data.map((row, idx: number) => (
              <tr key={idx} className="border-b w-auto border-slate-100 hover:bg-gray-100">
                {header.map(({ selector, cell }, idx) => (
                  <td key={idx} className="w-auto py-4 px-4 whitespace-nowrap">
                    {cell ? cell(row) : selector ? row[selector] : ''}
                  </td>

                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );


}

export default CommonTable