import React, { useState } from 'react'


const CommonTable: React.FC = (props) => {
    const { data, header } = props;
    const [sortColumn, setSortColumn] = useState<null | string>(null);
    const [sortOrder, setSortOrder] = useState('asc');

    const handleSort = (columnName: string) => {
        if (sortColumn === columnName) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(columnName);
            setSortOrder('asc');
        }
    };

    const sortedData = [...data].sort((a, b) => {
        if (sortColumn) {
            const aValue = a[sortColumn];
            const bValue = b[sortColumn];

            if (typeof aValue === 'string' && typeof bValue === 'string') {
                return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
            } else if (typeof aValue === 'number' && typeof bValue === 'number') {
                return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
            } else {
                return 0;
            }
        }
        return 0;
    });

    return (
    <div className="mt-4 bg-white shadow-xs border border-1 w-auto rounded-lg">
    <div className="relative overflow-auto  m-4">
      <table className="w-full text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 overflow-hidden table-auto">
        {/* Table Head */}
        <thead className="top-0 bg-gray-100">
          <tr>
            {header.map((item) => (
              <th
                key={item.name}
                onClick={() => handleSort(item.name)}
                className=" py-4 transition-colors cursor-pointer bg-slate-50 hover:bg-slate-100"
              >
                <p className="flex items-center  gap-2 text-sm font-normal leading-none text-slate-800">
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
                    {sortOrder === "asc" ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      ></path>
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 9L12 5.25 15.75 9m-7.5 6L12 18.75 15.75 15"
                      ></path>
                    )}
                  </svg>
                </p>
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-b border-slate-100 hover:bg-gray-100">
              {header.map(({ selector, cell }, idx) => (
                <td key={idx} className="px-6 py-4">
                  {cell ? cell(row) : row[selector]}
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