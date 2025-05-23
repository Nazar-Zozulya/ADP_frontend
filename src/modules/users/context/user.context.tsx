import {
	createContext,
	ReactNode,
	useContext,
	useState,
} from "react";
import { User } from "../types";

interface IUserContext{
    user: User | {}
    token: string | ''
    isAuthenticated: ()=> boolean
    setUser: (value: User)=> void
    setToken: (value: string) => void
}

const initialValue :IUserContext = {
    user: {},
    token: '',
    isAuthenticated: ()=> false,
    setUser: (value: User)=> {},
    setToken: (value: string) => {},
}

const UserContext = createContext<IUserContext>(initialValue)

export function useUserContext(){ 
    return useContext(UserContext)
}

interface IUserContextProviderProps{
    children?: ReactNode
}

export function UserContextProvider(props: IUserContextProviderProps){
    const [user, setUser] = useState<User | {}>({})
    const [token, setToken] = useState<string>('')

    return <UserContext.Provider
        value={{
            user: user,
            token: token,
            isAuthenticated: () => false,
            setUser: setUser,
            setToken: setToken,
        }}>

        {props.children}
    </UserContext.Provider> 
}