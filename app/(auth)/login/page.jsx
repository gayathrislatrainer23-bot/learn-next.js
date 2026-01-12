'use client'
import Image  from "next/image"
import styles from './login.module.css'
import { useState } from "react"



const Login = ()=>{
    const [users,setUsers]= useState(null)
    const handleLogin =async ()=>{
console.log('click')
      const res = await fetch("http://localhost:3001/users")
    const data = await res.json()
    //   console.log("Users:", data)
      setUsers(data)
      console.log(user)
    }
    return(
        <div className={styles.login}>
      <button  style={{color:'red'}} onClick={handleLogin}>Login</button>
      {/* <Image src={'/next.svg'} width={100} height={100} alt=""/> */}
      {
        users && (
            <>
            <ul>
            {
                users.map((user,index )=>(
                <li key={index}>{user.name}</li>
                )
            )
            }
           
            </ul>
            </>
    )
      }
        </div>
    )
}

export default Login