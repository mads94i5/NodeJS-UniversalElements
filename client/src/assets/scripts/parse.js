import toastr from "toastr";
import { fetchGetJson, fetchPostJson } from "./fetch";
import { API_URL, AUTH_URL } from "./settings";

export async function parseElementFormData(form, isNew = true) {
    let elements = [];
    try {
        await fetchPostJson(AUTH_URL + "auth/refresh");
        const response = await fetchGetJson(API_URL + "api/elements");
        if (response !== undefined) {
            elements = response;
        } else {
            toastr.error(response.error);
        }
    } catch (error) {
        if (error.message) {
            if (error.message.toString().includes("Too many r")) {
                toastr.error("Too many requests");
            } else {
                toastr.error(error.message);
            }
        } else if (error.fullResponse) {
            toastr.error(error.fullResponse.error);
        } else {
            toastr.error("An unknown error occurred.");
        }
    }

    let formElement = /** @type {HTMLFormElement} */ (form);
    const formData = new FormData(formElement);
    const parsedData = {};
    formData.forEach((value, key) => {
        parsedData[key] = value;
    });
    Object.keys(parsedData).forEach(key => {
        if (parsedData[key] === "") {
            parsedData[key] = null;
        }
    });
    if (parsedData.atomicNumber === null) {
        toastr.error("Atomic Number is required.");
        return false;
    }
    if (isNaN(parsedData.atomicNumber)) {
        toastr.error("Atomic Number must be a number.");
        return false;
    }
    for (const element of elements) {
        if (Number(element.atomicNumber) === Number(parsedData.atomicNumber) && isNew) {
            toastr.error("Atomic Number is already in use.");
            return false;
        }
    }
    if (parsedData.name === null || parsedData.name.trim() === "") {
        toastr.error("Name is required.");
        return false;
    }
    if (parsedData.symbol === null || parsedData.symbol.trim() === "") {
        toastr.error("Symbol is required.");
        return false;
    }
    if (parsedData.densitySTP !== null && !isNaN(parsedData.densitySTP)) {
        toastr.error("Density STP must be a number.");
        return false;
    }
    if (parsedData.densityLiquid !== null && !isNaN(parsedData.densityLiquid)) {
        toastr.error("Density Liquid must be a number.");
        return false;
    }
    if (parsedData.radiusCalculated !== null && !isNaN(parsedData.radiusCalculated)) {
        toastr.error("Radius Calculated must be a number.");
        return false;
    }
    if (parsedData.radiusEmpirical !== null && !isNaN(parsedData.radiusEmpirical)) {
        toastr.error("Radius Empirical must be a number.");
        return false;
    }
    if (parsedData.radiusCovalent !== null && !isNaN(parsedData.radiusCovalent)) {
        toastr.error("Radius Covalent must be a number.");
        return false;
    }
    if (parsedData.radiusVanDelWaals !== null && !isNaN(parsedData.radiusVanDelWaals)) {
        toastr.error("Radius Van Del Waals must be a number.");
        return false;
    }
    if (parsedData.hardnessBrinell !== null && !isNaN(parsedData.hardnessBrinell)) {
        toastr.error("Hardness Brinell must be a number.");
        return false;
    }
    if (parsedData.hardnessMohs !== null && !isNaN(parsedData.hardnessMohs)) {
        toastr.error("Hardness Mohs must be a number.");
        return false;
    }
    if (parsedData.hardnessVickers !== null && !isNaN(parsedData.hardnessVickers)) {
        toastr.error("Hardness Vickers must be a number.");
        return false;
    }
    if (parsedData.modulusBulk !== null && !isNaN(parsedData.modulusBulk)) {
        toastr.error("Modulus Bulk must be a number.");
        return false;
    }
    if (parsedData.modulusShear !== null && !isNaN(parsedData.modulusShear)) {
        toastr.error("Modulus Shear must be a number.");
        return false;
    }
    if (parsedData.modulusYoung !== null && !isNaN(parsedData.modulusYoung)) {
        toastr.error("Modulus Young must be a number.");
        return false;
    }
    if (parsedData.period !== null && !isNaN(parsedData.period)) {
        toastr.error("Period must be a number.");
        return false;
    }
    if (parsedData.groupNameIUPAC !== null && !isNaN(parsedData.groupNameIUPAC)) {
        toastr.error("Group Name IUPAC must be a number.");
        return false;
    }
    if (parsedData.meltingPointK !== null && !isNaN(parsedData.meltingPointK)) {
        toastr.error("Melting Point K must be a number.");
        return false;
    }
    if (parsedData.boilingPointK !== null && !isNaN(parsedData.boilingPointK)) {
        toastr.error("Boiling Point K must be a number.");
        return false;
    }
    if (parsedData.meltingPointC !== null && !isNaN(parsedData.meltingPointC)) {
        toastr.error("Melting Point C must be a number.");
        return false;
    }
    if (parsedData.boilingPointC !== null && !isNaN(parsedData.boilingPointC)) {
        toastr.error("Boiling Point C must be a number.");
        return false;
    }
    if (parsedData.meltingPointF !== null && !isNaN(parsedData.meltingPointF)) {
        toastr.error("Melting Point F must be a number.");
        return false;
    }
    if (parsedData.boilingPointF !== null && !isNaN(parsedData.boilingPointF)) {
        toastr.error("Boiling Point F must be a number.");
        return false;
    }
    if (parsedData.electronAffinity !== null && !isNaN(parsedData.electronAffinity)) {
        toastr.error("Electron Affinity must be a number.");
        return false;
    }
    if (parsedData.electronegativity !== null && !isNaN(parsedData.electronegativity)) {
        toastr.error("Electronegativity must be a number.");
        return false;
    }
    if (parsedData.ionRadius !== null && !isNaN(parsedData.ionRadius)) {
        toastr.error("Ion Radius must be a number.");
        return false;
    }
    if (parsedData.conductivityThermal !== null && !isNaN(parsedData.conductivityThermal)) {
        toastr.error("Conductivity Thermal must be a number.");
        return false;
    }
    if (parsedData.conductivityElectric !== null && !isNaN(parsedData.conductivityElectric)) {
        toastr.error("Conductivity Electric must be a number.");
        return false;
    }
    if (parsedData.heatSpecific !== null && !isNaN(parsedData.heatSpecific)) {
        toastr.error("Heat Specific must be a number.");
        return false;
    }
    if (parsedData.heatVaporization !== null && !isNaN(parsedData.heatVaporization)) {
        toastr.error("Heat Vaporization must be a number.");
        return false;
    }
    if (parsedData.heatFusion !== null && !isNaN(parsedData.heatFusion)) {
        toastr.error("Heat Fusion must be a number.");
        return false;
    }
    if (parsedData.abundanceUniverse !== null && !isNaN(parsedData.abundanceUniverse)) {
        toastr.error("Abundance Universe must be a number.");
        return false;
    }
    if (parsedData.abundanceSolar !== null && !isNaN(parsedData.abundanceSolar)) {
        toastr.error("Abundance Solar must be a number.");
        return false;
    }
    if (parsedData.abundanceMeteor !== null && !isNaN(parsedData.abundanceMeteor)) {
        toastr.error("Abundance Meteor must be a number.");
        return false;
    }
    if (parsedData.abundanceCrust !== null && !isNaN(parsedData.abundanceCrust)) {
        toastr.error("Abundance Crust must be a number.");
        return false;
    }
    if (parsedData.abundanceOcean !== null && !isNaN(parsedData.abundanceOcean)) {
        toastr.error("Abundance Ocean must be a number.");
        return false;
    }
    if (parsedData.abundanceHuman !== null && !isNaN(parsedData.abundanceHuman)) {
        toastr.error("Abundance Human must be a number.");
        return false;
    }
    return true;
}