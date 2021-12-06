"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
var Model = /** @class */ (function () {
    function Model() {
        this.cart = [];
        this.cartQuant = [];
    }
    Model.prototype.getCart = function () {
        return this.cart;
    };
    Model.prototype.getCartQuant = function () {
        return this.cartQuant;
    };
    Model.prototype.addProduct = function (p) {
        this.getCart().push(p);
    };
    Model.prototype.addQuant = function (q) {
        this.getCartQuant().push(q);
    };
    Model.prototype.removeProduct = function (index) {
        this.getCart().splice(index, 1);
        this.getCart().splice(index, 1);
    };
    return Model;
}());
exports.Model = Model;
