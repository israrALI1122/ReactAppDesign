import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider =({children})=>{
const[currentUser, setCurrentUser]= useState(JSON.parse(localStorage.getItem("user"))   || null
);

const login =()=>{
    setCurrentUser({id:1, name: "israr ali", profilePic:"https://images.pexels.com/photos/9839723/pexels-photo-9839723.jpeg?cs=srgb&dl=pexels-ye%C5%9Fim-9839723.jpg&fm=jpg&_gl=1*1n24uyh*_ga*NzQyODAxMDI1LjE2NjcwNTg4MDY.*_ga_8JE65Q40S6*MTY2NzA1ODgwNy4xLjEuMTY2NzA1OTQ3Ny4wLjAuMA"})
}

 useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(currentUser))
 },[currentUser])

 return(
    <AuthContext.Provider value={{currentUser ,login }}>{children}</AuthContext.Provider>
 )

}