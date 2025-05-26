

const AccordionWrapper = ({ id, title, content, openAccordion, toggleAccordion }: any) => {
    return (
        <div key={id} className='border-t-1 border-gray-200 dark:border-gray-700'>
            <h2 id={`accordion-heading-${id}`}>
                <button
                    className={`flex items-center justify-between w-full p-5 font-medium 
                        ${openAccordion === id ? 'text-[#862634]' : 'text-gray-500'} dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
                    onClick={() => toggleAccordion(id)}
                    aria-expanded={openAccordion === id}
                    aria-controls={`accordion-body-${id}`}
                >
                    <span className='flex items-center capitalize'>{title}</span>
                    <svg
                        className={`w-3 h-3 shrink-0 ${openAccordion === id ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5 5 1 1 5' />
                    </svg>
                </button>
            </h2>
            {openAccordion === id && (
                <div id={`accordion-body-${id}`} className='p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900'>
                    <div className='p-5'>{content}</div>
                </div>
            )}
        </div>
    );
};

export default AccordionWrapper;
