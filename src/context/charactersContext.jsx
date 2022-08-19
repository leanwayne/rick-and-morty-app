import React, {useState, useEffect} from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const charactersContext = React.createContext()

const CharactersProvider = ({children}) => {
    const [newCharacters, setNewCharacters] = useState([])
    const [compare, setCompare] = useState(false)
    const [compareCharacters, setCompareCharacters] = useState([])
    const [showModal, setShowModal] = useState(false)

    const initialValues = { name: '', gender: '', location: '',image:'', id:(Math.random() + 1).toString(36).substring(7) }
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
        //console.log(formValues)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            const characters = newCharacters
            characters.push(formValues)
            setNewCharacters(characters)
            setFormValues(initialValues)
            setIsSubmit(false)
            setShowModal(false)
            toast.success('Character Created!!!',{
                position: 'top-left',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {}
        if (!values.name) {
          errors.name = 'name is required!'
        } else if (values.name.length > 10) {
            errors.name = 'name cannot exceed more than 10 characters'
        }
        if (!values.gender) {
          errors.gender = 'gender is required!'
        }
        if (!values.location) {
          errors.location = 'location is required'
        }
        if (!values.image) {
            errors.image = 'image is required'
        }
        return errors
    };

    const comparisonData = (arr, self, compare) => {
        return {name:arr[compare].name, value:(compareCharacters[self].episode.filter(e => arr[compare].episode.includes(e)).length)}
    }
    
    useEffect(() => {
        if(compareCharacters.length === 3){
            compareCharacters[0].comparison = {
                character1:comparisonData(compareCharacters,0,1),
                character2:comparisonData(compareCharacters,0,2)
            }
            compareCharacters[1].comparison = {
                character1:comparisonData(compareCharacters,1,0),
                character2:comparisonData(compareCharacters,1,2)
            }
            compareCharacters[2].comparison = {
                character1:comparisonData(compareCharacters,2,0),
                character2:comparisonData(compareCharacters,2,1)
            }
        }
    }, [compare,compareCharacters])
    
    const handleCompareState = () => {
        setCompare(true)
    }

    return (
        <charactersContext.Provider value={{
            compareCharacters, 
            setCompareCharacters, 
            newCharacters, 
            setNewCharacters, 
            compare, 
            handleCompareState, 
            formValues,
            handleChange,
            handleSubmit,
            formErrors,
            isSubmit,
            showModal, 
            setShowModal
        }}>
            {children}
        </charactersContext.Provider>
    )
}

export default CharactersProvider