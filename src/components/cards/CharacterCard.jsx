import React, {useEffect, useState, useContext} from 'react'
import {randomEp} from '../../api';
import { charactersContext } from '../../context/charactersContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CharacterCard = ({data}) => {
    const [episode, setEpisode] = useState(null)
    const {compareCharacters, setCompareCharacters} = useContext(charactersContext)

    useEffect(() => {
        const fetch = async () => {
            const episode = await randomEp(data.episode)
            setEpisode(episode)
        }
        fetch();
    }, [data])

    const status = {
        'Alive': 'bg-green-600',
        'Dead': 'bg-red-600',
        'unknown': 'bg-gray-400',
    }

    const handleSelection = () => {
        if (compareCharacters.some(character => character.id === data.id)) {
            setCompareCharacters(compareCharacters.filter(character => character.id !== data.id));
            return;
        }
        if (compareCharacters.length < 3) {
            setCompareCharacters([...compareCharacters, data]);
        } else {
            toast.warn('You already have 3 characters selected!',{
                position: 'top-left',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <div className='flex flex-col md:flex-row overflow-hidden bg-gray-700 rounded-xl m-2 my-2 md:h-[245px] w-[20rem] md:w-[600px] col-span-4 2xl:col-span-4'>
            <div className='w-[20rem] h-[217px] sm:w-fit flex flex-col'>
                <img src={data.image} alt='character' className='w-full h-full m-0 object-cover object-center'/>
                <button 
                    className={`w-[20rem] h-10 ${compareCharacters.some(character => character.id === data.id) ? 'bg-[#ff0000]' : 'bg-black'} text-white text-lg transition-colors hover:bg-[#ff0000]`}
                    onClick={handleSelection}
                    >   
                        {compareCharacters.some(character => character.id === data.id) ? 'character selected' : 'select character'}
                    </button>           
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
                <p className='text-white'>{data.location?.name || data.location}</p>

                <h1 className='text-gray-400 font-semibold flex'>Seen in episode:</h1>
                <p className='text-white'>{episode && episode.name}</p>
                <ToastContainer />
            </div>
        </div>
    )
}

export default CharacterCard
