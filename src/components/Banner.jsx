import React from 'react'
import banner_img from '../assets/banner_img.jpg'

const Banner = ({optionState}) => {
    const [option, setOption] = optionState;
    const options = ['Characters', 'Locations', 'Episodes']

    return (
        <section className='flex justify-center items-center flex-col text-center relative h-[28rem] bg-no-repeat bg-cover ' style={{backgroundImage: `url(${banner_img})`}}>
            <h1 className='text-white my-10 text-2xl md:text-4xl xl:text-8xl font-medium transition-all'>What are we looking for?</h1>
            <div className='space-x-4'>
                {options.map(o => (
                    <button
                        key={o}
                        style={{backgroundColor: option === o ? '#F00' : ''}}
                        className={`bannerButton`}
                        onClick={() => setOption(o)}>
                        {o}
                    </button>
                ))}
            </div>
        </section>
    )
}

export default Banner
