import { Model } from "./model";

export class removalView{
    model : Model;

    constructor(model : Model){
        this.model = model;
    }

    getModel() : Model{
        return this.model;
    }

    getView() : String{
        let productString : String = "";

        for (let i = 0; i < this.getModel().getCart().length; i++) {
            productString += i + ": " + this.getModel().getCart()[i].getName();
            productString += "\n";
        }
        
        return productString;
    }
}