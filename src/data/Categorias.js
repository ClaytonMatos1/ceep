import Base from "./Base";

export default class Categorias extends Base {

    constructor() {
        super();
        this.categories = [];
    }

    addCategory(newCategory) {
        this.categories.push(newCategory);
        this.notify();
    }

    notify() {
        this._registered.forEach(callback => callback(this.categories));
    }
}