export function defineProperty(obj, prop, val) {
    Object.defineProperty(obj, prop, {
        value: val,
        writable: true,
        enumerable: true,
        configurable: true
    });
}

