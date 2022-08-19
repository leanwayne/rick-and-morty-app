import React, {useEffect, useState} from 'react'
import {randomEp} from '../../api'

const LocationCard = ({data}) => {
    const [episode, setEpisode] = useState(null)

    useEffect(() => {
        const fetch = async () => {
            const episode = await randomEp(data.episode)
            setEpisode(episode)
        }
        fetch();
    }, [data])

    return (
        <div className='flex flex-col md:flex-row overflow-hidden bg-gray-700 rounded-xl m-2 my-2 md:h-[220px] w-[20rem] md:w-[600px] col-span-4 2xl:col-span-4'>
            <div className='p-5'>
                <h1 className='text-white font-semibold text-2xl'>{data.name}</h1>
                <div className='flex items-center'>
                    <p className='text-white font-semibold'>{data.type}</p>
                </div>
                <h1 className='text-gray-400 font-semibold flex'>
                    Dimension:<p className='text-white font-normal pl-1'>{data.dimension}</p>
                </h1>

                <h1 className='text-gray-400 font-semibold flex'>Number of residents:</h1>
                <p className='text-white'>{data.residents && data.residents.length}</p>

                <h1 className='text-gray-400 font-semibold flex'>Created:</h1>
                <p className='text-white'>{data.created}</p>
            </div>
        </div>
    )
}

export default LocationCard