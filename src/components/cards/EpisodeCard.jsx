import React, {useEffect, useState} from 'react'
import {randomEp} from '../../api';

const EpisodeCard = ({data}) => {
    const [episode, setEpisode] = useState(null)
    const [moreInfo, setMoreInfo] = useState(false)

    useEffect(() => {
        const fetch = async () => {
            const episode = await randomEp(data.episode)
            setEpisode(episode)
        }
        fetch();
    }, [data])

    const handleInfo = () => {
        setMoreInfo(true)
    }

    return (
        <div className='flex flex-col md:flex-row overflow-hidden bg-gray-700 rounded-xl m-2 my-2 md:h-[220px] w-[20rem] md:w-[600px] col-span-4 2xl:col-span-4'>
            <div className='p-5'>
                <h1 className='text-white font-semibold text-2xl'>{data.name}</h1>

                <h1 className='text-gray-400 font-semibold flex'>
                    Emission date:<p className='text-white font-normal pl-1'>{data.air_date}</p>
                </h1>

                <h1 className='text-gray-400 font-semibold flex'>Episode Code:</h1>
                <p className='text-white'>{data.episode}</p>

                {
                    !moreInfo && 
                    <button className='text-[#ff9500] font-semibold text-2xl' onClick={handleInfo}>+ info</button>
                }

                {
                    moreInfo &&
                    <>
                        <h1 className='text-gray-400 font-semibold flex '>Number of characters in this episode:</h1>
                        <p className='text-white'>{data.characters && data.characters.length}</p>
                    </>
                }
            </div>
        </div>
    )
}

export default EpisodeCard