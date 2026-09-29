import { Book } from "@/Stores/zustandApi";
import { create } from "zustand";
  
    interface BookCart extends Book {
        quantity:number
    }
    
     interface Store {
        array: BookCart[] 
        agregar: (book:Book) => void 
        eliminar: (book:BookCart) => void
        aumentar: (book:BookCart) => void
        decrementar: (book:BookCart) => void
        vaciar: () => void
     }

  export const zustandCart = create<Store>((set)=>({
        array: [],
        agregar: (book) => set((state)=>{
            const existe = state.array.find(item => item.id === book.id) 
            if(existe){
                return {
                    array: state.array.map(item => item.id === book.id ? {...item, quantity: item.quantity + 1} : item)
                }
            } else {
                return {
                    array: [...state.array, {...book, quantity:1}]
                }
            }
        }),
        eliminar: (book) => set((state)=>{
            return {
                array: state.array.filter(item => item.id !== book.id)
            }
        }),
        aumentar: (book)=>set((state)=>{
            return {
                array:state.array.map(item => item.id === book.id ? {...item , quantity: item.quantity + 1}:item)
            }
        }),

        decrementar: (book)=>set((state)=>{
             if(book.quantity <= 1){
                   return {
                    array:state.array.filter(item => item.id !== book.id)
                   }
             } else {
                return {
                array:state.array.map(item => item.id === book.id ? {...item, quantity:item.quantity - 1} : item)
            }
             }
        }),

        vaciar: ()=> set({array:[]})
  }))