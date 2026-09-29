    'use client'
import axios from "axios";
import { create } from "zustand";

  
    export  interface Book {
      
        id:string 
        title:string 
        author:string
        category:string 
        description:string 
        image_url:string
        price:number

      }

      
     interface Store { 
        array: Book[] | null
        llamada: () => Promise<void>
     }

  export const zustandApi = create<Store>((set)=>({
    array:null,
     llamada: async() => {
        const response = await axios.get('/Api/books.json') 
        set({array:response.data})
     }
  }))