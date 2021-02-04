//JSON
const globalVars = [{
    "inflation12m":52.5 //MANUAL
  }, { 
    "officialDollar12m":121.1 //MANUAL
  }, { 
    "blueDollar12m":212.4 //MANUAL
  }, { 
    "dollarTax":1.65 //MANUAL
  }, { 
    "officialDollarToday":82.1
  }, { 
    "blueDollarToday":144
  }
]; 

//Updating dollar values from API
function dollarValuesFromAPI(APIresult) {
    //TEST
    console.log("The old value of official dollar is: " + officialDollarToday);
    
    officialDollarToday = { officialDollarToday: parseFloat(APIresult[0].casa.venta.replace(',', '.')) };
    blueDollarToday = { blueDollarToday: parseFloat(APIresult[1].casa.venta.replace(',', '.')) };
    globalVars.splice(4,2,officialDollarToday, blueDollarToday)
    officialDollarToday = globalVars[4].officialDollarToday;
    blueDollarToday = globalVars[5].blueDollarToday;
    
    //TEST
    console.log("VER");
    console.log(globalVars);
    console.log("The new value of official dollar is: " + officialDollarToday);
    console.log("The old value of rulo in dollars is: " + ruloConDolaresOficiales.annualYield);

    //TEST
    console.log("The old value of rulo in dollars is: " + ruloConDolaresOficiales.annualYield);
    //Investment assets in dollars
    ruloConDolaresOficiales = new InvestmentAsset( //MANUAL
        "Rulo dólar oficial", 
        ((blueDollar12m / blueDollarToday) * blueDollarToday) / (officialDollarToday * dollarTax), 
        "", 
        "Casas de cambio", 
        "Rulos con dólares", 
        "Dólares"
    );
    compraDeDolaresOficiales = new InvestmentAsset( //MANUAL
        "Dólar oficial", 
        officialDollar12m / (officialDollarToday * dollarTax), 
        "", 
        "Bancos tradicionales", 
        "Rulos con dólares", 
        "Dólares"
    );
    //TEST
    console.log("The new value of rulo in dollars is: " + ruloConDolaresOficiales.annualYield);

    //Sort of annualYields
    annualYields = [
        plazoFijoTradicionalSupervielle.annualYield, 
        plazoFijoTradicionalBrubank.annualYield,
        plazoFijoTradicionalReba.annualYield,
        plazoFijoTradicionalWilobank.annualYield,
        plazoFijoUVASupervielle.annualYield, 
        cajaRemuneradaReba.annualYield, 
        fondoMercadoPago.annualYield,
        ruloConDolaresOficiales.annualYield,
        compraDeDolaresOficiales.annualYield,
        compraDeUsdc.annualYield
    ];
    annualYieldRanking();

    //Sort of InvestmentAssets by AnnualYields - AKA Top 10 Investment Assets
    investmentAssets = [
        plazoFijoTradicionalSupervielle, 
        plazoFijoTradicionalBrubank,
        plazoFijoTradicionalReba,
        plazoFijoTradicionalWilobank,
        plazoFijoUVASupervielle, 
        cajaRemuneradaReba, 
        fondoMercadoPago,
        ruloConDolaresOficiales,
        compraDeDolaresOficiales,
        compraDeUsdc
    ];
    investmentAssetsRankingByAnuualYields();

    showOnlyInvestmentAssetsInDollars();
} 

//Global vars from data
let inflation12m = globalVars[0].inflation12m; 
let officialDollar12m = globalVars[1].officialDollar12m;
let blueDollar12m = globalVars[2].blueDollar12m;
let dollarTax = globalVars[3].dollarTax;
let officialDollarToday = globalVars[4].officialDollarToday;
let blueDollarToday = globalVars[5].blueDollarToday;

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
    "Bancos digitales", 
    "Plazo fijo", 
    "Pesos"
);
let plazoFijoTradicionalReba = new InvestmentAsset( //MANUAL
    "Plazo fijo", 
    38, 
    "Reba", 
    "Bancos digitales", 
    "Plazo fijo", 
    "Pesos"
);
let plazoFijoTradicionalWilobank = new InvestmentAsset( //MANUAL
    "Plazo fijo", 
    37, 
    "Wilobank", 
    "Bancos digitales", 
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
let cajaRemuneradaReba = new InvestmentAsset( //MANUAL
    "Caja remunerada", 
    7, 
    "Reba", 
    "Bancos digitales", 
    "Caja remunerada", 
    "Pesos"
);
let fondoMercadoPago = new InvestmentAsset( //MANUAL
    "Fondo", 
    30, 
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
    officialDollar12m / (88 * dollarTax), 
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
console.log(plazoFijoTradicionalSupervielle.annualYield);


//Sort of annualYields
let annualYields = [
    plazoFijoTradicionalSupervielle.annualYield, 
    plazoFijoTradicionalBrubank.annualYield,
    plazoFijoTradicionalReba.annualYield,
    plazoFijoTradicionalWilobank.annualYield,
    plazoFijoUVASupervielle.annualYield, 
    cajaRemuneradaReba.annualYield, 
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
    cajaRemuneradaReba, 
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
    onlyInvestmentAssetsInDollars = [];
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