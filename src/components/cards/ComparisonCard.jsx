import React, {useEffect, useState, useContext} from 'react'
import { charactersContext } from '../../context/charactersContext'

const ComparisonCard = ({data}) => {
    const [episode, setEpisode] = useState(null)
    const {compareCharacters, setCompareCharacters} = useContext(charactersContext)

    const status = {
        'Alive': 'bg-green-600',
        'Dead': 'bg-red-600',
        'unknown': 'bg-gray-400',
    }

    
    return (
        <div className='flex flex-col md:flex-row overflow-hidden bg-gray-700 rounded-xl m-2 my-2 md:h-[245px] w-[20rem] md:w-[600px] col-span-4 2xl:col-span-4'>
            <div className='w-[20rem] h-[245px] sm:w-fit flex flex-col'>
                <img src={data.image} alt='character' className='w-full h-full m-0 object-cover object-center'/>         
            </div>
            <div className='px-5 pb-5 pt-8 sm:pt-5'>
                <h1 className='text-white font-semibold text-2xl'>{data.name}</h1>
                <div className='flex items-center'>
                    <p className={`h-3 w-3 ${status[data.status || 'unknown']} rounded-full mr-2`}></p>
                    <p className='text-white font-semibold'>{`${data.status || 'unknown'} - ${data.species || 'unknown'}`}</p>
                </div>
                <h1 className='text-gray-400 font-semibold flex'>
                    Gender:<p className='text-white font-normal pl-1'>{data.gender}</p>
                </h1>
                
                <h1 className='text-gray-400 font-semibold flex'>Last known location:</h1>
                <p className='text-white'>{data.location?.name}</p>
                <h1 className='text-gray-400 font-semibold flex'>Episodes shared with:</h1>
                <p className='text-white font-normal flex'>
                    {data.comparison?.character1.name}:<p className='text-white font-normal pl-1'>{data.comparison?.character1.value}</p>
                </p>
                <p className='text-white font-normal flex'>
                    {data.comparison?.character2.name}:<p className='text-white font-normal pl-1'>{data.comparison?.character2.value}</p>
                </p>
            </div>
        </div>
    )
}

export default ComparisonCard