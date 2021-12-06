"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartView = void 0;
var cartView = /** @class */ (function () {
    function cartView(model) {
        this.model = model;
    }
    cartView.prototype.getModel = function () {
        return this.model;
    };
    cartView.prototype.getView = function () {
        var cartString = "";
        for (var i = 0; i < this.getModel().getCart().length; i++) {
            cartString += "       Name: " + this.getModel().getCart()[i].getName() + "\n";
            cartString += "      Price: " + this.getModel().getCart()[i].getPrice() + "\n";
            cartString += "Description: " + this.getModel().getCart()[i].getDescription() + "\n";
            cartString += "   Quantity: " + this.getModel().getCart()[i] + "\n";
        }
        return cartString;
    };
    return cartView;
}());
exports.cartView = cartView;
