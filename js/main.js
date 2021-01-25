const IndexComponent = {
    render: () => {
      return `
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2">
                <!--  Mejores inversiones  -->
                <div class="home-list container col-md-6 col-xl-5">
                    <h1>Mejores inversiones a 30 días</h1>
                    <div class="card justify-content-center">
                        <ul class="list-group">
                            <li class="list-group-item rounded d-flex">
                                <p class="ranking-number align-self-center align-middle">1</p>
                                <div class="d-flex flex-column bd-highlight mb-2 justify-content-start">
                                    <p class="p-2 asset-name align-self-start" id="mejores-inversiones-1-asset-name">Plazo Fijo en Supervielle</p>
                                    <p class="p-2 asset-economics align-self-start" id="mejores-inversiones-1-annual-yield">37,0%</p>		
                                </div>
                            </li>
                            <li class="list-group-item rounded d-flex">
                                <p class="ranking-number align-self-center align-middle">2</p>
                                <div class="d-flex flex-column bd-highlight mb-2 justify-content-start" id="interested-in-supervielle">
                                    <p class="p-2 asset-name align-self-start" id="mejores-inversiones-2-asset-name">Dólares virtuales en Ripio</p>
                                    <p class="p-2 asset-economics align-self-start" id="mejores-inversiones-2-annual-yield">34,5%</p>		
                                </div>
                            </li>
                            <li class="list-group-item rounded d-flex">
                                <p class="ranking-number align-self-center align-middle">3</p>
                                <div class="d-flex flex-column bd-highlight mb-2 justify-content-start">
                                    <p class="p-2 asset-name align-self-start" id="mejores-inversiones-3-asset-name">Plazo Fijo UVA en Galicia</p>
                                    <p class="p-2 asset-economics align-self-start" id="mejores-inversiones-3-annual-yield">30,9%</p>		
                                </div>
                            </li>
                        </ul>
                        <a href="#/ranking" class="btn btn-primary btn-lg btn-block" role="button" id="view-all-button">Ver todas las inversiones
                        </a>
                    </div>
                </div>

                <!--  Estretegia sugerida  -->
                <div class="home-list container col-md-6 col-xl-5">
                    <h1>Estretegia sugerida para invertir $100.000</h1>
                    <div class="card justify-content-center">
                        <ul class="list-group">
                            <li class="list-group-item rounded d-flex">
                                <p class="ranking-number align-self-center align-middle" id="strategy-suggested-1-percentage-of-investment">50%</p>
                                <div class="d-flex flex-column bd-highlight mb-2 justify-content-start">
                                    <p class="p-2 asset-name align-self-start" id="strategy-suggested-1-asset-name">Dólares virtuales en Ripio</p>
                                    <p class="p-2 asset-economics align-self-start" id="strategy-suggested-1-total-money">$50.000</p>	
                                </div>
                            </li>
                            <li class="list-group-item rounded d-flex">
                                <p class="ranking-number align-self-center align-middle" id="strategy-suggested-2-percentage-of-investment">30%</p>
                                <div class="d-flex flex-column bd-highlight mb-2 justify-content-start">
                                    <p class="p-2 asset-name align-self-start" id="strategy-suggested-2-asset-name">Plazo Fijo en Supervielle</p>
                                    <p class="p-2 asset-economics align-self-start" id="strategy-suggested-2-total-money">$30.000</p>		
                                </div>
                            </li>
                            <li class="list-group-item rounded d-flex">
                                <p class="ranking-number align-self-center align-middle" id="strategy-suggested-3-percentage-of-investment">20%</p>
                                <div class="d-flex flex-column bd-highlight mb-2 justify-content-start">
                                    <p class="p-2 asset-name align-self-start" id="strategy-suggested-3-asset-name">Fondo en Mercado Pago</p>
                                    <p class="p-2 asset-economics align-self-start" id="strategy-suggested-3-total-money">$20.000</p>		
                                </div>
                            </li>
                            <li class="result list-group-item rounded d-flex">
                                <p class="ranking-number align-self-center align-middle" id="strategy-suggested-total-annual-yield">+36%</p>
                                <div class="d-flex flex-column bd-highlight mb-2 justify-content-start">
                                    <p class="p-2 asset-name align-self-start">Rendimiento anual</p>
                                    <p class="p-2 asset-economics align-self-start" id="strategy-suggested-total-annual-money">+$36.000</p>		
                                </div>
                            </li>
                        </ul>
                        <a href="#/strategy" class="btn btn-primary btn-lg btn-block" role="button">Simular una inversión
                        </a>
                    </div>
                </div>
            </div>
        </div>
      `;
    },
    events:() => {
        updateValuesInIndexPage();
        
        //Home events
        document.getElementById("strategy-suggested-1-percentage-of-investment").onclick = logTheInterestInMercadoPago; //MANUAL
        document.getElementById("interested-in-supervielle").addEventListener("click", logTheInterestInSupervielle); //MANUAL
        
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
                percentageNumber.toFixed(2).replace('.', ',')
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
        
        dataFromAPI(posts);
    }
}

