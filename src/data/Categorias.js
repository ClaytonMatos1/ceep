export default class Categorias {

    constructor() {
        this.categories = [];
        this._registered = [];
    }

    addCategory(newCategory) {
        this.categories.push(newCategory);
        this.notify();
    }

    register(callback) {
        this._registered.push(callback);
    }

    unregister(callback) {
        this._registered = this._registered.filter(call => call !== callback);
    }

    notify() {
        this._registered.forEach(callback => callback(this.categories));
    }
}