
//Global vars
//JSON
let globalVars = '{"inflation12m":52.5, "blueDollar12m":212.4, "blueDollarToday":144, "oficialDollarToday":82.1, "oficialDollar12m":121.1, "dollarTax":1.65}'; //MANUAL
//OBJECTS
const inflation12m = JSON.parse(globalVars).inflation12m;
const blueDollar12m = JSON.parse(globalVars).blueDollar12m;
const blueDollarToday = JSON.parse(globalVars).blueDollarToday;
const oficialDollarToday = JSON.parse(globalVars).oficialDollarToday;
const oficialDollar12m = JSON.parse(globalVars).oficialDollar12m;
const dollarTax = JSON.parse(globalVars).dollarTax;

//TEST
console.log(inflation12m);
console.log(blueDollar12m);
console.log(blueDollarToday);
console.log(oficialDollarToday);
console.log(oficialDollar12m);
console.log(dollarTax);


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
let plazoFijoTradicionalSupervielle = new InvestmentAsset( //MANUAL
    "Plazo fijo", 
    37, 
    "Supervielle", 
    "Bancos tradicionales", 
    "Plazo fijo", 
    "Pesos"
);
let plazoFijoTradicionalBrubank = new InvestmentAsset( //MANUAL
    "Plazo fijo", 
    37, 
    "Brubank", 
    "Bancos tradicionales", 
    "Plazo fijo", 
    "Pesos"
);
let plazoFijoTradicionalReba = new InvestmentAsset( //MANUAL
    "Plazo fijo", 
    37, 
    "Reba", 
    "Bancos tradicionales", 
    "Plazo fijo", 
    "Pesos"
);
let plazoFijoTradicionalWilobank = new InvestmentAsset( //MANUAL
    "Plazo fijo", 
    37, 
    "Wilobank", 
    "Bancos tradicionales", 
    "Plazo fijo", 
    "Pesos"
);
let plazoFijoUVASupervielle = new InvestmentAsset( //MANUAL
    "Plazo fijo UVA", 
    1+inflation12m, 
    "Supervielle", 
    "Bancos tradicionales", 
    "Plazo fijo", 
    "Pesos"
);
let fondoSupervielle = new InvestmentAsset( //MANUAL
    "Fondo", 
    38.3, 
    "Supervielle", 
    "Bancos tradicionales", 
    "Fondo", 
    "Pesos"
);
let fondoMercadoPago = new InvestmentAsset( //MANUAL
    "Fondo", 
    26.6, 
    "Mercado Pago", 
    "Billeteras", 
    "Fondo", 
    "Pesos"
);
let ruloConDolaresOficiales = new InvestmentAsset( //MANUAL
    "Rulo dólares oficiales", 
    ((blueDollar12m / blueDollarToday) * blueDollarToday) / (88 * dollarTax), 
    "Alguna", 
    "Casas de cambio", 
    "Rulos con dólares", 
    "Dólares"
);
let compraDeDolaresOficiales = new InvestmentAsset( //MANUAL
    "Dólares oficiales", 
    oficialDollar12m / (88 * dollarTax), 
    "Supervielle", 
    "Bancos tradicionales", 
    "Rulos con dólares", 
    "Dólares"
);
let compraDeUsdc = new InvestmentAsset( //MANUAL
    "Dólares virtuales", 
    1.4, 
    "Ripio", 
    "Cripto billeteras", 
    "Cripto monedas", 
    "Pesos"
);
//TEST
console.log(plazoFijoTradicionalSupervielle);
console.log(plazoFijoUVASupervielle);
console.log(plazoFijoTradicionalSupervielle.annualYield);


