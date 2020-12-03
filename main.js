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
let compraDolarBlueHoyYVentaAlAno = new InvestmentAsset("Rulo en dólares", ((blueDollar12m - blueDollarToday) / blueDollarToday) * 100, "Alguna", "Casa de cambio", "Rulos con dólares", "Dólares");

// ( precio dolar en un ano - precio dolar hoy ) / precio dolar hoy
let compraDolarOficialHoyYVentaAlAno = new InvestmentAsset("Rulo en dólares", ((blueDollar12m - oficialDollarToday) / oficialDollarToday) * 100, "Supervielle", "Bancos tradicionales", "Rulos con dólares", "Dólares");

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


//Sort of InvestmentAssets by AnnualYields
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



