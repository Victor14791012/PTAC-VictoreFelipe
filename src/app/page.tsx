"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";


export default function Home() {
 return( 
 <div> <h1>Faça o Login.</h1>

  <Link href="/login">
          <p className={styles.fale_conosco}> Clique aqui para Login</p>
        </Link>
 

  </div>)
  

    
 }

 

