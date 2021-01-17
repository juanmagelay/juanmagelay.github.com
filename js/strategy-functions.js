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


//Strategy amount and days form
//Get values

let strategyAmount = document.getElementById("strategy-amount").onkeyup = amountValue;

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


//Strategy based on the amount and days

function annualYieldCalculated2(percentage1, percentage2, percentage3, asset1, asset2, asset3) {
    return (
        (percentage1 * asset1.annualYield) +
        (percentage2 * asset2.annualYield) +
        (percentage3 * asset3.annualYield)
    ) 
}

//From Calcular button
document.getElementById("push-data").onclick = strategyBasedOnAmountAndDays;

//From Enter key
$("form").on('keyup',function(e) {
    if(e.which == 13) { //13 = Enter code
        strategyBasedOnAmountAndDays(e);
    } else if (e.which == 9) { //9 = Tab code
        console.log("You are an advanced user.");
        localStorage.setItem('UserType', 'Advanced');
    }
});
    
function strategyBasedOnAmountAndDays(e) {
        e.preventDefault();
        console.log("The main function works");
        var anAmountValue = document.getElementById("strategy-amount").value;
        var aDaysValue = document.getElementById("strategy-days").value;
        
        if (anAmountValue > 2000 && aDaysValue > 90) {
        console.log(anAmountValue);
        
            //25% Mercado Pago
            var suggestedInvestmentPercentajeOfInvestment1 = document.getElementById("strategy-suggested-1-percentage-of-investment").innerHTML = (25+"%");
            var suggestedInvestmentAssetName1 = document.getElementById("strategy-suggested-1-asset-name").innerHTML = (fondoMercadoPago.assetName + " " + fondoMercadoPago.entityName); //MANUAL
            var suggestedInvestmentTotalMoney1 = document.getElementById("strategy-suggested-1-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(anAmountValue * 0.25))); //MANUAL

            //28% Plazo fijo UVA
            var suggestedInvestmentPercentajeOfInvestment2 = document.getElementById("strategy-suggested-2-percentage-of-investment").innerHTML = (28+"%"); //MANUAL
            var suggestedInvestmentAssetName2 = document.getElementById("strategy-suggested-2-asset-name").innerHTML = (plazoFijoUVASupervielle.assetName + " " + plazoFijoUVASupervielle.entityName); //MANUAL
            var suggestedInvestmentTotalMoney2 = document.getElementById("strategy-suggested-2-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(anAmountValue * 0.28))); //MANUAL
            
            //47% Fondo Supervielle
            var suggestedInvestmentPercentajeOfInvestment3 = document.getElementById("strategy-suggested-3-percentage-of-investment").innerHTML = (47+"%");
            var suggestedInvestmentAssetName3 = document.getElementById("strategy-suggested-3-asset-name").innerHTML = (fondoSupervielle.assetName + " " + fondoSupervielle.entityName); //MANUAL
            var suggestedInvestmentTotalMoney3 = document.getElementById("strategy-suggested-3-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(anAmountValue * 0.47))); //MANUAL

            annualYieldCalculated2(0.25, 0.28, 0.47, fondoMercadoPago, plazoFijoUVASupervielle, fondoSupervielle);
            var totalAnnualYield = document.getElementById("strategy-suggested-total-annual-yield").innerHTML = ("+"+Math.floor(annualYieldCalculated2(0.25, 0.28, 0.47, fondoMercadoPago, plazoFijoUVASupervielle, fondoSupervielle))+"%");
            var totalAnnualMoney = document.getElementById("strategy-suggested-total-annual-money").innerHTML = ("+$"+thousandsSeparatorsForMoney(Math.floor((annualYieldCalculated2(0.25, 0.28, 0.47, fondoMercadoPago, plazoFijoUVASupervielle, fondoSupervielle)*anAmountValue/100))));
        
        } else if (anAmountValue > 2000 && aDaysValue <= 90) {
        
            // 25% Mercado Pago
            var suggestedInvestmentPercentajeOfInvestment1 = document.getElementById("strategy-suggested-1-percentage-of-investment").innerHTML = (25+"%");
            var suggestedInvestmentAssetName1 = document.getElementById("strategy-suggested-1-asset-name").innerHTML = (fondoMercadoPago.assetName + " " + fondoMercadoPago.entityName); //MANUAL
            var suggestedInvestmentTotalMoney1 = document.getElementById("strategy-suggested-1-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(anAmountValue * 0.25))); //MANUAL
        
            // 50% Plazo fijo
            var suggestedInvestmentPercentajeOfInvestment2 = document.getElementById("strategy-suggested-2-percentage-of-investment").innerHTML = (50+"%"); //MANUAL
            var suggestedInvestmentAssetName2 = document.getElementById("strategy-suggested-2-asset-name").innerHTML = (plazoFijoTradicionalSupervielle.assetName + " " + plazoFijoTradicionalSupervielle.entityName); //MANUAL
            var suggestedInvestmentTotalMoney2 = document.getElementById("strategy-suggested-2-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(anAmountValue * 0.50))); //MANUAL

            //25% Dolar oficial
            var suggestedInvestmentPercentajeOfInvestment3 = document.getElementById("strategy-suggested-3-percentage-of-investment").innerHTML = (25+"%");
            var suggestedInvestmentAssetName3 = document.getElementById("strategy-suggested-3-asset-name").innerHTML = (compraDeDolaresOficiales.assetName + " " + compraDeDolaresOficiales.entityName); //MANUAL
            var suggestedInvestmentTotalMoney3 = document.getElementById("strategy-suggested-3-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(anAmountValue * 0.25))); //MANUAL

            annualYieldCalculated2(0.25, 0.50, 0.25, fondoMercadoPago, plazoFijoTradicionalSupervielle, compraDeDolaresOficiales);
            var totalAnnualYield = document.getElementById("strategy-suggested-total-annual-yield").innerHTML = ("+"+Math.floor(annualYieldCalculated2(0.25, 0.50, 0.25, fondoMercadoPago, plazoFijoTradicionalSupervielle, compraDeDolaresOficiales))+"%");
            var totalAnnualMoney = document.getElementById("strategy-suggested-total-annual-money").innerHTML = ("+$"+thousandsSeparatorsForMoney(Math.floor((annualYieldCalculated2(0.25, 0.50, 0.25, fondoMercadoPago, plazoFijoTradicionalSupervielle, compraDeDolaresOficiales)*anAmountValue/100))));
        
        } else if (anAmountValue < 1000 && aDaysValue >= 0) {
            
            //20% Mercado Pago
            var suggestedInvestmentPercentajeOfInvestment1 = document.getElementById("strategy-suggested-1-percentage-of-investment").innerHTML = (20+"%");
            var suggestedInvestmentAssetName1 = document.getElementById("strategy-suggested-1-asset-name").innerHTML = (fondoMercadoPago.assetName + " " + fondoMercadoPago.entityName); //MANUAL
            var suggestedInvestmentTotalMoney1 = document.getElementById("strategy-suggested-1-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(anAmountValue * 0.20))); //MANUAL
            
            //60% Ripio
            var suggestedInvestmentPercentajeOfInvestment2 = document.getElementById("strategy-suggested-2-percentage-of-investment").innerHTML = (60+"%"); //MANUAL
            var suggestedInvestmentAssetName2 = document.getElementById("strategy-suggested-2-asset-name").innerHTML = (compraDeUsdc.assetName + " " + compraDeUsdc.entityName); //MANUAL
            var suggestedInvestmentTotalMoney2 = document.getElementById("strategy-suggested-2-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(anAmountValue * 0.60))); //MANUAL
            
            //20% Dolar oficial
            var suggestedInvestmentPercentajeOfInvestment3 = document.getElementById("strategy-suggested-3-percentage-of-investment").innerHTML = (20+"%");
            var suggestedInvestmentAssetName3 = document.getElementById("strategy-suggested-3-asset-name").innerHTML = (compraDeDolaresOficiales.assetName + " " + compraDeDolaresOficiales.entityName); //MANUAL
            var suggestedInvestmentTotalMoney3 = document.getElementById("strategy-suggested-3-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(anAmountValue * 0.20))); //MANUAL

            annualYieldCalculated2(0.20, 0.60, 0.20, fondoMercadoPago, compraDeUsdc, compraDeDolaresOficiales); 
            var totalAnnualYield = document.getElementById("strategy-suggested-total-annual-yield").innerHTML = ("+"+Math.floor(annualYieldCalculated2(0.20, 0.60, 0.20, fondoMercadoPago, compraDeUsdc, compraDeDolaresOficiales))+"%");
            var totalAnnualMoney = document.getElementById("strategy-suggested-total-annual-money").innerHTML = ("+$"+thousandsSeparatorsForMoney(Math.floor((annualYieldCalculated2(0.20, 0.60, 0.20, fondoMercadoPago, compraDeUsdc, compraDeDolaresOficiales)*anAmountValue/100))));

        } else if (anAmountValue <= 2000 && aDaysValue >= 0) {
            
            //40% Mercado Pago
            var suggestedInvestmentPercentajeOfInvestment1 = document.getElementById("strategy-suggested-1-percentage-of-investment").innerHTML = (40+"%");
            var suggestedInvestmentAssetName1 = document.getElementById("strategy-suggested-1-asset-name").innerHTML = (fondoMercadoPago.assetName + " " + fondoMercadoPago.entityName); //MANUAL
            var suggestedInvestmentTotalMoney1 = document.getElementById("strategy-suggested-1-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(anAmountValue * 0.40))); //MANUAL

            //20% Ripio
            var suggestedInvestmentPercentajeOfInvestment2 = document.getElementById("strategy-suggested-2-percentage-of-investment").innerHTML = (20+"%"); //MANUAL
            var suggestedInvestmentAssetName2 = document.getElementById("strategy-suggested-2-asset-name").innerHTML = (compraDeUsdc.assetName + " " + compraDeUsdc.entityName); //MANUAL
            var suggestedInvestmentTotalMoney2 = document.getElementById("strategy-suggested-2-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(anAmountValue * 0.20))); //MANUAL
            
            //40% Dolar oficial
            var suggestedInvestmentPercentajeOfInvestment3 = document.getElementById("strategy-suggested-3-percentage-of-investment").innerHTML = (40+"%");
            var suggestedInvestmentAssetName3 = document.getElementById("strategy-suggested-3-asset-name").innerHTML = (compraDeDolaresOficiales.assetName + " " + compraDeDolaresOficiales.entityName); //MANUAL
            var suggestedInvestmentTotalMoney3 = document.getElementById("strategy-suggested-3-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(anAmountValue * 0.40))); //MANUAL

            annualYieldCalculated2(0.40, 0.20, 0.40, fondoMercadoPago, compraDeUsdc, compraDeDolaresOficiales); 
            var totalAnnualYield = document.getElementById("strategy-suggested-total-annual-yield").innerHTML = ("+"+Math.floor(annualYieldCalculated2(0.40, 0.20, 0.40, fondoMercadoPago, compraDeUsdc, compraDeDolaresOficiales))+"%");
            var totalAnnualMoney = document.getElementById("strategy-suggested-total-annual-money").innerHTML = ("+$"+thousandsSeparatorsForMoney(Math.floor((annualYieldCalculated2(0.40, 0.20, 0.40, fondoMercadoPago, compraDeUsdc, compraDeDolaresOficiales)*anAmountValue/100))));
        } 
}


