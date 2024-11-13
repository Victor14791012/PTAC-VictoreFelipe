'use client'
import styles from "../page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Logado() {
 return( 
 <div> <h1>Logado.</h1>

<h3> que loga de novo</h3>
  <Link href="/">
          <p className={styles.fale_conosco}> Clique aqui </p>
        </Link> 
  </div>)
    
 }