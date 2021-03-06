function updateValuesInStrategyPage() {
    //Estrategia sugerida para invertir - Suggested strategy for invest - HTML Manipulate
    //Three elements to invest
    //PercentajeOfInvestment
    //1
    let suggestedInvestmentPercentajeOfInvestment1 = document.getElementById("strategy-suggested-1-percentage-of-investment").innerHTML = (30+"%");
    //2
    let suggestedInvestmentPercentajeOfInvestment2 = document.getElementById("strategy-suggested-2-percentage-of-investment").innerHTML = (60+"%");
    //3
    let suggestedInvestmentPercentajeOfInvestment3 = document.getElementById("strategy-suggested-3-percentage-of-investment").innerHTML = (10+"%");
    //AssetNames
    //1
    let suggestedInvestmentAssetName1 = document.getElementById("strategy-suggested-1-asset-name").innerHTML = (compraDeDolaresOficiales.assetName + " " + compraDeDolaresOficiales.entityName); //MANUAL
    //2
    let suggestedInvestmentAssetName2 = document.getElementById("strategy-suggested-2-asset-name").innerHTML = (plazoFijoTradicionalReba.assetName + " " + plazoFijoTradicionalReba.entityName); //MANUAL
    //3
    let suggestedInvestmentAssetName3 = document.getElementById("strategy-suggested-3-asset-name").innerHTML = (fondoMercadoPago.assetName + " " + fondoMercadoPago.entityName); //MANUAL
    //TotalMoney 
    //1
    let suggestedInvestmentTotalMoney1 = document.getElementById("strategy-suggested-1-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(100000 * 0.30))); //MANUAL
    //2
    let suggestedInvestmentTotalMoney2 = document.getElementById("strategy-suggested-2-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(100000 * 0.60))); //MANUAL
    //3
    let suggestedInvestmentTotalMoney3 = document.getElementById("strategy-suggested-3-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(100000 * 0.10))); //MANUAL
    //Total Annual Yield
    //TotalAnnualYield
    let totalAnnualYield = document.getElementById("strategy-suggested-total-annual-yield").innerHTML = ("+"+Math.floor(annualYieldCalculated())+"%");
    //TotalAnnualMoney
    let totalAnnualMoney = document.getElementById("strategy-suggested-total-annual-money").innerHTML = ("+$"+thousandsSeparatorsForMoney(Math.floor((totalMoneyCalculated()))));
}

function thousandsSeparatorsForMoney(anAmountOfMoney) {
    var numParts = anAmountOfMoney.toString().split(".");
    numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return numParts.join(".");
}

function annualYieldCalculated() {
    return (
        (0.30 * compraDeDolaresOficiales.annualYield) + //MANUAL
        (0.60 * plazoFijoTradicionalReba.annualYield) + //MANUAL
        (0.10 * fondoMercadoPago.annualYield) //MANUAL
    ) 
}

function totalMoneyCalculated() {
    return (annualYieldCalculated() * 1000)
}


//Strategy amount and days form
//Get values and clicks

function amountValue() {
    let amountValue = document.getElementById("strategy-amount").value;
    console.log("Amount: " + amountValue);
}

function daysValue() {
    let daysValue = document.getElementById("strategy-days").value;
    console.log("Days: " + daysValue);
}

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
    
function strategyBasedOnAmountAndDays(e) {
        e.preventDefault();
        console.log("The main function works");
        var anAmountValue = document.getElementById("strategy-amount").value;
        var aDaysValue = document.getElementById("strategy-days").value;
        
        if (anAmountValue > 2000 && aDaysValue > 90) {
        console.log(anAmountValue);
        
            //25% Plazo fijo UVA Supervielle
            var suggestedInvestmentPercentajeOfInvestment1 = document.getElementById("strategy-suggested-1-percentage-of-investment").innerHTML = (25+"%");
            var suggestedInvestmentAssetName1 = document.getElementById("strategy-suggested-1-asset-name").innerHTML = (plazoFijoUVASupervielle.assetName + " " + plazoFijoUVASupervielle.entityName); //MANUAL
            var suggestedInvestmentTotalMoney1 = document.getElementById("strategy-suggested-1-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(anAmountValue * 0.25))); //MANUAL

            //28% Compra dolar oficial
            var suggestedInvestmentPercentajeOfInvestment2 = document.getElementById("strategy-suggested-2-percentage-of-investment").innerHTML = (28+"%"); //MANUAL
            var suggestedInvestmentAssetName2 = document.getElementById("strategy-suggested-2-asset-name").innerHTML = (compraDeDolaresOficiales.assetName + " " + compraDeDolaresOficiales.entityName); //MANUAL
            var suggestedInvestmentTotalMoney2 = document.getElementById("strategy-suggested-2-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(anAmountValue * 0.28))); //MANUAL
            
            //47% Compra usdc
            var suggestedInvestmentPercentajeOfInvestment3 = document.getElementById("strategy-suggested-3-percentage-of-investment").innerHTML = (47+"%");
            var suggestedInvestmentAssetName3 = document.getElementById("strategy-suggested-3-asset-name").innerHTML = (compraDeUsdc.assetName + " " + compraDeUsdc.entityName); //MANUAL
            var suggestedInvestmentTotalMoney3 = document.getElementById("strategy-suggested-3-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(anAmountValue * 0.47))); //MANUAL

            annualYieldCalculated2(0.25, 0.28, 0.47, plazoFijoUVASupervielle, compraDeDolaresOficiales, compraDeUsdc);
            var totalAnnualYield = document.getElementById("strategy-suggested-total-annual-yield").innerHTML = ("+"+Math.floor(annualYieldCalculated2(0.25, 0.28, 0.47, plazoFijoUVASupervielle, compraDeDolaresOficiales, compraDeUsdc))+"%");
            var totalAnnualMoney = document.getElementById("strategy-suggested-total-annual-money").innerHTML = ("+$"+thousandsSeparatorsForMoney(Math.floor((annualYieldCalculated2(0.25, 0.28, 0.47, plazoFijoUVASupervielle, compraDeDolaresOficiales, compraDeUsdc)*anAmountValue/100))));
        
        } else if (anAmountValue > 2000 && aDaysValue <= 90) {
        
            // 30% Compra De Dolares Oficiales
            var suggestedInvestmentPercentajeOfInvestment1 = document.getElementById("strategy-suggested-1-percentage-of-investment").innerHTML = (30+"%");
            var suggestedInvestmentAssetName1 = document.getElementById("strategy-suggested-1-asset-name").innerHTML = (compraDeDolaresOficiales.assetName + " " + compraDeDolaresOficiales.entityName); //MANUAL
            var suggestedInvestmentTotalMoney1 = document.getElementById("strategy-suggested-1-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(anAmountValue * 0.30))); //MANUAL
        
            // 60% Plazo Fijo Tradicional Reba
            var suggestedInvestmentPercentajeOfInvestment2 = document.getElementById("strategy-suggested-2-percentage-of-investment").innerHTML = (60+"%"); //MANUAL
            var suggestedInvestmentAssetName2 = document.getElementById("strategy-suggested-2-asset-name").innerHTML = (plazoFijoTradicionalReba.assetName + " " + plazoFijoTradicionalReba.entityName); //MANUAL
            var suggestedInvestmentTotalMoney2 = document.getElementById("strategy-suggested-2-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(anAmountValue * 0.60))); //MANUAL

            //10% Fondo Mercado Pago
            var suggestedInvestmentPercentajeOfInvestment3 = document.getElementById("strategy-suggested-3-percentage-of-investment").innerHTML = (10+"%");
            var suggestedInvestmentAssetName3 = document.getElementById("strategy-suggested-3-asset-name").innerHTML = (fondoMercadoPago.assetName + " " + fondoMercadoPago.entityName); //MANUAL
            var suggestedInvestmentTotalMoney3 = document.getElementById("strategy-suggested-3-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(anAmountValue * 0.10))); //MANUAL

            annualYieldCalculated2(0.30, 0.60, 0.10, compraDeDolaresOficiales, plazoFijoTradicionalReba, fondoMercadoPago);
            var totalAnnualYield = document.getElementById("strategy-suggested-total-annual-yield").innerHTML = ("+"+Math.floor(annualYieldCalculated2(0.30, 0.60, 0.10, compraDeDolaresOficiales, plazoFijoTradicionalReba, fondoMercadoPago))+"%");
            var totalAnnualMoney = document.getElementById("strategy-suggested-total-annual-money").innerHTML = ("+$"+thousandsSeparatorsForMoney(Math.floor((annualYieldCalculated2(0.30, 0.60, 0.10, compraDeDolaresOficiales, plazoFijoTradicionalReba, fondoMercadoPago)*anAmountValue/100))));
        
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


