class LocalStorage {
    constructor() {
        this.storage = window.localStorage;
    }
    get(key) {
        return this.storage.getItem(key);
    }
    set(key, value) {
        this.storage.setItem(key, value);
    }
    remove(key) {
        this.storage.removeItem(key);
    }
}

export const localStorage = new LocalStorage();