function cb() {
    console.log("hello there");
}

function receivesAFunction(callback) {
    callback();
}

receivesAFunction(cb);



function returnsANamedFunction() {
    function namedFunction() {}

    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return () => {
      console.log('Hello World');
    };
  }
  

  returnsAnAnonymousFunction()(); 
  
  



