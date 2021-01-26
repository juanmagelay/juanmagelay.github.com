const routes = [
  { path: '/',          component: IndexComponent, },
  { path: '/strategy',  component: StrategyComponent, },
  { path: '/ranking',   component: RankingComponent, },
  { path: '/expenses',  component: ExpensesComponent, },
];

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

//TEST
console.log("The parse location is: "+ parseLocation());

const findComponentByPath = (path, routes) => routes.find(r => r.path == path || undefined);

const router = () => {
  const path = parseLocation(); 
  const { component = ErrorComponent } = findComponentByPath(path, routes) || {}; 
  //VER SI FALTA ALGO
  $.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales", (resultadoAPI) => {
    //console.log(component.render());  
    dollarValuesFromAPI(resultadoAPI);
	  $('#app').html(component.render());
	  component.events();
  })
}

$( window ).on( 'load', function()  {
  router();
});

$( window ).on( 'hashchange', function( e ) {
    router();
} );
