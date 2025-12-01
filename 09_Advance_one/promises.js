const promiseOne = new Promise(function(resolve, reject){
    //Do an async tasks
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is completed");
        
    },1000)
})

