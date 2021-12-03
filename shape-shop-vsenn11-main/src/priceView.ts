import { Model } from "./model";

export class priceView{
    model : Model;

    constructor(model : Model){
        this.model = model;
    }

    getModel() : Model{
        return this.model;
    }

    getView() : String{
        let total : number = 0.0;

        for (let i = 0; i < this.getModel().getCart().length; i++) {
            total += this.getModel().getCart()[i].getPrice() * this.getModel().getCartQuant()[i];
        }

        return "Shopping Cart Total: "+ total;
    }
}