//Splash
setTimeout( function() {
    document.getElementById("splash").style.display = "none";
}, 2000);


//Global vars
//JSON
let globalVars = '{"inflation12m":12, "blueDollar12m":200, "blueDollarToday":158, "oficialDollarToday":87.00}';
//OBJECTS
var inflation12m = JSON.parse(globalVars).inflation12m;
var blueDollar12m = JSON.parse(globalVars).blueDollar12m;
var blueDollarToday = JSON.parse(globalVars).blueDollarToday;
var oficialDollarToday = JSON.parse(globalVars).oficialDollarToday;
//TEST
console.log(inflation12m);
console.log(blueDollar12m);
console.log(blueDollarToday);
console.log(oficialDollarToday);


//Object constructor function
class InvestmentAsset {
    constructor (newAssettName, newAnnualYield, newEntityName, newEntityTipe, newInvestmentType, newAssetCurrency) {
        this.assetName = newAssettName;
        this.annualYield = newAnnualYield;
        this.entityName = newEntityName;
        this.entityType = newEntityTipe;
        this.investmentType = newInvestmentType;
        this.assetCurrency = newAssetCurrency;
    }
}


//Investment Assets new Objects
let plazoFijoTradicionalSupervielle = new InvestmentAsset(
    "Plazo fijo tradicional", 
    37, 
    "Supervielle", 
    "Bancos tradicionales", 
    "Plazo fijo", 
    "Pesos"
);
let plazoFijoUVASupervielle = new InvestmentAsset(
    "Plazo fijo UVA", 
    1+inflation12m, 
    "Supervielle", 
    "Bancos tradicionales", 
    "Plazo fijo", 
    "Pesos"
);
// ( precio dolar en un ano - precio dolar hoy ) / precio dolar hoy
let compraDolarBlueHoyYVentaAlAno = new InvestmentAsset(
    "Rulo con dólar blue", 
    ((blueDollar12m - blueDollarToday) / blueDollarToday) * 100, 
    "Alguna", 
    "Casas de cambio", 
    "Rulos con dólares", 
    "Dólares"
);
// ( precio dolar en un ano - precio dolar hoy ) / precio dolar hoy
let compraDolarOficialHoyYVentaAlAno = new InvestmentAsset(
    "Rulo con dólar oficial", 
    ((blueDollar12m - oficialDollarToday) / oficialDollarToday) * 100, 
    "Supervielle", 
    "Bancos tradicionales", 
    "Rulos con dólares", 
    "Dólares"
);
//TEST
console.log(plazoFijoTradicionalSupervielle);
console.log(plazoFijoUVASupervielle);
console.log(plazoFijoTradicionalSupervielle.annualYield);


//Sort of annualYields
let annualYields = [
    plazoFijoTradicionalSupervielle.annualYield, 
    plazoFijoUVASupervielle.annualYield, 
    compraDolarBlueHoyYVentaAlAno.annualYield, 
    compraDolarOficialHoyYVentaAlAno.annualYield
];

function annualYieldRanking() {
    annualYields.sort( function(a, b) {
        return b - a;
    });
    console.table(annualYields);
}

annualYieldRanking();


//Sort of InvestmentAssets by AnnualYields - AKA Top 10 Investment Assets
let investmentAssets = [
    plazoFijoTradicionalSupervielle,
    plazoFijoUVASupervielle,
    compraDolarBlueHoyYVentaAlAno,
    compraDolarOficialHoyYVentaAlAno 
];

function investmentAssetsRankingByAnuualYields() {
    investmentAssets.sort(function (a, b) {
        return b.annualYield - a.annualYield;
    });
    console.table(investmentAssets);
}

investmentAssetsRankingByAnuualYields();


//Top 5 Investment Assets
function investmentAssetstop5RankingByAnuualYields() {
    const numberForRanking = 2; //get the first 5 items
    let top5Ranking = investmentAssets.slice(0, numberForRanking);
    console.table(top5Ranking);
}

investmentAssetstop5RankingByAnuualYields();


//Filters - Investment assets in Dollars
function showOnlyInvestmentAssetsInDollars() {
    let onlyDollars = "Dólares";
    let onlyInvestmentAssetsInDollars = [];
    for (let investmentAsset of investmentAssets) {
        for(let assetCurrency in investmentAsset){
            if(investmentAsset[assetCurrency] == onlyDollars){
                onlyInvestmentAssetsInDollars.push(investmentAsset);
            }
        }
    }
    console.table(onlyInvestmentAssetsInDollars);
}

