import { Header } from "../header";
import { Main } from "../main/main";
import { Outlet } from "react-router-dom"
import "./layout.style.css"



export function Layout(){
    return(
        <div className="layout">
            <Header/>
            <Main><Outlet/></Main>
        </div>
    )
}