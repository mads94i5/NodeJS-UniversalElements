export function parseElementData(element, elements, isNew = true) {
    Object.keys(element).forEach(key => {
        if (element[key] === "") {
            element[key] = null;
        }
    });
    if (element.atomicNumber === null) return null;
    if (isNaN(element.atomicNumber)) return null;
    for (const e of elements) {
        if (Number(e.atomicNumber) === Number(element.atomicNumber) && isNew) return false;
    }
    if (element.name === null || element.name.trim() === "") return null;
    if (element.symbol === null || element.symbol.trim() === "") return null;
    if (element.densitySTP !== null && !isNaN(element.densitySTP)) return null;
    if (element.densityLiquid !== null && !isNaN(element.densityLiquid)) return null;
    if (element.radiusCalculated !== null && !isNaN(element.radiusCalculated)) return null;
    if (element.radiusEmpirical !== null && !isNaN(element.radiusEmpirical)) return null;
    if (element.radiusCovalent !== null && !isNaN(element.radiusCovalent)) return null;
    if (element.radiusVanDelWaals !== null && !isNaN(element.radiusVanDelWaals)) return null;
    if (element.hardnessBrinell !== null && !isNaN(element.hardnessBrinell)) return null;
    if (element.hardnessMohs !== null && !isNaN(element.hardnessMohs)) return null;
    if (element.hardnessVickers !== null && !isNaN(element.hardnessVickers)) return null;
    if (element.modulusBulk !== null && !isNaN(element.modulusBulk)) return null;
    if (element.modulusShear !== null && !isNaN(element.modulusShear)) return null;
    if (element.modulusYoung !== null && !isNaN(element.modulusYoung)) return null;
    if (element.period !== null && !isNaN(element.period)) return null;
    if (element.groupNameIUPAC !== null && !isNaN(element.groupNameIUPAC)) return null;
    if (element.meltingPointK !== null && !isNaN(element.meltingPointK)) return null;
    if (element.boilingPointK !== null && !isNaN(element.boilingPointK)) return null;
    if (element.meltingPointC !== null && !isNaN(element.meltingPointC)) return null;
    if (element.boilingPointC !== null && !isNaN(element.boilingPointC)) return null;
    if (element.meltingPointF !== null && !isNaN(element.meltingPointF)) return null;
    if (element.boilingPointF !== null && !isNaN(element.boilingPointF)) return null;
    if (element.electronAffinity !== null && !isNaN(element.electronAffinity)) return null;
    if (element.electronegativity !== null && !isNaN(element.electronegativity)) return null;
    if (element.ionRadius !== null && !isNaN(element.ionRadius)) return null;
    if (element.conductivityThermal !== null && !isNaN(element.conductivityThermal)) return null;
    if (element.conductivityElectric !== null && !isNaN(element.conductivityElectric)) return null;
    if (element.heatSpecific !== null && !isNaN(element.heatSpecific)) return null;
    if (element.heatVaporization !== null && !isNaN(element.heatVaporization)) return null;
    if (element.heatFusion !== null && !isNaN(element.heatFusion)) return null;
    if (element.abundanceUniverse !== null && !isNaN(element.abundanceUniverse)) return null;
    if (element.abundanceSolar !== null && !isNaN(element.abundanceSolar)) return null;
    if (element.abundanceMeteor !== null && !isNaN(element.abundanceMeteor)) return null;
    if (element.abundanceCrust !== null && !isNaN(element.abundanceCrust)) return null;
    if (element.abundanceOcean !== null && !isNaN(element.abundanceOcean)) return null;
    if (element.abundanceHuman !== null && !isNaN(element.abundanceHuman)) return null;
    if (element.atomicNumber !== null) {
        element.atomicNumber = Number(element.atomicNumber);
    }
    if (element.densitySTP !== null) {
        element.densitySTP = Number(element.densitySTP);
    }
    if (element.densityLiquid !== null) {
        element.densityLiquid = Number(element.densityLiquid);
    }
    if (element.radiusCalculated !== null) {
        element.radiusCalculated = Number(element.radiusCalculated);
    }
    if (element.radiusEmpirical !== null) {
        element.radiusEmpirical = Number(element.radiusEmpirical);
    }
    if (element.radiusCovalent !== null) {
        element.radiusCovalent = Number(element.radiusCovalent);
    }
    if (element.radiusVanDelWaals !== null) {
        element.radiusVanDelWaals = Number(element.radiusVanDelWaals);
    }
    if (element.hardnessBrinell !== null) {
        element.hardnessBrinell = Number(element.hardnessBrinell);
    }
    if (element.hardnessMohs !== null) {
        element.hardnessMohs = Number(element.hardnessMohs);
    }
    if (element.hardnessVickers !== null) {
        element.hardnessVickers = Number(element.hardnessVickers);
    }
    if (element.modulusBulk !== null) {
        element.modulusBulk = Number(element.modulusBulk);
    }
    if (element.modulusShear !== null) {
        element.modulusShear = Number(element.modulusShear);
    }
    if (element.modulusYoung !== null) {
        element.modulusYoung = Number(element.modulusYoung);
    }
    if (element.energyLevels === null) {
        element.energyLevels = [];
    }
    if (!Array.isArray(element.energyLevels)) {
        element.energyLevels = element.energyLevels.split(",").map((level) => Number(level.trim()));
    }
    if (element.period !== null) {
        element.period = Number(element.period);
    }
    if (element.groupNameIUPAC !== null) {
        element.groupNameIUPAC = Number(element.groupNameIUPAC);
    }
    if (element.oxidationStates === null) {
        element.oxidationStates = [];
    }
    if (!Array.isArray(element.oxidationStates)) {
        element.oxidationStates = element.oxidationStates.split(",").map((states) => Number(states.trim()));
    }
    if (element.meltingPointK !== null) {
        element.meltingPointK = Number(element.meltingPointK);
    }
    if (element.boilingPointK !== null) {
        element.boilingPointK = Number(element.boilingPointK);
    }
    if (element.meltingPointC !== null) {
        element.meltingPointC = Number(element.meltingPointC);
    }
    if (element.boilingPointC !== null) {
        element.boilingPointC = Number(element.boilingPointC);
    }
    if (element.meltingPointF !== null) {
        element.meltingPointF = Number(element.meltingPointF);
    }
    if (element.boilingPointF !== null) {
        element.boilingPointF = Number(element.boilingPointF);
    }
    if (element.electronAffinity !== null) {
        element.electronAffinity = Number(element.electronAffinity);
    }
    if (element.electronegativity !== null) {
        element.electronegativity = Number(element.electronegativity);
    }
    if (element.ionizationEnergy === null) {
        element.ionizationEnergy = [];
    }
    if (!Array.isArray(element.ionizationEnergy)) {
        element.ionizationEnergy = element.ionizationEnergy.split(",").map((energy) => Number(energy.trim()));
    }
    if (element.ionRadius !== null) {
        element.ionRadius = Number(element.ionRadius);
    }
    if (element.conductivityThermal !== null) {
        element.conductivityThermal = Number(element.conductivityThermal);
    }
    if (element.conductivityElectric !== null) {
        element.conductivityElectric = Number(element.conductivityElectric);
    }
    if (element.heatSpecific !== null) {
        element.heatSpecific = Number(element.heatSpecific);
    }
    if (element.heatVaporization !== null) {
        element.heatVaporization = Number(element.heatVaporization);
    }
    if (element.heatFusion !== null) {
        element.heatFusion = Number(element.heatFusion);
    }
    if (element.abundanceUniverse !== null) {
        element.abundanceUniverse = Number(element.abundanceUniverse);
    }
    if (element.abundanceSolar !== null) {
        element.abundanceSolar = Number(element.abundanceSolar);
    }
    if (element.abundanceMeteor !== null) {
        element.abundanceMeteor = Number(element.abundanceMeteor);
    }
    if (element.abundanceCrust !== null) {
        element.abundanceCrust = Number(element.abundanceCrust);
    }
    if (element.abundanceOcean !== null) {
        element.abundanceOcean = Number(element.abundanceOcean);
    }
    if (element.abundanceHuman !== null) {
        element.abundanceHuman = Number(element.abundanceHuman);
    }
    return element;
}