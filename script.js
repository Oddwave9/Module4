var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for(var i = 0; i < names.length; i++){
    var FirstChar = names[i].charAt(0);
    
    if(FirstChar === "J"){
        console.log("Goodbye " + names[i]);
    }
    
    else if(FirstChar != "J"){
        console.log("Welcome " + names[i]);
    }
    
    else{ console.log("Welcome " + name[i]);
    }
}

