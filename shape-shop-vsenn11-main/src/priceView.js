"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.priceView = void 0;
var priceView = /** @class */ (function () {
    function priceView(model) {
        this.model = model;
    }
    priceView.prototype.getModel = function () {
        return this.model;
    };
    priceView.prototype.getView = function () {
        var total = 0.0;
        for (var i = 0; i < this.getModel().getCart().length; i++) {
            total += this.getModel().getCart()[i].getPrice() * this.getModel().getCartQuant()[i];
        }
        return "Shopping Cart Total: " + total;
    };
    return priceView;
}());
exports.priceView = priceView;
