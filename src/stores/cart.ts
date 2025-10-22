import { defineStore } from "pinia";
import type { Item, Product } from "../types";

export const useCartStore= defineStore('cart', {
    state:()=> ({
        items:[] as Item[]
    }),
    getters:{
        totalItems: (state)=> state.items.reduce((sum, item)=> sum+ item.quantity, 0),
        totalPrice: (state)=> state.items.reduce((sum, item)=> sum+ item.quantity * item.price, 0)
    },
    actions:{
        addToCart(product: Product){
            const existing= this.items.find(i=> i.id===product.id)
            if(existing){
                existing.quantity++
            }else{
                this.items.push({...product, quantity:1})
            }
        },
        removeFromCart(productId: string){
            this.items= this.items.filter(i=> i.id !== productId)
        },
        clearCart(){
            this.items=[]
        }
    }

})