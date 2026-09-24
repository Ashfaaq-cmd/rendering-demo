"use client"
import { useState } from "react"
import { ServerComponentOne } from "./server-component-one";
export const ClientComponentOne =()=>{
    const [name,setName] = useState("Batman");
    return (
    <div>
    <h1>client Component One</h1>
<ServerComponentOne/>
</div>
    )
}