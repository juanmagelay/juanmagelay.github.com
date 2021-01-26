//Log the moment when the DOM is loaded.
$( document ).ready( function() {
   console.log("The DOM is loaded.");
});


//Obtaining all inputs of HTML.
let inputs = document.getElementsByTagName("input");
//Create a list of filters or inputs checked.
let checkboxesChecked = [];

function filterEvent(){
    //Iterate all inputs for filter these.
    countTheChecks();
    console.log(checkboxesChecked);
    //Apply filter to the investmentAssets ranking
    if ((checkboxesChecked.includes("defaultChecked1") == true) && 
        (checkboxesChecked.includes("defaultChecked2") == true)) {
        console.log("Se ven los 10?" + investmentAssets);
        generateOutput(investmentAssets);
    } else if ((checkboxesChecked.includes("defaultChecked1") == false) && 
        (checkboxesChecked.includes("defaultChecked2") == false)) {
        document.getElementById("alert-currency").style.display = "block";
    } else if (checkboxesChecked.includes("defaultChecked1") == false) {
        generateOutput(onlyInvestmentAssetsInDollars);
    } else if (checkboxesChecked.includes("defaultChecked2") == false) {
        generateOutput(onlyInvestmentAssetsInPesos);
    }
    checkboxesChecked = [];
}

function countTheChecks() {
    for (const elementHTML of inputs) {
        //If it is checked, add it to the list.
        if(elementHTML.checked){
            checkboxesChecked.push(elementHTML.id);
        }
    }
}