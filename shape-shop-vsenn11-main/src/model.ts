import { Product } from "./products";

export class Model {
    cart : Product[];
    cartQuant: number[];

    constructor(){
        this.cart = [];
        this.cartQuant = [];
    }

    getCart(){
        return this.cart;
    }

    getCartQuant(){
        return this.cartQuant;
    }
    
    addProduct(p : Product){
        this.getCart().push(p);        
    }

    addQuant(q : number){
        this.getCartQuant().push(q);
    }

    removeProduct(index : number){
        this.getCart().splice(index, 1);
        this.getCart().splice(index, 1);
    }

}