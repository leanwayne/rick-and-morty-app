import React, { useEffect, useState, useContext} from 'react'
import CharacterCard from './cards/CharacterCard'
import EpisodeCard from './cards/EpisodeCard'
import LocationCard from './cards/LocationCard'
import ComparisonCard from './cards/ComparisonCard'
import {getCharacters, getLocations, getEpisodes} from '../api'
import Paginator from './Paginator'
import { charactersContext } from '../context/charactersContext'
import portal from '../assets/portal-rick-and-morty.gif'

const CardsContainer = ({option, search}) => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const {compareCharacters, newCharacters, compare, isSubmit } = useContext(charactersContext)

    useEffect(() => {
        const fetch = async () => {
            setLoading(true);
            let data = {};
            try {
                if(option === 'compare'){
                    data = {
                        info:{
                            pages:1,
                            next:null,
                            prev:null
                        },
                        results:compareCharacters
                    }
                }
                if (option === 'Characters') {                   
                    data = await getCharacters({page, search})
                    data.results = data.results.concat(newCharacters)
                };
                if (option === 'Locations') data = await getLocations({page, search});
                if (option === 'Episodes') data = await getEpisodes({page, search});
                setData(data);
                setLoading(false);
                setError('');
            } catch(error) {
                setError(error.response.data.error)
                setLoading(false);
            }
        }
        fetch();
    }, [page, search, option, compare, isSubmit])

    if (loading) {
        return (
            <div className='flex justify-center my-20'>
                <div className='spinner-border text-white' role='status'>
                    <img src={portal} alt="" height={200} width={200} />
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className='flex justify-center my-20'>
                <div className='text-white text-lg font-semibold'>
                    {error}
                </div>
            </div>
        )
    }

    return (
        <div className='m-5'>
            <div className='grid grid-cols-12 my-20 justify-items-center' >
                {data.results && data.results.map((data, index) => (
                    <div key={index} className='col-span-12 2xl:col-span-4 xl:col-span-6'>
                        {option === 'compare' && <ComparisonCard data={data} key={index} />}
                        {option === 'Characters' && <CharacterCard data={data} key={index} />}
                        {option === 'Locations' && <LocationCard data={data} key={index} />}
                        {option === 'Episodes' && <EpisodeCard data={data} key={index} />}
                    </div>
                ))}
            </div>
            <Paginator totalPages={data.info.pages} page={page} setPage={setPage} />
        </div>
    )
}

export default CardsContainer
