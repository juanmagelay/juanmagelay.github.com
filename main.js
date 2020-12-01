var inflation12m = 50;
var blueDollar12m = 200;
var blueDollarToday = 158;

function InvestmentAsset(newAssettName, newAnnualYield, newEntityName, newEntityTipe, newInvestmentType, newAssetCurrency) {
    this.assetName = newAssettName;
    this.annualYield = newAnnualYield;
    this.entityName = newEntityName;
    this.entityType = newEntityTipe;
    this.entityType.investmentType = newInvestmentType;
    this.assetCurrency = newAssetCurrency;
}

let plazoFijoTradicionalSupervielle = new InvestmentAsset("Plazo fijo tradicional", 37, "Supervielle", "Banco tradicional", "Plazo fijo", "Pesos");

let plazoFijoUVASupervielle = new InvestmentAsset("Plazo fijo UVA", 1+inflation12m, "Supervielle", "Banco tradicional", "Plazo fijo", "Pesos");

// ( precio dolar en un ano - precio dolar hoy ) / precio dolar hoy
let compraDolarOficialHoyYVentaAlAnoSupervielle = new InvestmentAsset("Rulo en dólares", ((blueDollar12m - blueDollarToday) / blueDollarToday) * 100, "Banco Supervielle", "Banco tradicional", "Plazo fijo", "Dólares");

console.log(plazoFijoTradicionalSupervielle);

console.log(plazoFijoUVASupervielle);

console.log(compraDolarOficialHoyYVentaAlAnoSupervielle);

