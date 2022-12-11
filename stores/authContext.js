import { createContext, useEffect, useState } from "react"
import netlifyIdentity from "netlify-identity-widget"


const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    authReady: false
});

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // listen to both functions
    useEffect(() => {
        netlifyIdentity.on('login', (user) => {
            setUser(user)
            netlifyIdentity.close()
            console.log("login event")
        })

        netlifyIdentity.on('logout', (user) => {
            setUser(null)
            console.log("logout event")

        })

        // init netlify identity connection
        netlifyIdentity.init()

        return () => {
            netlifyIdentity.off('login')
            netlifyIdentity.off('logout')
        }
        
    }, [])

  

    const login = () => {
        netlifyIdentity.open()
    }

    const logout = () => {
        netlifyIdentity.logout()
    }

    const context = { user, login, logout }

    return (
        <AuthContext.Provider value={context}> 
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext