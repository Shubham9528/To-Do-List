var list = [];

function show() {
    while (list.length) { 
  
        // Remove elements from array 
        list.pop(); 
    }
    
    var textarea = document.querySelector("textArea");
    textarea.value="";

}

function submit() {

    var data = document.querySelector(".text").value;
    if(data.length<1){
        alert("Empty Field")
    }
    else{
        list.push(data);
        var textarea = document.querySelector("textArea");
    
        textarea.value = list.join( "\n");s

    }   //console.log(data);
}
document.querySelector(".submit").addEventListener("click", submit);
document.querySelector(".clear").addEventListener("click", show);