//Sort of annualYields
let annualYields = [
    plazoFijoTradicionalSupervielle.annualYield, 
    plazoFijoTradicionalBrubank.annualYield,
    plazoFijoTradicionalReba.annualYield,
    plazoFijoTradicionalWilobank.annualYield,
    plazoFijoUVASupervielle.annualYield, 
    fondoSupervielle.annualYield, 
    fondoMercadoPago.annualYield,
    ruloConDolaresOficiales.annualYield,
    compraDeDolaresOficiales.annualYield,
    compraDeUsdc.annualYield
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
    plazoFijoTradicionalBrubank,
    plazoFijoTradicionalReba,
    plazoFijoTradicionalWilobank,
    plazoFijoUVASupervielle, 
    fondoSupervielle, 
    fondoMercadoPago,
    ruloConDolaresOficiales,
    compraDeDolaresOficiales,
    compraDeUsdc
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
    const numberForRanking = 5; //get the first 5 items
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
//AssetNames and EntityNames
//1
let investmentAssetName1 = investmentAssets[0].assetName;
let investmentEntityName1 = investmentAssets[0].entityName;
let bestInvestmentAssetName1 = document.getElementById("mejores-inversiones-1-asset-name").innerHTML = (investmentAssetName1 + " " + investmentEntityName1);
//2
let investmentAssetName2 = investmentAssets[1].assetName;
let investmentEntityName2 = investmentAssets[1].entityName;
let bestInvestmentAssetName2 = document.getElementById("mejores-inversiones-2-asset-name").innerHTML = (investmentAssetName2 + " " + investmentEntityName2);
//3
let investmentAssetName3 = investmentAssets[2].assetName;
let investmentEntityName3 = investmentAssets[2].entityName;
let bestInvestmentAssetName3 = document.getElementById("mejores-inversiones-3-asset-name").innerHTML = (investmentAssetName3 + " " + investmentEntityName3);
//4
let investmentAssetName4 = investmentAssets[3].assetName;
let investmentEntityName4 = investmentAssets[3].entityName;
let bestInvestmentAssetName4 = document.getElementById("mejores-inversiones-4-asset-name").innerHTML = (investmentAssetName4 + " " + investmentEntityName4);
//5
let investmentAssetName5 = investmentAssets[4].assetName;
let investmentEntityName5 = investmentAssets[4].entityName;
let bestInvestmentAssetName5 = document.getElementById("mejores-inversiones-5-asset-name").innerHTML = (investmentAssetName5 + " " + investmentEntityName5);
//6
let investmentAssetName6 = investmentAssets[5].assetName;
let investmentEntityName6 = investmentAssets[5].entityName;
let bestInvestmentAssetName6 = document.getElementById("mejores-inversiones-6-asset-name").innerHTML = (investmentAssetName6 + " " + investmentEntityName6);
//7
let investmentAssetName7 = investmentAssets[6].assetName;
let investmentEntityName7 = investmentAssets[6].entityName;
let bestInvestmentAssetName7 = document.getElementById("mejores-inversiones-7-asset-name").innerHTML = (investmentAssetName7 + " " + investmentEntityName7);
//8
let investmentAssetName8 = investmentAssets[7].assetName;
let investmentEntityName8 = investmentAssets[7].entityName;
let bestInvestmentAssetName8 = document.getElementById("mejores-inversiones-8-asset-name").innerHTML = (investmentAssetName8 + " " + investmentEntityName8);
//9
let investmentAssetName9 = investmentAssets[8].assetName;
let investmentEntityName9 = investmentAssets[8].entityName;
let bestInvestmentAssetName9 = document.getElementById("mejores-inversiones-9-asset-name").innerHTML = (investmentAssetName9 + " " + investmentEntityName9);
//10
let investmentAssetName10 = investmentAssets[9].assetName;
let investmentEntityName10 = investmentAssets[9].entityName;
let bestInvestmentAssetName10 = document.getElementById("mejores-inversiones-10-asset-name").innerHTML = (investmentAssetName10 + " " + investmentEntityName10);
//AnnualYields
//1
let investmentAssetAnnualYield1 = investmentAssets[0].annualYield;
let bestInvestmentAssetAnnualYield1 = document.getElementById("mejores-inversiones-1-annual-yield").innerHTML = ((investmentAssetAnnualYield1.toFixed(1))+"%");
//2
let investmentAssetAnnualYield2 = investmentAssets[1].annualYield;
let bestInvestmentAssetAnnualYield2 = document.getElementById("mejores-inversiones-2-annual-yield").innerHTML = ((investmentAssetAnnualYield2.toFixed(1))+"%");
//3
let investmentAssetAnnualYield3 = investmentAssets[2].annualYield;
let bestInvestmentAssetAnnualYield3 = document.getElementById("mejores-inversiones-3-annual-yield").innerHTML = ((investmentAssetAnnualYield3.toFixed(1))+"%");
//4
let investmentAssetAnnualYield4 = investmentAssets[3].annualYield;
let bestInvestmentAssetAnnualYield4 = document.getElementById("mejores-inversiones-4-annual-yield").innerHTML = ((investmentAssetAnnualYield4.toFixed(1))+"%");
//5
let investmentAssetAnnualYield5 = investmentAssets[4].annualYield;
let bestInvestmentAssetAnnualYield5 = document.getElementById("mejores-inversiones-5-annual-yield").innerHTML = ((investmentAssetAnnualYield5.toFixed(1))+"%");
//6
let investmentAssetAnnualYield6 = investmentAssets[5].annualYield;
let bestInvestmentAssetAnnualYield6 = document.getElementById("mejores-inversiones-6-annual-yield").innerHTML = ((investmentAssetAnnualYield6.toFixed(1))+"%");
//7
let investmentAssetAnnualYield7 = investmentAssets[6].annualYield;
let bestInvestmentAssetAnnualYield7 = document.getElementById("mejores-inversiones-7-annual-yield").innerHTML = ((investmentAssetAnnualYield7.toFixed(1))+"%");
//8
let investmentAssetAnnualYield8 = investmentAssets[7].annualYield;
let bestInvestmentAssetAnnualYield8 = document.getElementById("mejores-inversiones-8-annual-yield").innerHTML = ((investmentAssetAnnualYield8.toFixed(1))+"%");
//9
let investmentAssetAnnualYield9 = investmentAssets[8].annualYield;
let bestInvestmentAssetAnnualYield9 = document.getElementById("mejores-inversiones-9-annual-yield").innerHTML = ((investmentAssetAnnualYield9.toFixed(1))+"%");
//2
let investmentAssetAnnualYield10 = investmentAssets[9].annualYield;
let bestInvestmentAssetAnnualYield10 = document.getElementById("mejores-inversiones-10-annual-yield").innerHTML = ((investmentAssetAnnualYield10.toFixed(1))+"%");