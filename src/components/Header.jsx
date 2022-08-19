import React, {useContext, useState} from 'react'
import logo from '../assets/logo.png'
import ricky_morty from '../assets/rick_morty.png'
import Modal from './Modal'
import { charactersContext } from '../context/charactersContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Header = ({optionState}) => {
    const [setOption] = optionState;
    const {compareCharacters, handleCompareState, showModal, setShowModal} = useContext(charactersContext)

    const handleOnClose = () => setShowModal(false)

    const showComparison = () => {
        if(compareCharacters.length === 3){ 
            handleCompareState()
            setOption('compare')
        } else {
            toast.warn('To compare you must select 3 characters',{
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
        <header className={'bg-[#141414]'}>
            <div className='flex items-center space-x-2 md:space-x-10'>
                <img
                    src={logo}
                    width={100}
                    height={100}
                    className='cursor-pointer object-contain'
                />
            </div>
            <div className='flex items-center space-x-4 text-sm font-light'>
                <button className='lg:inline text-white font-medium' onClick={() => setShowModal(true)}>Create</button>
                <button className='lg:inline text-white font-medium' onClick={showComparison}>Compare</button>
                
                <img
                    src={ricky_morty}
                    width={50}
                    height={50}
                />
            <ToastContainer />
            </div>
            <Modal visible={showModal} onClose={handleOnClose}/>
        </header>
    )
}

export default Header