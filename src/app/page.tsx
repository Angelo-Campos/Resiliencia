'use client'
import Image from "next/image";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Topics } from "./components/topics";
import { Shop } from "./components/shop";
import { zustandApi } from "@/Stores/zustandApi";
import { useEffect } from "react";
import { About } from "./components/about";
import { Members } from "./components/members";

  


export default function Home() { 

  const llamada = zustandApi((s)=>s.llamada)
    
  useEffect(()=>{
     llamada()
  },[])

  return (
    <>
    <Hero/>
    <Topics/>
    <About/>
    <Members/>
    <Shop/>
    
    </>
  );
}
