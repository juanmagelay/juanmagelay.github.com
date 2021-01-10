//JSON
const globalVars = [{
    "inflation12m":52.5 //MANUAL
  }, { 
    "blueDollar12m":212.4 //MANUAL
  }, { 
    "blueDollarToday":144
  }, { 
    "oficialDollarToday":82.1
  }, { 
    "oficialDollar12m":121.1 //MANUAL
  }, { 
    "dollarTax":1.65 //MANUAL
  }
]; 

//Dollar values obtained by API
const dollarValues = function(){
    $.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales", 
    function(posts){
      const officialDollarAPI = { officialDollarAP: parseFloat(posts[0].casa.venta.replace(',', '.')) };
      const blueDollarAPI = posts[1].casa.venta;
      globalVars.push(officialDollarAPI);
      console.log(globalVars);
      console.log(officialDollarAPI);
      console.log(blueDollarAPI);
    })
};

dollarValues();

// console.log(officialDollarAPI); Outside of function doesn't work.

