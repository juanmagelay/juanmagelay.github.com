//Splash
setTimeout( function() {
    document.getElementById("splash").style.display = "none";
}, 2000);


//Global vars
//JSON
let globalVars = '{"inflation12m":52.5, "blueDollar12m":212.4, "blueDollarToday":144, "oficialDollarToday":82.1, "oficialDollar12m":121.1, "dollarTax":1.65}';
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
let plazoFijoTradicionalSupervielle = new InvestmentAsset(
    "Plazo fijo", 
    37, 
    "Supervielle", 
    "Bancos tradicionales", 
    "Plazo fijo", 
    "Pesos"
);
let plazoFijoTradicionalBrubank = new InvestmentAsset(
    "Plazo fijo", 
    37, 
    "Brubank", 
    "Bancos tradicionales", 
    "Plazo fijo", 
    "Pesos"
);
let plazoFijoTradicionalReba = new InvestmentAsset(
    "Plazo fijo", 
    37, 
    "Reba", 
    "Bancos tradicionales", 
    "Plazo fijo", 
    "Pesos"
);
let plazoFijoTradicionalWilobank = new InvestmentAsset(
    "Plazo fijo", 
    37, 
    "Wilobank", 
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
let fondoSupervielle = new InvestmentAsset(
    "Fondo", 
    38.3, 
    "Supervielle", 
    "Bancos tradicionales", 
    "Fondo", 
    "Pesos"
);
let fondoMercadoPago = new InvestmentAsset(
    "Fondo", 
    26.6, 
    "Mercado Pago", 
    "Billeteras", 
    "Fondo", 
    "Pesos"
);
let ruloConDolaresOficiales = new InvestmentAsset(
    "Rulo dólares oficiales", 
    ((blueDollar12m / blueDollarToday) * blueDollarToday) / (88 * dollarTax), 
    "Alguna", 
    "Casas de cambio", 
    "Rulos con dólares", 
    "Dólares"
);
let compraDeDolaresOficiales = new InvestmentAsset(
    "Dólares oficiales", 
    oficialDollar12m / (88 * dollarTax), 
    "Supervielle", 
    "Bancos tradicionales", 
    "Rulos con dólares", 
    "Dólares"
);
let compraDeUsdc = new InvestmentAsset(
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


//Estrategia sugerida para invertir - Suggested strategy for invest - HTML Manipulate
//Three elements to invest
//PercentajeOfInvestment
//1
let suggestedInvestmentPercentajeOfInvestment1 = document.getElementById("strategy-suggested-1-percentage-of-investment").innerHTML = (25+"%");
//2
let suggestedInvestmentPercentajeOfInvestment2 = document.getElementById("strategy-suggested-2-percentage-of-investment").innerHTML = (28+"%");
//3
let suggestedInvestmentPercentajeOfInvestment3 = document.getElementById("strategy-suggested-3-percentage-of-investment").innerHTML = (47+"%");
//AssetNames
//1
let suggestedInvestmentAssetName1 = document.getElementById("strategy-suggested-1-asset-name").innerHTML = (fondoMercadoPago.assetName + " " + fondoMercadoPago.entityName);
//2
let suggestedInvestmentAssetName2 = document.getElementById("strategy-suggested-2-asset-name").innerHTML = (plazoFijoUVASupervielle.assetName + " " + plazoFijoUVASupervielle.entityName);
//3
let suggestedInvestmentAssetName3 = document.getElementById("strategy-suggested-3-asset-name").innerHTML = (fondoSupervielle.assetName + " " + fondoSupervielle.entityName);
//TotalMoney
//1
let suggestedInvestmentTotalMoney1 = document.getElementById("strategy-suggested-1-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(((fondoMercadoPago.annualYield)*1000))));
//2
let suggestedInvestmentTotalMoney2 = document.getElementById("strategy-suggested-2-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(((plazoFijoUVASupervielle.annualYield)*1000))));
//3
let suggestedInvestmentTotalMoney3 = document.getElementById("strategy-suggested-3-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(((fondoSupervielle.annualYield)*1000))));
//Total Annual Yield
//TotalAnnualYield
let totalAnnualYield = document.getElementById("strategy-suggested-total-annual-yield").innerHTML = ("+"+Math.floor(annualYieldCalculated())+"%");
//TotalAnnualMoney
let totalAnnualMoney = document.getElementById("strategy-suggested-total-annual-money").innerHTML = ("+$"+thousandsSeparatorsForMoney(Math.floor((totalMoneyCalculated()))));

function thousandsSeparatorsForMoney(anAmountOfMoney) {
    var numParts = anAmountOfMoney.toString().split(".");
    numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return numParts.join(".");
}

function annualYieldCalculated() {
    return ((0.25 * 26.6) + (0.28 * 53.5) + (0.47 * 38.3))
}

function totalMoneyCalculated() {
    return (annualYieldCalculated() * 1000)
}

//Home events
document.getElementById("strategy-suggested-1-percentage-of-investment").onclick = logTheInterestInMercadoPago;

function logTheInterestInSupervielle() {
    console.log("Interested in Supervielle");
}

document.getElementById("interested-in-supervielle").addEventListener("click", logTheInterestInSupervielle);

function logTheInterestInMercadoPago() {
    console.log("Interested in Mercado Pago");
}