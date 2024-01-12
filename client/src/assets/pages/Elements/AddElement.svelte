<script>
    import { fetchPostJson, fetchPostJsonFormData } from "../../scripts/fetch.js";
    import { API_URL, AUTH_URL } from "../../scripts/settings.js";
    import { parseElementFormData } from "../../scripts/parse.js";
    import toastr from "toastr";
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";

    onMount(async () => {
        toastr.options = {
            positionClass: "toast-bottom-left",
        };
    });

    async function submitElement() {
        toastr.info("Creating element..");
        const form = document.getElementById("elementForm");

        const validFormData = await parseElementFormData(form);
        if (validFormData === false) {
            return;
        }
        await fetchPostJson(AUTH_URL + "auth/refresh");
        try {
            const response = await fetchPostJsonFormData(API_URL + `api/elements`, form);
            if (response.message !== undefined) {
                toastr.success(response.message);
                navigate("/elements");
            } else {
                if (response.error !== undefined) {
                    toastr.error(response.error);
                } else {
                    const responseText = await response.text();
                    toastr.error(responseText);
                }
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
    }
</script>

<div class="container">
    <h2 class="text-center">New Element</h2>
    <br />
    <form id="elementForm" on:submit|preventDefault={submitElement}>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Atomic Number:</strong></p>
            </div>
            <div class="col-xs-3">
                <input id="atomicNumber" name="atomicNumber" required />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Name:</strong></p>
            </div>
            <div class="col-xs-3">
                <input id="name" name="name" required />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Symbol:</strong></p>
            </div>
            <div class="col-xs-3">
                <input id="symbol" name="symbol" required />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Atomic Mass:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="atomicMass" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Density STP:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="densitySTP" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Density Liquid:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="densityLiquid" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Radius Calculated:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="radiusCalculated" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Radius Empirical:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="radiusEmpirical" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Radius Covalent:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="radiusCovalent" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Radius Van Del Waals:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="radiusVanDelWaals" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Radius Ion:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="ionRadius" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Hardness Brinell:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="hardnessBrinell" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Hardness Mohs:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="hardnessMohs" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Hardness Vickers:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="hardnessVickers" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Modulus Bulk:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="modulusBulk" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Modulus Shear:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="modulusShear" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Modulus Young:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="modulusYoung" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Energy Levels:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="energyLevels" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Period:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="period" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Group Name IUPAC:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="groupNameIUPAC" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Group Name Old IUPAC:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="groupNameOldIUPAC" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Group Name Old CAS:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="groupNameOldCAS" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Group Family:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="groupFamily" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Group Trivial Name:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="groupTrivialName" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Group Other Name:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="groupOtherName" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Series:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="series" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Block:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="block" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Metallic Classification:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="metallicClassification" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Oxidation States:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="oxidationStates" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Melting Point K:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="meltingPointK" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Melting Point C:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="meltingPointC" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Melting Point F:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="meltingPointF" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Boiling Point K:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="boilingPointK" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Boiling Point C:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="boilingPointC" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Boiling Point F:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="boilingPointF" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Bonding Type:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="bondingType" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Electron Configuration:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="electronConfiguration" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Electron Affinity:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="electronAffinity" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Electronegativity:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="electronegativity" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Ionization Energy:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="ionizationEnergy" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Conductivity Thermal:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="conductivityThermal" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Conductivity Electric:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="conductivityElectric" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Heat Specific:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="heatSpecific" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Heat Vaporization:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="heatVaporization" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Heat Fusion:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="heatFusion" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Abundance Universe:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="abundanceUniverse" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Abundance Solar:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="abundanceSolar" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Abundance Meteor:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="abundanceMeteor" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Abundance Crust:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="abundanceCrust" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Abundance Ocean:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="abundanceOcean" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Abundance Human:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="abundanceHuman" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>CPK Hex Color:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="cpkHexColor" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Hypothetical:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="hypothetical" />
            </div>
        </div>
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Year Discovered:</strong></p>
            </div>
            <div class="col-xs-3">
                <input name="yearDiscovered" />
            </div>
        </div>
        <br />
        <div class="row text-center">
            <div class="col-xs-3 col-xs-offset-3"></div>
            <div class="col-xs-3">
                <a href="/elements"><button type="button" class="btn btn-primary"><strong>Back</strong></button></a>
                <button class="btn btn-success" type="submit"><strong>Submit</strong></button>
            </div>
        </div>
    </form>
    <br />
</div>