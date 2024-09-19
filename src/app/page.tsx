"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [user, setUser]= useState(true)
 
 if( user){
  return(
    <div> <h1>Victor</h1>
    <button onClick={() => setUser(false)} >Clique porra</button>
    </div>
    
  )
 }
 else{
  return(
    <div> <h1>Felipe</h1>
     <button onClick={() => setUser(true)} >Clique porra</button>
     </div>
  )
 }

 }

