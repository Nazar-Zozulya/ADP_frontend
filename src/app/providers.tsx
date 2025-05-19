import { ReactNode } from "react";
import { UserContextProvider } from "../modules/users/context";



export function AppProviders({children}: {children: ReactNode}){

    return(
        <UserContextProvider>
            {children}
        </UserContextProvider>
    )
}