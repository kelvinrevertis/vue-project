class LocalStorageService {
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

export const localStorageService = new LocalStorageService();