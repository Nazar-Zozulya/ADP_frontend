import { User } from "../../types"
import "./card.style.css"

export function SmallUserCard(props: Omit<User, 'description' | 'password' | 'repeatPassword' | 'email'>){

    return(
        <div className="small-user-card">
            <img className="s-u-c-img" src={props.image} alt="" />
            <div className="s-u-c-text-div">
                <p className="s-u-c-name">{props.name} {props.surname}</p>
                <p className="s-u-c-date-to-reg">{props.dateToRegister}</p>
            </div>
        </div>
    )
}