import React from 'react'

const TextInput = ({label, ...props}) => {

    return (
        <>
            <input className='w-full border-none bg-transparent px-4 py-1 text-white text-xl outline-none focus:outline-none' type="search" placeholder={label} {...props} />
        </>
    )
}

export default TextInput
