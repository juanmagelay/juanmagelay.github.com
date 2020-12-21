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
    "Rulo dólar oficial", 
    ((blueDollar12m / blueDollarToday) * blueDollarToday) / (88 * dollarTax), 
    "", 
    "Casas de cambio", 
    "Rulos con dólares", 
    "Dólares"
);
let compraDeDolaresOficiales = new InvestmentAsset( //MANUAL
    "Dólar oficial",
    oficialDollar12m / (88 * dollarTax), 
    "Supervielle", 
    "Bancos tradicionales", 
    "Rulos con dólares", 
    "Dólares"
);
let compraDeUsdc = new InvestmentAsset( //MANUAL
    "Dólar virtual", 
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


//Estrategia sugerida para invertir - Suggested strategy for invest - HTML Manipulate
//Three elements to invest
//PercentajeOfInvestment
//1
var suggestedInvestmentPercentajeOfInvestment1 = document.getElementById("strategy-suggested-1-percentage-of-investment").innerHTML = (25+"%");
//2
var suggestedInvestmentPercentajeOfInvestment2 = document.getElementById("strategy-suggested-2-percentage-of-investment").innerHTML = (28+"%");
//3
var suggestedInvestmentPercentajeOfInvestment3 = document.getElementById("strategy-suggested-3-percentage-of-investment").innerHTML = (47+"%");
//AssetNames
//1
var suggestedInvestmentAssetName1 = document.getElementById("strategy-suggested-1-asset-name").innerHTML = (fondoMercadoPago.assetName + " " + fondoMercadoPago.entityName); //MANUAL
//2
var suggestedInvestmentAssetName2 = document.getElementById("strategy-suggested-2-asset-name").innerHTML = (plazoFijoUVASupervielle.assetName + " " + plazoFijoUVASupervielle.entityName); //MANUAL
//3
var suggestedInvestmentAssetName3 = document.getElementById("strategy-suggested-3-asset-name").innerHTML = (fondoSupervielle.assetName + " " + fondoSupervielle.entityName); //MANUAL
//TotalMoney
//1
var suggestedInvestmentTotalMoney1 = document.getElementById("strategy-suggested-1-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(((fondoMercadoPago.annualYield)*1000)))); //MANUAL
//2
var suggestedInvestmentTotalMoney2 = document.getElementById("strategy-suggested-2-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(((plazoFijoUVASupervielle.annualYield)*1000)))); //MANUAL
//3
var suggestedInvestmentTotalMoney3 = document.getElementById("strategy-suggested-3-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(((fondoSupervielle.annualYield)*1000)))); //MANUAL
//Total Annual Yield
//TotalAnnualYield
var totalAnnualYield = document.getElementById("strategy-suggested-total-annual-yield").innerHTML = ("+"+Math.floor(annualYieldCalculated())+"%");
//TotalAnnualMoney
var totalAnnualMoney = document.getElementById("strategy-suggested-total-annual-money").innerHTML = ("+$"+thousandsSeparatorsForMoney(Math.floor((totalMoneyCalculated()))));

function thousandsSeparatorsForMoney(anAmountOfMoney) {
    var numParts = anAmountOfMoney.toString().split(".");
    numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return numParts.join(".");
}

function annualYieldCalculated() {
    return (
        (0.25 * fondoMercadoPago.annualYield) + //MANUAL
        (0.28 * plazoFijoUVASupervielle.annualYield) + //MANUAL
        (0.47 * fondoSupervielle.annualYield) //MANUAL
    ) 
}

function totalMoneyCalculated() {
    return (annualYieldCalculated() * 1000)
}





//Strategy amount and days form
//Get values
/*let strategyAmount = document.getElementById("strategy-amount").onkeyup = amountValue;

function amountValue() {
    let amountValue = document.getElementById("strategy-amount").value;
    console.log(amountValue);
}

let strategyDays = document.getElementById("strategy-days").onkeyup = daysValue;

function daysValue() {
    console.log(this.value);
}

//Get clicks on form
document.getElementById("strategy-amount").onclick = logTheInterestInChange;
document.getElementById("strategy-days").onclick = logTheInterestInChange;

function logTheInterestInChange() {
    console.log("Interested in change");
}
*/

//Strategy based on the amount and days

function annualYieldCalculated2(percentage1, percentage2, percentage3, asset1, asset2, asset3) {
    return (
        (percentage1 * asset1.annualYield) +
        (percentage2 * asset2.annualYield) +
        (percentage3 * asset3.annualYield)
    ) 
}

function totalMoneyCalculated2() {
    return (annualYieldCalculated2() * 1000)
}

function anAmountValue() {
    let anAmountValue = document.getElementById("strategy-amount").value;
}

function aDaysValue() {
    let aDaysValue = document.getElementById("strategy-days").value;
}


function strategyBasedOnAmount_AndDays_() {
    var strategyAmount2 = document.getElementById("strategy-amount").onkeyup = anAmountValue;
    var strategyDays2 = document.getElementById("strategy-amount").onkeyup = aDaysValue;
    
    
    if (anAmountValue > 2000 && aDaysValue > 90) {
        
        //25% Mercado Pago
        var suggestedInvestmentPercentajeOfInvestment1 = document.getElementById("strategy-suggested-1-percentage-of-investment").innerHTML = (25+"%");
        var suggestedInvestmentAssetName1 = document.getElementById("strategy-suggested-1-asset-name").innerHTML = (fondoMercadoPago.assetName + " " + fondoMercadoPago.entityName); //MANUAL
        var suggestedInvestmentTotalMoney1 = document.getElementById("strategy-suggested-1-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(((fondoMercadoPago.annualYield)*1000)))); //MANUAL
        
        //28% Plazo fijo UVA
        var suggestedInvestmentPercentajeOfInvestment2 = document.getElementById("strategy-suggested-2-percentage-of-investment").innerHTML = (28+"%"); //MANUAL
        var suggestedInvestmentAssetName2 = document.getElementById("strategy-suggested-2-asset-name").innerHTML = (plazoFijoUVASupervielle.assetName + " " + plazoFijoUVASupervielle.entityName); //MANUAL
        var suggestedInvestmentTotalMoney2 = document.getElementById("strategy-suggested-2-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(((plazoFijoUVASupervielle.annualYield)*1000)))); //MANUAL
        
        //47% Fondo Supervielle
        var suggestedInvestmentPercentajeOfInvestment3 = document.getElementById("strategy-suggested-3-percentage-of-investment").innerHTML = (47+"%");
        var suggestedInvestmentAssetName3 = document.getElementById("strategy-suggested-3-asset-name").innerHTML = (fondoSupervielle.assetName + " " + fondoSupervielle.entityName); //MANUAL
        var suggestedInvestmentTotalMoney3 = document.getElementById("strategy-suggested-3-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(((fondoSupervielle.annualYield)*1000)))); //MANUAL

        annualYieldCalculated2(0.25, 0.28, 0.47, fondoMercadoPago, plazoFijoUVASupervielle, fondoSupervielle);
        var totalAnnualYield = document.getElementById("strategy-suggested-total-annual-yield").innerHTML = ("+"+Math.floor(annualYieldCalculated2())+"%");
        var totalAnnualMoney = document.getElementById("strategy-suggested-total-annual-money").innerHTML = ("+$"+thousandsSeparatorsForMoney(Math.floor((totalMoneyCalculated2()))));
    
    } else if (anAmountValue > 2000 && aDaysValue <= 90) {
        
        // 25% Mercado Pago (IDEM)

        // 50% Plazo fijo
        var suggestedInvestmentPercentajeOfInvestment2 = document.getElementById("strategy-suggested-2-percentage-of-investment").innerHTML = (50+"%"); //MANUAL
        var suggestedInvestmentAssetName2 = document.getElementById("strategy-suggested-2-asset-name").innerHTML = (plazoFijoTradicionalSupervielle.assetName + " " + plazoFijoTradicionalSupervielle.entityName); //MANUAL
        var suggestedInvestmentTotalMoney2 = document.getElementById("strategy-suggested-2-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(((plazoFijoTradicionalSupervielle.annualYield)*1000)))); //MANUAL

        //25% Dolar oficial
        var suggestedInvestmentPercentajeOfInvestment3 = document.getElementById("strategy-suggested-3-percentage-of-investment").innerHTML = (25+"%");
        var suggestedInvestmentAssetName3 = document.getElementById("strategy-suggested-3-asset-name").innerHTML = (compraDeDolaresOficiales.assetName + " " + compraDeDolaresOficiales.entityName); //MANUAL
        var suggestedInvestmentTotalMoney3 = document.getElementById("strategy-suggested-3-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(((compraDeDolaresOficiales.annualYield)*1000)))); //MANUAL

        annualYieldCalculated2(0.25, 0.50, 0.25, fondoMercadoPago, plazoFijoTradicionalSupervielle, compraDeDolaresOficiales);
        var totalAnnualYield = document.getElementById("strategy-suggested-total-annual-yield").innerHTML = ("+"+Math.floor(annualYieldCalculated2())+"%");
        var totalAnnualMoney = document.getElementById("strategy-suggested-total-annual-money").innerHTML = ("+$"+thousandsSeparatorsForMoney(Math.floor((totalMoneyCalculated2()))));
    
    } else if (anAmountValue < 1000 && aDaysValue >= 0) {
        //20% Mercado Pago
        var suggestedInvestmentPercentajeOfInvestment1 = document.getElementById("strategy-suggested-1-percentage-of-investment").innerHTML = (20+"%");
        var suggestedInvestmentAssetName1 = document.getElementById("strategy-suggested-1-asset-name").innerHTML = (fondoMercadoPago.assetName + " " + fondoMercadoPago.entityName); //MANUAL
        var suggestedInvestmentTotalMoney1 = document.getElementById("strategy-suggested-1-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(((fondoMercadoPago.annualYield)*1000)))); //MANUAL
        
        //60% Ripio
        var suggestedInvestmentPercentajeOfInvestment2 = document.getElementById("strategy-suggested-2-percentage-of-investment").innerHTML = (60+"%"); //MANUAL
        var suggestedInvestmentAssetName2 = document.getElementById("strategy-suggested-2-asset-name").innerHTML = (compraDeUsdc.assetName + " " + compraDeUsdc.entityName); //MANUAL
        var suggestedInvestmentTotalMoney2 = document.getElementById("strategy-suggested-2-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(((compraDeUsdc.annualYield)*1000)))); //MANUAL
        
        //20% Dolar oficial
        var suggestedInvestmentPercentajeOfInvestment3 = document.getElementById("strategy-suggested-3-percentage-of-investment").innerHTML = (20+"%");
        var suggestedInvestmentAssetName3 = document.getElementById("strategy-suggested-3-asset-name").innerHTML = (compraDeDolaresOficiales.assetName + " " + compraDeDolaresOficiales.entityName); //MANUAL
        var suggestedInvestmentTotalMoney3 = document.getElementById("strategy-suggested-3-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(((compraDeDolaresOficiales.annualYield)*1000)))); //MANUAL

        annualYieldCalculated2(0.20, 0.60, 0.20, fondoMercadoPago, compraDeUsdc, compraDeDolaresOficiales); 
        var totalAnnualYield = document.getElementById("strategy-suggested-total-annual-yield").innerHTML = ("+"+Math.floor(annualYieldCalculated2())+"%");
        var totalAnnualMoney = document.getElementById("strategy-suggested-total-annual-money").innerHTML = ("+$"+thousandsSeparatorsForMoney(Math.floor((totalMoneyCalculated2()))));

    } else if (anAmountValue <= 2000 && aDaysValue >= 0) {
        //40% Mercado Pago, 20% Ripio, 40% Dolar oficial 

        //40% Mercado Pago
        var suggestedInvestmentPercentajeOfInvestment1 = document.getElementById("strategy-suggested-1-percentage-of-investment").innerHTML = (40+"%");
        var suggestedInvestmentAssetName1 = document.getElementById("strategy-suggested-1-asset-name").innerHTML = (fondoMercadoPago.assetName + " " + fondoMercadoPago.entityName); //MANUAL
        var suggestedInvestmentTotalMoney1 = document.getElementById("strategy-suggested-1-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(((fondoMercadoPago.annualYield)*1000)))); //MANUAL

        //20% Ripio
        var suggestedInvestmentPercentajeOfInvestment2 = document.getElementById("strategy-suggested-2-percentage-of-investment").innerHTML = (20+"%"); //MANUAL
        var suggestedInvestmentAssetName2 = document.getElementById("strategy-suggested-2-asset-name").innerHTML = (compraDeUsdc.assetName + " " + compraDeUsdc.entityName); //MANUAL
        var suggestedInvestmentTotalMoney2 = document.getElementById("strategy-suggested-2-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(((compraDeUsdc.annualYield)*1000)))); //MANUAL
        
        //40% Dolar oficial
        var suggestedInvestmentPercentajeOfInvestment3 = document.getElementById("strategy-suggested-3-percentage-of-investment").innerHTML = (40+"%");
        var suggestedInvestmentAssetName3 = document.getElementById("strategy-suggested-3-asset-name").innerHTML = (compraDeDolaresOficiales.assetName + " " + compraDeDolaresOficiales.entityName); //MANUAL
        var suggestedInvestmentTotalMoney3 = document.getElementById("strategy-suggested-3-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(((compraDeDolaresOficiales.annualYield)*1000)))); //MANUAL

        annualYieldCalculated2(0.40, 0.20, 0.40, fondoMercadoPago, compraDeUsdc, compraDeDolaresOficiales); 
        var totalAnnualYield = document.getElementById("strategy-suggested-total-annual-yield").innerHTML = ("+"+Math.floor(annualYieldCalculated2())+"%");
        var totalAnnualMoney = document.getElementById("strategy-suggested-total-annual-money").innerHTML = ("+$"+thousandsSeparatorsForMoney(Math.floor((totalMoneyCalculated2()))));
    } 
}

let change = document.getElementById("strategy-amount").addEventListener("change", strategyBasedOnAmount_AndDays_);
let change2 = document.getElementById("strategy-days").addEventListener("change", strategyBasedOnAmount_AndDays_);

