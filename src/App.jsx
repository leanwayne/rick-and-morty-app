import Main from './components/Main'
import CharactersProvider from './context/charactersContext'


function App() {
    return (
        <>
            <CharactersProvider>
                <Main/>
            </CharactersProvider>
        </>
    )
}

export default App
