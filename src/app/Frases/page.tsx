  'use client'
import { useEffect, useState } from "react";

 

   
 
  export default function Frases(){ 
 
     const [frase, setFrase] = useState<string | null>(null)

     const frasesResiliencia = [
  "No me juzgues por mis éxitos, júzgame por cuántas veces me caí y me volví a levantar. — Nelson Mandela",
  "El mundo nos rompe a todos, pero después, muchos son más fuertes en los lugares rotos. — Ernest Hemingway",
  "La resiliencia es la capacidad de conectarse con la vida, incluso después de haber tocado el fondo.",
  "No puedes controlar todas las cosas que te suceden, pero puedes decidir no dejarte reducir por ellas. — Maya Angelou",
  "La palma que se dobla con el viento sobrevive a la tormenta que arranca al roble.",
  "En medio del invierno, aprendí por fin que había en mí un verano invencible. — Albert Camus",
  "Las dificultades preparan a personas comunes para destinos extraordinarios. — C.S. Lewis",
  "No importa qué tan lento vayas, siempre y cuando no te detengas. — Confucio",
  "Kintsugi: el arte de curar lo roto con oro, recordando que las cicatrices forman parte de la historia y aumentan la belleza.",
  "El fracaso es simplemente la oportunidad de comenzar de nuevo, esta vez de forma más inteligente. — Henry Ford",
  "Aunque nadie puede volver atrás y hacer un nuevo comienzo, cualquiera puede comenzar a partir de ahora y hacer un nuevo final.",
  "La resiliencia no es la ausencia de dolor, sino la presencia de la capacidad para transformarlo."
];  

        const seleccionarFrase = ()=>{
              const Azar = Math.floor(Math.random() * frasesResiliencia.length) 
              return frasesResiliencia[Azar]
        }
  
         useEffect(()=>{
             setFrase(seleccionarFrase())
         },[])


    return( 
        <section data-aos="fade-in" className="w-full h-auto">
            <div className="container-section flex items-center justify-center h-[calc(100vh-100px)] w-full">
                <h1 className="text-5xl font-bold">{frase}</h1>
            </div>
        </section>
    )
  }