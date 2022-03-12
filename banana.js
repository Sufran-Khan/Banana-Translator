var inputtext = document.querySelector("#inputbox");

var btnclick = document.querySelector("#btn");

var outputtext = document.querySelector("#outputbox");

var urlApi = "https://api.funtranslations.com/translate/minion.json";

console.log(inputtext);
console.log(btnclick);
console.log(outputtext);

btnclick.addEventListener('click', clickHandler);

function getUrl(text){
    return urlApi + "?" + "text=" + text;
}



function clickHandler() {

    var inputFinal = inputtext.value;
    console.log(inputFinal);

   fetch(getUrl(inputFinal))
   .then(response=> response.json())
   .then(json=> {
       var outFinal = json.contents.translated;

       outputtext.innerText = outFinal;
       
       
   })





    
}