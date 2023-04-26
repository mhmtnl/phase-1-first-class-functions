function receivesAFunction(callback) {
    const name = prompt("Please enter your name.");
    callback(name);
};
function returnsANamedFunction(){return function namedOne(){console.log("That is what's expected")}};
function returnsAnAnonymousFunction(){return function (){console.log("That is what's expected too")}};
