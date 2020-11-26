function InvestmentAsset(newName, newAnnualYield, newEntityName) {
    this.name = newName;
    this.annualYield = newAnnualYield;
    this.entityName = newEntityName;
}

let plazoFijoTradicionalSupervielle = new InvestmentAsset("Plazo fijo tradicional", 37, "Banco Supervielle");

console.log(plazoFijoTradicionalSupervielle);


