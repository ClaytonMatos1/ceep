export default class Base {

    constructor() {
        this._registered = [];
    }

    register(callback) {
        this._registered.push(callback);
    }

    unregister(callback) {
        this._registered = this._registered.filter(call => call !== callback);
    }
}
