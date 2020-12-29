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
    38.5, 
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
    27.2, 
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

var onlyInvestmentAssetsInDollars = [];
//Filters - Investment assets in Dollars
function showOnlyInvestmentAssetsInDollars() {
    let onlyDollars = "Dólares";
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

var onlyInvestmentAssetsInPesos = [];
//Filters - Investment assets in Pesos
function showOnlyInvestmentAssetsInPesos() {
    let onlyPesos = "Pesos";
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