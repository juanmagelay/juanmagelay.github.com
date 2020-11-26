var inflation12m = 50;
var blueDollar12m = 200;
var blueDollarToday = 158;

function InvestmentAsset(newName, newAnnualYield, newEntityName) {
    this.name = newName;
    this.annualYield = newAnnualYield;
    this.entityName = newEntityName;
}

let plazoFijoTradicionalSupervielle = new InvestmentAsset("Plazo fijo tradicional", 37, "Banco Supervielle");

let plazoFijoUVASupervielle = new InvestmentAsset("Plazo fijo UVA", 1+inflation12m, "Banco Supervielle");

// ( precio dolar en un ano - precio dolar hoy ) / precio dolar hoy
let compraDolarOficialHoyYVentaAlAno = new InvestmentAsset("Compra de dólar oficial y venta al año", ((blueDollar12m - blueDollarToday) / blueDollarToday) * 100, "Banco Supervielle");


console.log(plazoFijoTradicionalSupervielle);

console.log(plazoFijoUVASupervielle);

console.log(compraDolarOficialHoyYVentaAlAno);

