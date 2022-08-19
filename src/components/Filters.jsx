import React, {useState} from 'react'
import TextInput from './TextInput'

const Filters = ({filterState}) => {
    const [search, setSearch] = filterState
    const [value, setValue] = useState('')

    return (
        <div className='flex h-[54px] w-screen items-center justify-center bg-[#141414] '>
            <div div className='flex w-full rounded bg-[#141414]'>
                <TextInput label='Name' onChange={(e) => setValue(e.target.value)} />
                <button
                    type='button'
                    onClick={() => setSearch(value)}
                    className='m-2 rounded bg-black px-4 font-semibold py-2 text-white text-lg hover:bg-[#ff0000]'>
                    Search
                </button>

            </div>
        </div>
    )
}

export default Filters
