//Log the moment when the DOM is loaded.
$( document ).ready( function() {
   console.log("The DOM is loaded.");
});


//Filters Attempt 3 - Get the input checks checked and filter the array

//Obtaining all inputs of HTML.
let inputs = document.getElementsByTagName("input");
//Create a list of filters or inputs checked.
let checkboxesChecked = [];

function filterEvent(){
    //Iterate all inputs for filter these.
    countTheChecks();
    console.log(checkboxesChecked);
    //HERE --- apply filter to the investmentAssets ranking
    if ((checkboxesChecked.includes("defaultChecked1") == false) && 
        (checkboxesChecked.includes("defaultChecked2") == false)) {
        alert("Elegí al menos una moneda de inversión, porque Yuanes todavía no soportamos. Patacones tampoco.");
    } else if (checkboxesChecked.includes("defaultChecked1") == false) {
        showOnlyInvestmentAssetsInDollars(); //onlyInvestmentAssetsInDollars
    } else if (checkboxesChecked.includes("defaultChecked2") == false) {
        showOnlyInvestmentAssetsInPesos(); //onlyInvestmentAssetsInPesos
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


/*
//Filters

function filterEvent(){
    //Obtaining all inputs of HTML.
    let inputs = document.getElementsByTagName("input");
    //Create a list of filters or inputs checked.
    let checkboxesChecked = [];
    //Iterate all inputs for filter these.
    for (const elementHTML of inputs) {
        //If it is checked, add it to the list.
        if(elementHTML.checked){
        checkboxesChecked.push(elementHTML.id);
        }
    }
    //Filter the ranking
    filteredList =  investmentAssets.filter(x =>checkboxsChecked.includes(x.assetCurrency));
    generateOutput(filteredList);
  }
  
function saveInvestmentAsset(){
    let newInvestmentAsset = {
        assetName           : document.getElementsById("mejores-inversiones-1-asset-name").value,
        annualYield         : document.getElementById("mejores-inversiones-1-annual-yield").value,
        entityName          : document.getElementsById("mejores-inversiones-1-asset-name").value,
        investmentType,
        assetCurrency
    }
    investmentAssets.push(new investmentAsset(newInvestmentAsset));
    filterEvent();
}

window.onload = () => {
// Start the filter events when the page is loaded.
    document.getElementById("apply-filters").onclick =  saveInvestmentAsset;
    for (const assetCurrency of investmentAssets) {
        document.getElementById(assetCurrency).onclick = filterEvent;
    }
}
*/