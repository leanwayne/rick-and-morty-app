import React, {useState} from 'react'
import Banner from './Banner'
import CardsContainer from './CardsContainer'
import Filters from './Filters';
import Header from './Header';

const Main = () => {
    const [option, setOption] = useState('Characters')
    const [search, setSearch] = useState('')
    return (
        <main>
            <Header optionState={[setOption]}/>
            <Banner optionState={[option, setOption]} />
            <Filters filterState={[search, setSearch]} />
            <CardsContainer option={option} search={search} />
        </main>
    )
}

export default Main