function dataFromAPI(posts) {
    console.log("Obtained data from API", posts)
    const officialDollarToday = { officialDollarToday: parseFloat(posts[0].casa.venta.replace(',', '.')) };
    const blueDollarToday = { blueDollarToday: parseFloat(posts[1].casa.venta.replace(',', '.')) };
    globalVars.splice(4,2,officialDollarToday, blueDollarToday)
    console.log(globalVars);
}

const StrategyComponent = {
    render: () => {
      return `
        <div class="container">
            <div class="title-and-filter row d-flex justify-content-between">
                <div class="container col-md-6 col-xl-5">
                    <h1>Estretegia sugerida</h1>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-2">
                <!--  Inputs  -->
                <form class="home-list container col-md-6 col-xl-5">
                    <div class="justify-content-center">
                        <ul class="list-group">
                            <input class="strategy-form-input list-group-item form-control form-control-lg" id="strategy-amount" type="number" min="1" max="99999999" maxlength="8" placeholder="$100.000" autofocus>
                            <input class="strategy-form-input list-group-item form-control form-control-lg" id="strategy-days" type="number" min="1" max="999" maxlength="3" placeholder="30 días">
                            <a href="" class="btn btn-primary btn-lg btn-block" role="button" id="push-data">Calcular
                            </a>
                        </ul>
                    </div>
                </form>

                <!--  Estretegia sugerida  -->
                <div class="home-list second-ranking-col container col-md-6 col-xl-5" id="strategy-container">
                    <div class="card justify-content-center">
                        <ul class="list-group">
                            <li class="list-group-item rounded d-flex">
                                <p class="ranking-number align-self-center align-middle" id="strategy-suggested-1-percentage-of-investment">50%</p>
                                <div class="d-flex flex-column bd-highlight mb-2 justify-content-start">
                                    <p class="p-2 asset-name align-self-start" id="strategy-suggested-1-asset-name">Dólares virtuales en Ripio</p>
                                    <p class="p-2 asset-economics align-self-start" id="strategy-suggested-1-total-money">$50.000</p>	
                                </div>
                            </li>
                            <li class="list-group-item rounded d-flex">
                                <p class="ranking-number align-self-center align-middle" id="strategy-suggested-2-percentage-of-investment">30%</p>
                                <div class="d-flex flex-column bd-highlight mb-2 justify-content-start">
                                    <p class="p-2 asset-name align-self-start" id="strategy-suggested-2-asset-name">Plazo Fijo en Supervielle</p>
                                    <p class="p-2 asset-economics align-self-start" id="strategy-suggested-2-total-money">$30.000</p>	
                                </div>
                            </li>
                            <li class="list-group-item rounded d-flex">
                                <p class="ranking-number align-self-center align-middle" id="strategy-suggested-3-percentage-of-investment">20%</p>
                                <div class="d-flex flex-column bd-highlight mb-2 justify-content-start">
                                    <p class="p-2 asset-name align-self-start" id="strategy-suggested-3-asset-name">Fondo en Mercado Pago</p>
                                    <p class="p-2 asset-economics align-self-start" id="strategy-suggested-3-total-money">$20.000</p>	
                                </div>
                            </li>
                            <li class="result list-group-item rounded d-flex">
                                <p class="ranking-number align-self-center align-middle" id="strategy-suggested-total-annual-yield">+36%</p>
                                <div class="d-flex flex-column bd-highlight mb-2 justify-content-start">
                                    <p class="p-2 asset-name align-self-start">Rendimiento anual</p>
                                    <p class="p-2 asset-economics align-self-start" id="strategy-suggested-total-annual-money">+$36.000</p>		
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      `;
    }
}

