import { Model } from "./model";

export class cartView{
    model : Model;

    constructor(model : Model){
        this.model = model;
    }

    getModel() : Model{
        return this.model;
    }

    getView() : String{
        let cartString : String = "";

        for (let i = 0; i < this.getModel().getCart().length; i++) {
            cartString += "       Name: " + this.getModel().getCart()[i].getName() + "\n";
            cartString += "      Price: " + this.getModel().getCart()[i].getPrice() + "\n";
            cartString += "Description: " + this.getModel().getCart()[i].getDescription() + "\n";
            cartString += "   Quantity: " + this.getModel().getCart()[i] + "\n";
        }

        return cartString;
    }

}