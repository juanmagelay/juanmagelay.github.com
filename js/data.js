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
const dollarValues = function(){
    $.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales", 
    function(posts){
      const officialDollarAPI = { officialDollarAPI: parseFloat(posts[0].casa.venta.replace(',', '.')) };
      const blueDollarAPI = { blueDollarAPI: parseFloat(posts[1].casa.venta.replace(',', '.')) };
      globalVars.push(officialDollarAPI, blueDollarAPI);
      console.log(globalVars);
      console.log(officialDollarAPI);
      console.log(blueDollarAPI);
    })
};

dollarValues();
