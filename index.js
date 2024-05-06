function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    const nameFunc = ()=> console.log('returned')
    return nameFunc
}

function returnsAnAnonymousFunction(){
    return () => console.log('Yo')
}
