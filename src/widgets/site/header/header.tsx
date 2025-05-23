import { useEffect } from "react"
import { useUserContext } from "../../../modules/users/context"
import "./header.style.css"
import { Link } from 'react-router-dom'


export function Header(){
    const { isAuthenticated, user } = useUserContext()

    useEffect(()=>{
        if (user === null) return
    }, [])

    return(
        <div className="header">
            <Link to={'/'} className="logo">АОП</Link>

            <div className="othersNavigation">
                <Link to={'/courses'}>Курсы</Link>
                {
                isAuthenticated() ?
                    <Link to={'/profile'}>1</Link> :
                    <Link to={'/login'}>AUTH</Link>
                }
            </div>
        </div>
    )
}