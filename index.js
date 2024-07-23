function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction() {
    function namedFunction() {
        return "This is a named function";
    }
    return namedFunction;
}
function returnsAnAnonymousFunction() {
    return function() {
        return "This is an anonymous function";
    };
}
