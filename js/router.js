const routes = [
  { path: '/',          component: IndexComponent, },
  { path: '/strategy',  component: StrategyComponent, },
  { path: '/ranking',   component: RankingComponent, },
  { path: '/expenses',  component: ExpensesComponent, },
];



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

//Dollar values obtained by API
$.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales", 
    function(posts){
        console.log("Obtained data from API", posts)
      const officialDollarToday = { officialDollarToday: parseFloat(posts[0].casa.venta.replace(',', '.')) };
      const blueDollarToday = { blueDollarToday: parseFloat(posts[1].casa.venta.replace(',', '.')) };
      globalVars.splice(4,2,officialDollarToday, blueDollarToday)
      console.log(globalVars);

      //Updating dollar values in globalVars
      dollarValuesFromAPI();

      //Updating dollar values in main (HTML)
      if ( location.pathname.split('/').pop() == "" || 
           location.pathname.split('/').pop() == "index.html" ) {
        updateValuesInIndexPage();  
        console.log("Keep calm, this is index.");
      } else if ( location.pathname.split('/').pop() == "ranking.html" ) {
        generateOutput(investmentAssets);
        showOnlyInvestmentAssetsInDollars();
        showOnlyInvestmentAssetsInPesos();
        console.log("Keep calm, this is ranking.");
      } else if ( location.pathname.split('/').pop() == "strategy.html" ) {
        console.log("Keep calm, this is strategy.");
      }
    })

