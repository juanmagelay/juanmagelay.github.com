//Ranking
function generateOutput(listOfInvestmentAssets){
    let father = document.getElementById("ranking-table");
    let inner = "";
        for (const investmentAsset of listOfInvestmentAssets) {
            inner += 
                `<li class="list-group-item rounded d-flex">
                    <p class="ranking-number align-self-center align-middle">
                        ${investmentAssets.indexOf(investmentAsset) + 1}
                    </p>
                    <div class="d-flex flex-column bd-highlight mb-2 justify-content-start">
                        <p class="p-2 asset-name align-self-start">
                            ${investmentAsset.assetName} ${investmentAsset.entityName}
                        </p>
                        <p class="p-2 asset-economics align-self-start">
                            ${percentageFormat(investmentAsset.annualYield)}%
                        </p>
                    </div>
                </li>`;  
    }
    father.innerHTML = inner;
    console.log("The main function works");
}

generateOutput(investmentAssets);

//Percentage number with comma
function percentageFormat(percentageNumber) {
    return (
        percentageNumber.toFixed(1).replace('.', ',')
    ) 
}



