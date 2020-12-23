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
let bestInvestmentAssetAnnualYield1 = document.getElementById("mejores-inversiones-1-annual-yield").innerHTML = ((percentageFormat(investmentAssetAnnualYield1))+"%");
//2
let investmentAssetAnnualYield2 = investmentAssets[1].annualYield;
let bestInvestmentAssetAnnualYield2 = document.getElementById("mejores-inversiones-2-annual-yield").innerHTML = ((percentageFormat(investmentAssetAnnualYield2))+"%");
//3
let investmentAssetAnnualYield3 = investmentAssets[2].annualYield;
let bestInvestmentAssetAnnualYield3 = document.getElementById("mejores-inversiones-3-annual-yield").innerHTML = ((percentageFormat(investmentAssetAnnualYield3))+"%");
//4
let investmentAssetAnnualYield4 = investmentAssets[3].annualYield;
let bestInvestmentAssetAnnualYield4 = document.getElementById("mejores-inversiones-4-annual-yield").innerHTML = ((percentageFormat(investmentAssetAnnualYield4))+"%");
//5
let investmentAssetAnnualYield5 = investmentAssets[4].annualYield;
let bestInvestmentAssetAnnualYield5 = document.getElementById("mejores-inversiones-5-annual-yield").innerHTML = ((percentageFormat(investmentAssetAnnualYield5))+"%");
//6
let investmentAssetAnnualYield6 = investmentAssets[5].annualYield;
let bestInvestmentAssetAnnualYield6 = document.getElementById("mejores-inversiones-6-annual-yield").innerHTML = ((percentageFormat(investmentAssetAnnualYield6))+"%");
//7
let investmentAssetAnnualYield7 = investmentAssets[6].annualYield;
let bestInvestmentAssetAnnualYield7 = document.getElementById("mejores-inversiones-7-annual-yield").innerHTML = ((percentageFormat(investmentAssetAnnualYield7))+"%");
//8
let investmentAssetAnnualYield8 = investmentAssets[7].annualYield;
let bestInvestmentAssetAnnualYield8 = document.getElementById("mejores-inversiones-8-annual-yield").innerHTML = ((percentageFormat(investmentAssetAnnualYield8))+"%");
//9
let investmentAssetAnnualYield9 = investmentAssets[8].annualYield;
let bestInvestmentAssetAnnualYield9 = document.getElementById("mejores-inversiones-9-annual-yield").innerHTML = ((percentageFormat(investmentAssetAnnualYield9))+"%");
//10
let investmentAssetAnnualYield10 = investmentAssets[9].annualYield;
let bestInvestmentAssetAnnualYield10 = document.getElementById("mejores-inversiones-10-annual-yield").innerHTML = ((percentageFormat(investmentAssetAnnualYield10))+"%");
//Percentage number with comma
function percentageFormat(percentageNumber) {
    return (
        percentageNumber.toFixed(1).replace('.', ',')
    ) 
}