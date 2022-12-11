import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import AuthContext from "../stores/authContext"
import { Button } from "@nextui-org/react";

export default function Navbar() {

  const { user, login, logout, authReady } = useContext(AuthContext)
  console.log(user)

  return (
    <div className="container">
      <nav>
        <Image src="/rupee.png" width={50} height={48} />
        <h1>Gaming Vibes</h1>
        {authReady && (
           <ul>
              <li><Link href="/"><a>Home</a></Link></li>
              <li><Link href="/guides"><a>Guides</a></Link></li>
              {/* if user loged out then show login btn */}
              { !user && 
              <li><Button onClick={login} auto flat color='primary' >Login / Signup</Button></li>
              }
    
              {/* if user loged in then show logout btn */}
              { user && 
                <li> <Button onClick={logout} auto flat color='primary' >Logout</Button> </li> 
              }
              { 
              user && <p className="text-xs"> { `email: ` + user.email } </p> 
              }
          </ul>
        )}
        
      </nav>
      <div className="banner">
        <Image src="/banner.png" width={966} height={276} />
      </div>
    </div>
  )
}
