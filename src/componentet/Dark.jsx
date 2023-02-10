import { useState } from "react"
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Dark = () => {
    const [dark, setDark] = useState()

    const handleDark = () => {
        setDark(!dark)
        localStorage.setItem('dark', dark)
    }

    if (localStorage.getItem('dark') === 'true') {

        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }

    return (
        <>
            <span className="text-3xl ml-1.5 mt-1.5 xl:ml-4 xl:mt-4" 
            onClick={handleDark}>
                {localStorage.getItem('dark') === 'true' 
                    ? <FontAwesomeIcon icon={faSun} />
                    : <FontAwesomeIcon icon={faMoon} />}
            </span>
        </>
    )

}