const RankingComponent = {
    render: () => {
      return `
        <div class="container">
            <div class="title-and-filter row d-flex justify-content-between">
                <div class="container col-md-6 col-xl-5">
                    <h1>Todas las inversiones</h1>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-2">

                <!-- Filters -->
                <div class="home-list container col-md-6 col-xl-5">
                    <h2>Moneda de inversión</h2>
                    <div class="card justify-content-center" id="currency-filter">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="defaultChecked1" checked>
                            <label class="custom-control-label" for="defaultChecked1">Pesos</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="defaultChecked2" checked>
                            <label class="custom-control-label" for="defaultChecked2">Dólares</label>
                        </div>
                    </div>
                    <!-- Filters for next version
                    <h2 class="after-filters">Tipos de inversiones</h1>
                    <div class="card justify-content-center">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="defaultChecked3" checked>
                            <label class="custom-control-label" for="defaultChecked3">Plazos fijos</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="defaultChecked4" checked>
                            <label class="custom-control-label" for="defaultChecked4">Rulos con dólares</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="defaultChecked5" checked>
                            <label class="custom-control-label" for="defaultChecked5">Cripto</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="defaultChecked6" checked>
                            <label class="custom-control-label" for="defaultChecked6">Fondos de inversión</label>
                        </div>
                    </div>
                    -->
                    <div class="card justify-content-center">
                        <a onclick="filterEvent();" class="after-filters btn btn-primary btn-lg btn-block" id="apply-filters" role="button">Aplicar filtros
                        </a>						
                    </div>
                    <div class="alert alert-warning alert-dismissible fade show" id="alert-currency" role="alert">
                        <strong>¡No se aplicó el filtro!</strong> Elegí al menos una moneda, porque Yuanes todavía no soportamos. Patacones tampoco.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>


                <!--  Columna 1 del ranking  -->
                <div class="home-list container col-md-6 col-xl-5" id="ranking-container">
                    <div class="card justify-content-center">
                        <ul class="list-group" id="ranking-table">
                            <li class="list-group-item rounded d-flex">
                                <p class="ranking-number align-self-center align-middle">1</p>
                                <div class="d-flex flex-column bd-highlight mb-2 justify-content-start">
                                    <p class="p-2 asset-name align-self-start" id="mejores-inversiones-1-asset-name">Plazo Fijo en Supervielle</p>
                                    <p class="p-2 asset-economics align-self-start" id="mejores-inversiones-1-annual-yield">37,0%</p>		
                                </div>
                            </li>
                            <li class="list-group-item rounded d-flex">
                                <p class="ranking-number align-self-center align-middle">2</p>
                                <div class="d-flex flex-column bd-highlight mb-2 justify-content-start">
                                    <p class="p-2 asset-name align-self-start" id="mejores-inversiones-2-asset-name">Dólares virtuales en Ripio</p>
                                    <p class="p-2 asset-economics align-self-start" id="mejores-inversiones-2-annual-yield">34,5%</p>		
                                </div>
                            </li>
                            <li class="list-group-item rounded d-flex">
                                <p class="ranking-number align-self-center align-middle">3</p>
                                <div class="d-flex flex-column bd-highlight mb-2 justify-content-start">
                                    <p class="p-2 asset-name align-self-start" id="mejores-inversiones-3-asset-name">Plazo Fijo UVA en Galicia</p>
                                    <p class="p-2 asset-economics align-self-start" id="mejores-inversiones-3-annual-yield">30,9%</p>		
                                </div>
                            </li>
                            <li class="list-group-item rounded d-flex">
                                <p class="ranking-number align-self-center align-middle">4</p>
                                <div class="d-flex flex-column bd-highlight mb-2 justify-content-start">
                                    <p class="p-2 asset-name align-self-start" id="mejores-inversiones-4-asset-name">Compra y venta de dólares</p>
                                    <p class="p-2 asset-economics align-self-start" id="mejores-inversiones-4-annual-yield">28,1%</p>		
                                </div>
                            </li>
                            <li class="list-group-item rounded d-flex">
                                <p class="ranking-number align-self-center align-middle">5</p>
                                <div class="d-flex flex-column bd-highlight mb-2 justify-content-start">
                                    <p class="p-2 asset-name align-self-start" id="mejores-inversiones-5-asset-name">Fondo en Mercado Pago</p>
                                    <p class="p-2 asset-economics align-self-start" id="mejores-inversiones-5-annual-yield">26,9%</p>		
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      `;
    }
}

const ExpensesComponent = {
    render: () => {
      return `
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2">
                <!--  Card  -->
                <div class="home-list container col-md-6 col-xl-5 card-filled">
                    <h1>Gastos</h1>
                    <div class="card justify-content-center ">
                        <div class="card-body">
                            <h3>Esta sección todavía no está disponible.</h3>
                            <p>Próximamente decidiremos dónde te conviene comprar con la mejor financiación y con qué medio de pago.</p>
                            <div class="text-center">
                                <i class="fas fa-money-bill"></i>
                            </div>
                        </div>					
                    </div>
                </div>
            </div>
        </div>
      `;
    }
}

const ErrorComponent = {
    render: () => {
      return `
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2">
                <!--  Card  -->
                <div class="home-list container col-md-6 col-xl-5 card-filled">
                    <h1>:)</h1>
                    <div class="card justify-content-center ">
                        <div class="card-body">
                            <h3>Ouch! Esta sección no existe</h3>
                            <p>Presioná sobre el logo de Cuotify para ir a un lugar mejor.</p>
                            <div class="text-center">
                                <i class="fas fa-bomb"></i>
                            </div>
                        </div>					
                    </div>
                </div>
            </div>
        </div>
      `;
    }
}

