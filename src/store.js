/*
 * Copyright (c) 2023 Brandon Jordan
 */

export function store(state) {
    return new Store(state);
}

class Store {
    constructor(state) {
        this.state = state;
        this.callbacks = [];
    }

    update(callback) {
        this.state = callback(this.state);
        this.#react();
    }

    get() {
        return this.state;
    }

    set(state) {
        this.state = state;
        this.#react();
    }

    #react() {
        const self = this;
        this.callbacks.forEach(callback => {
            callback(self.state);
        });
    }

    model(callback) {
        this.callbacks.push(callback);
        callback(this.state);
    }
}