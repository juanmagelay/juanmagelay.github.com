//Global vars

var inflation12m = 50;
var blueDollar12m = 200;
var blueDollarToday = 158;
var oficialDollarToday = 87.00;


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

let plazoFijoTradicionalSupervielle = new InvestmentAsset("Plazo fijo tradicional", 37, "Supervielle", "Bancos tradicionales", "Plazo fijo", "Pesos");

let plazoFijoUVASupervielle = new InvestmentAsset("Plazo fijo UVA", 1+inflation12m, "Supervielle", "Bancos tradicionales", "Plazo fijo", "Pesos");

// ( precio dolar en un ano - precio dolar hoy ) / precio dolar hoy
let compraDolarBlueHoyYVentaAlAno = new InvestmentAsset("Rulo con dólar blue", ((blueDollar12m - blueDollarToday) / blueDollarToday) * 100, "Alguna", "Casas de cambio", "Rulos con dólares", "Dólares");

// ( precio dolar en un ano - precio dolar hoy ) / precio dolar hoy
let compraDolarOficialHoyYVentaAlAno = new InvestmentAsset("Rulo con dólar oficial", ((blueDollar12m - oficialDollarToday) / oficialDollarToday) * 100, "Supervielle", "Bancos tradicionales", "Rulos con dólares", "Dólares");

console.log(plazoFijoTradicionalSupervielle);
console.log(plazoFijoUVASupervielle);
console.log(compraDolarBlueHoyYVentaAlAno);
console.log(compraDolarOficialHoyYVentaAlAno);

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
}

showOnlyInvestmentAssetsFromExchangeHouses();
