//Splash
setTimeout( function() {
    document.getElementById("splash").style.display = "none";
}, 2000);

//Tooltip
$('#juanma-profile-photo').tooltip('hover');

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
let bestInvestmentAssetAnnualYield1 = document.getElementById("mejores-inversiones-1-annual-yield").innerHTML = ((percentageFormat(investmentAssetAnnualYield1))+"%");
//2
let investmentAssetAnnualYield2 = investmentAssets[1].annualYield;
let bestInvestmentAssetAnnualYield2 = document.getElementById("mejores-inversiones-2-annual-yield").innerHTML = ((percentageFormat(investmentAssetAnnualYield2))+"%");
//3
let investmentAssetAnnualYield3 = investmentAssets[2].annualYield;
let bestInvestmentAssetAnnualYield3 = document.getElementById("mejores-inversiones-3-annual-yield").innerHTML = ((percentageFormat(investmentAssetAnnualYield3))+"%");
//Percentage number with comma
function percentageFormat(percentageNumber) {
    return (
        percentageNumber.toFixed(1).replace('.', ',')
    ) 
}

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
let suggestedInvestmentAssetName1 = document.getElementById("strategy-suggested-1-asset-name").innerHTML = (fondoMercadoPago.assetName + " " + fondoMercadoPago.entityName); //MANUAL
//2
let suggestedInvestmentAssetName2 = document.getElementById("strategy-suggested-2-asset-name").innerHTML = (plazoFijoUVASupervielle.assetName + " " + plazoFijoUVASupervielle.entityName); //MANUAL
//3
let suggestedInvestmentAssetName3 = document.getElementById("strategy-suggested-3-asset-name").innerHTML = (fondoSupervielle.assetName + " " + fondoSupervielle.entityName); //MANUAL
//TotalMoney
//1
let suggestedInvestmentTotalMoney1 = document.getElementById("strategy-suggested-1-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(100000 * 0.25))); //MANUAL
//2
let suggestedInvestmentTotalMoney2 = document.getElementById("strategy-suggested-2-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(100000 * 0.28))); //MANUAL
//3
let suggestedInvestmentTotalMoney3 = document.getElementById("strategy-suggested-3-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(100000 * 0.47))); //MANUAL
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
    return (
        (0.25 * fondoMercadoPago.annualYield) + //MANUAL
        (0.28 * plazoFijoUVASupervielle.annualYield) + //MANUAL
        (0.47 * fondoSupervielle.annualYield) //MANUAL
    ) 
}

function totalMoneyCalculated() {
    return (annualYieldCalculated() * 1000)
}

//Home events
document.getElementById("strategy-suggested-1-percentage-of-investment").onclick = logTheInterestInMercadoPago; //MANUAL

function logTheInterestInSupervielle() {
    console.log("Interested in Supervielle");
}

document.getElementById("interested-in-supervielle").addEventListener("click", logTheInterestInSupervielle); //MANUAL

function logTheInterestInMercadoPago() {
    console.log("Interested in Mercado Pago");
}