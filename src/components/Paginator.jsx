import React from 'react'

const Paginator = ({totalPages, page, setPage}) => {

    const handlePrevious = () => {
        if (page > 1) setPage(page - 1)
    }
    const handleNext = () => {
        if (page < totalPages) setPage(page + 1)
    }

    return (
        <div className='flex items-center space-x-8 justify-center'>
            <button onClick={handlePrevious} className='px-4 py-2  text-2xl font-bold text-white bg-black rounded-full transition-colors hover:bg-[#ff0000]'>
                {'<'}
            </button>
            <button onClick={handleNext} className='px-4 py-2  text-2xl font-bold text-white bg-black rounded-full transition-colors hover:bg-[#ff0000]'>
                {'>'}
            </button>
        </div>
    )
}

export default Paginator