showOnlyInvestmentAssetsInDollars();


//Filters - Investment assets in Pesos
function showOnlyInvestmentAssetsInPesos() {
    let onlyPesos = "Pesos";
    let onlyInvestmentAssetsInPesos = [];
    for (let investmentAsset of investmentAssets) {
        for(let assetCurrency in investmentAsset){
            if(investmentAsset[assetCurrency] == onlyPesos){
                onlyInvestmentAssetsInPesos.push(investmentAsset);
            }
        }
    }
    console.table(onlyInvestmentAssetsInPesos);
}

showOnlyInvestmentAssetsInPesos();


//Filters - Investment asset Fixed term
function showOnlyInvestmentAssetsFixedTerm() {
    let onlyFixedTerm = "Plazo fijo";
    let onlyInvestmentAssetsFixedTerm = [];
    for (let investmentAsset of investmentAssets) {
        for(let investmentType in investmentAsset){
            if(investmentAsset[investmentType] == onlyFixedTerm){
                onlyInvestmentAssetsFixedTerm.push(investmentAsset);
            }
        }
    }
    console.table(onlyInvestmentAssetsFixedTerm);
}

showOnlyInvestmentAssetsFixedTerm();


//Filters - Investment asset Dollar loop
function showOnlyInvestmentAssetsDollarLoop() {
    let onlyDollarLoop = "Rulos con dólares";
    let onlyInvestmentAssetsDollarLoop = [];
    for (let investmentAsset of investmentAssets) {
        for(let investmentType in investmentAsset){
            if(investmentAsset[investmentType] == onlyDollarLoop){
                onlyInvestmentAssetsDollarLoop.push(investmentAsset);
            }
        }
    }
    console.table(onlyInvestmentAssetsDollarLoop);
    //Save in session storage the first element
    sessionStorage.setItem("FilterApplied", JSON.stringify(onlyInvestmentAssetsDollarLoop[0]));
}

showOnlyInvestmentAssetsDollarLoop();


//Filters - Investment asset from Exchange houses
function showOnlyInvestmentAssetsFromExchangeHouses() {
    let onlyFromExchangeHouses = "Casas de cambio";
    let onlyInvestmentAssetsFromExchangeHouses = [];
    for (let investmentAsset of investmentAssets) {
        for(let entityType in investmentAsset){
            if(investmentAsset[entityType] == onlyFromExchangeHouses){
                onlyInvestmentAssetsFromExchangeHouses.push(investmentAsset);
            }
        }
    }
    console.table(onlyInvestmentAssetsFromExchangeHouses);
    //Save in local storage the first element
    localStorage.setItem("FilterApplied", JSON.stringify(onlyInvestmentAssetsFromExchangeHouses[0]));
}

showOnlyInvestmentAssetsFromExchangeHouses();


//Mejores inversiones - Best investment assets - HTML Manipulate

//AssetNames
let investmentAssetName1 = investmentAssets[0].assetName;
let bestInvestmentAssetName1 = document.getElementById("mejores-inversiones-1-asset-name").innerHTML = (investmentAssetName1);

let investmentAssetName2 = investmentAssets[1].assetName;
let bestInvestmentAssetName2 = document.getElementById("mejores-inversiones-2-asset-name").innerHTML = (investmentAssetName2);

let investmentAssetName3 = investmentAssets[2].assetName;
let bestInvestmentAssetName3 = document.getElementById("mejores-inversiones-3-asset-name").innerHTML = (investmentAssetName3);

//AnnualYields
let investmentAssetAnnualYield1 = investmentAssets[0].annualYield;
let bestInvestmentAssetAnnualYield1 = document.getElementById("mejores-inversiones-1-annual-yield").innerHTML = ((investmentAssetAnnualYield1.toFixed(1))+"%");

let investmentAssetAnnualYield2 = investmentAssets[1].annualYield;
let bestInvestmentAssetAnnualYield2 = document.getElementById("mejores-inversiones-2-annual-yield").innerHTML = ((investmentAssetAnnualYield2.toFixed(1))+"%");

let investmentAssetAnnualYield3 = investmentAssets[2].annualYield;
let bestInvestmentAssetAnnualYield3 = document.getElementById("mejores-inversiones-3-annual-yield").innerHTML = ((investmentAssetAnnualYield3.toFixed(1))+"%");




