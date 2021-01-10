//JSON
const globalVars = [{
    "inflation12m":52.5, 
    "blueDollar12m":212.4, 
    "blueDollarToday":144, 
    "oficialDollarToday":82.1, 
    "oficialDollar12m":121.1, 
    "dollarTax":1.65
}]; //MANUAL

//Dollar values obtained by API
const dollarValues = function(){
    $.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales", 
    function(posts){
      console.log(posts);
    })
};
dollarValues();