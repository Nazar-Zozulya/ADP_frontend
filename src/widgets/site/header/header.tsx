import "./header.style.css"
import { Link } from 'react-router-dom'


export function Header(){
    return(
        <div className="header">
            <Link to={'/'} className="logo">АОП</Link>

            <div className="othersNavigation">
                <Link to={'/courses'}>Курсы</Link>
                <Link to={'/profile'}>User</Link>
            </div>
        </div>
    )
}