//Splash
setTimeout( function() {
    document.getElementById("splash").style.display = "none";
}, 2000);

$("#human").animate( {"left": "15%"}, 800, "swing", () => {
    $("#plant").animate( {"opacity": "1"}, 200, "linear" );
});

//Updating dollar values in main (HTML)
function updateValuesInIndexPage(){
    
    //Mejores inversiones - Best investment assets - HTML Manipulate
    //AssetNames and EntityNames
    //1
    investmentAssetName1 = investmentAssets[0].assetName;
    investmentEntityName1 = investmentAssets[0].entityName;
    bestInvestmentAssetName1 = document.getElementById("mejores-inversiones-1-asset-name").innerHTML = (investmentAssetName1 + " " + investmentEntityName1);
    //2
    investmentAssetName2 = investmentAssets[1].assetName;
    investmentEntityName2 = investmentAssets[1].entityName;
    bestInvestmentAssetName2 = document.getElementById("mejores-inversiones-2-asset-name").innerHTML = (investmentAssetName2 + " " + investmentEntityName2);
    //3
    investmentAssetName3 = investmentAssets[2].assetName;
    investmentEntityName3 = investmentAssets[2].entityName;
    bestInvestmentAssetName3 = document.getElementById("mejores-inversiones-3-asset-name").innerHTML = (investmentAssetName3 + " " + investmentEntityName3);
    //AnnualYields
    //1
    investmentAssetAnnualYield1 = investmentAssets[0].annualYield;
    bestInvestmentAssetAnnualYield1 = document.getElementById("mejores-inversiones-1-annual-yield").innerHTML = ((percentageFormat(investmentAssetAnnualYield1))+"%");
    //2
    investmentAssetAnnualYield2 = investmentAssets[1].annualYield;
    bestInvestmentAssetAnnualYield2 = document.getElementById("mejores-inversiones-2-annual-yield").innerHTML = ((percentageFormat(investmentAssetAnnualYield2))+"%");
    //3
    investmentAssetAnnualYield3 = investmentAssets[2].annualYield;
    bestInvestmentAssetAnnualYield3 = document.getElementById("mejores-inversiones-3-annual-yield").innerHTML = ((percentageFormat(investmentAssetAnnualYield3))+"%");

    //Estrategia sugerida para invertir - Suggested strategy for invest - HTML Manipulate
    //Three elements to invest
    //PercentajeOfInvestment
    //1
    suggestedInvestmentPercentajeOfInvestment1 = document.getElementById("strategy-suggested-1-percentage-of-investment").innerHTML = (25+"%");
    //2
    suggestedInvestmentPercentajeOfInvestment2 = document.getElementById("strategy-suggested-2-percentage-of-investment").innerHTML = (28+"%");
    //3
    suggestedInvestmentPercentajeOfInvestment3 = document.getElementById("strategy-suggested-3-percentage-of-investment").innerHTML = (47+"%");
    //AssetNames
    //1
    suggestedInvestmentAssetName1 = document.getElementById("strategy-suggested-1-asset-name").innerHTML = (fondoMercadoPago.assetName + " " + fondoMercadoPago.entityName); //MANUAL
    //2
    suggestedInvestmentAssetName2 = document.getElementById("strategy-suggested-2-asset-name").innerHTML = (plazoFijoUVASupervielle.assetName + " " + plazoFijoUVASupervielle.entityName); //MANUAL
    //3
    suggestedInvestmentAssetName3 = document.getElementById("strategy-suggested-3-asset-name").innerHTML = (fondoSupervielle.assetName + " " + fondoSupervielle.entityName); //MANUAL
    //TotalMoney
    //1
    suggestedInvestmentTotalMoney1 = document.getElementById("strategy-suggested-1-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(100000 * 0.25))); //MANUAL
    //2
    suggestedInvestmentTotalMoney2 = document.getElementById("strategy-suggested-2-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(100000 * 0.28))); //MANUAL
    //3
    suggestedInvestmentTotalMoney3 = document.getElementById("strategy-suggested-3-total-money").innerHTML = ("$"+thousandsSeparatorsForMoney(Math.floor(100000 * 0.47))); //MANUAL
    //Total Annual Yield
    //TotalAnnualYield
    totalAnnualYield = document.getElementById("strategy-suggested-total-annual-yield").innerHTML = ("+"+Math.floor(annualYieldCalculated())+"%");
    //TotalAnnualMoney
    totalAnnualMoney = document.getElementById("strategy-suggested-total-annual-money").innerHTML = ("+$"+thousandsSeparatorsForMoney(Math.floor((totalMoneyCalculated()))));
}

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

function logTheInterestInSupervielle() {
    console.log("Interested in Supervielle");
}

function logTheInterestInMercadoPago() {
    console.log("Interested in Mercado Pago");
}

//Tooltip
$('#juanma-profile-photo').tooltip();
