"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removalView = void 0;
var removalView = /** @class */ (function () {
    function removalView(model) {
        this.model = model;
    }
    removalView.prototype.getModel = function () {
        return this.model;
    };
    removalView.prototype.getView = function () {
        var productString = "";
        for (var i = 0; i < this.getModel().getCart().length; i++) {
            productString += i + ": " + this.getModel().getCart()[i].getName();
            productString += "\n";
        }
        return productString;
    };
    return removalView;
}());
exports.removalView = removalView;
