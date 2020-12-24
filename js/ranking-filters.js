//Log the moment when the DOM is loaded.
$( document ).ready( function() {
   console.log("The DOM is loaded.");
});

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