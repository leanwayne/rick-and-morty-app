import React, { useState, useEffect, useContext} from 'react'
import {getLocationsNames} from '../api/index'
import { charactersContext } from '../context/charactersContext'

const Modal = ({visible, onClose}) => {
    const [data, setData] = useState([])
    const {handleSubmit,formValues,handleChange, formErrors} = useContext(charactersContext)

    useEffect(() => {
        const fetch = async () => {
            let data = {}
            try {
                data = await getLocationsNames()
                setData(data)
            } catch (error) {}
        }
        fetch()
    }, [])

    if(!visible) return null

    const handleOnClose = (e) => {
        if(e.target.id === 'container') onClose()
    }

    return (
        <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>

            <form onSubmit={handleSubmit} action='' className='bg-[#3d3e3f] w-[400px] p-4 rounded-md'>
                <div className='my-4'>
                    <h1 className='text-white font-semibold text-xl'>Create Character</h1>
                </div>
                <div className='mb-4'>
                    <label className='block text-white text-sm font-bold mb-2'>
                        Name:
                    </label>
                    <input name='name' value={formValues.name} onChange={handleChange} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='Name'/>
                    <p className='text-[#ff0000]'>{formErrors.name}</p>
                </div>
                <div className='mb-4'>
                    <label className='block text-white text-sm font-bold mb-2'>
                        Gender:
                    </label>
                    <div className='relative'>
                        <select name='gender'  onChange={handleChange} className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
                            <option> </option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Genderless</option>
                            <option>unknown</option>
                        </select>
                    </div>
                    <p className='text-[#ff0000]'>{formErrors.gender}</p>
                </div>
                <div className='mb-4'>
                    <label className='block text-white text-sm font-bold mb-2'>
                        Location:
                    </label>
                    <div className='relative'>
                        <select name='location'  onChange={handleChange} className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
                            <option> </option>
                            {
                                data &&
                                data.map(location => <option>{location.name}</option> )
                            }
                        </select>
                    </div>
                    <p className='text-[#ff0000]'>{formErrors.location}</p>
                </div>
                <div className='mb-4'>
                    <label className='block text-white text-sm font-bold mb-2'>
                        Photo Url:
                    </label>
                    <input name='image' value={formValues.image} onChange={handleChange} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' type='text' placeholder='Text input'/>
                    <p className='text-[#ff0000]'>{formErrors.image}</p>
                </div>

                <div className='flex items-center justify-between'>
                    <button onClick={handleOnClose} className='m-2 rounded bg-black px-4 font-semibold py-2 text-white text-lg hover:bg-[#ff0000]'>
                        Submit
                    </button>
                </div>
            </form>

        </div>
    )
}

export default Modal