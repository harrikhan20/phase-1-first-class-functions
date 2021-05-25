function receivesAFunction (cb){
    console.log(cb());
}

main(function(){})


function returnsANamedFunction(fn, cb){
    return (cb(fn));
    
}




function returnsAnAnonymousFunction(){

}