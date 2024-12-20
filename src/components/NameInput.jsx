import { useRef, useState } from "react"
 
export default function NameInput( props ) {
 
    const [error, setError] = useState(false)
 
    const inputElement = useRef(null)
   
    const regExIncludesNumber = /\d/
   
    function changeHandler() {
       
        const value = inputElement.current.value
 
        if (value.length < 2) {
            setError('Name must be two letters or longer.')
        } else if (value.match(regExIncludesNumber)) {
            setError('Name must not contain numbers.')
        } else {
            setError(false)
        }
    }
 
    return (
        <>
            <input ref={inputElement} onChange={changeHandler} {...props}/>
            {error && <p>{error}</p>}
        </>
    )
}