<script>
    // @ts-nocheck
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
    import { authState, checkAuth } from "../../scripts/auth.js";
    import { parseElementFormData } from "../../scripts/parse.js";
    import { fetchGetJson, fetchPostJson, fetchPutJsonFormData, fetchDelete } from "../../scripts/fetch.js";
    import { API_URL, AUTH_URL } from "../../scripts/settings.js";
    import toastr from "toastr";
    import Modal from "../../components/Modal/Modal.svelte";

    let showPopup = false;

    const onShowPopup = (ev) => {
        showPopup = true;
    };

    const onPopupClose = (data) => {
        showPopup = false;
        if (data === "accept") {
            deleteElement();
        }
    };

    export let elementId;
    let element = [];
    let isAdmin = false;
    let isEditingElement = false;

    $: {
        const { isLoggedIn, userData } = $authState;
        isAdmin = isLoggedIn && userData && userData.role === "admin";
    }

    onMount(async () => {
        toastr.options = {
            positionClass: "toast-bottom-left",
        };
        await getElementInfo();
    });

    async function getElementInfo() {
        await checkAuth();
        if (isAdmin) {
            try {
                const response = await fetchGetJson(API_URL + "api/elements/" + elementId);
                if (response !== undefined && response.length > 0) {
                    element = response[0];
                } else if (response.length === 0) {
                    navigate("/elements");
                    toastr.error("No such element");
                } else {
                    navigate("/elements");
                    toastr.error(response.error);
                }
            } catch (error) {
                navigate("/elements");
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
    }

    function startEditElement() {
        isEditingElement = true;
    }

    async function endEditElement() {
        isEditingElement = false;
    }

    async function submitElement() {
        toastr.info("Changing element..");
        const form = document.getElementById("elementForm");
        if (!(await parseElementFormData(form))) {
            return;
        }
        await fetchPostJson(AUTH_URL + "auth/refresh");
        try {
            const response = await fetchPutJsonFormData(API_URL + `api/elements/${elementId}`, form);
            if (response.message !== undefined) {
                toastr.success(response.message);
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
        endEditElement();
        await getElementInfo();
    }

    async function deleteElement() {
        toastr.info("Deleting element..");
        await fetchPostJson(AUTH_URL + "auth/refresh");
        try {
            const response = await fetchDelete(API_URL + `api/elements/${elementId}`);
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
    <div class="text-center">
        <h2>Element</h2>
        <br />
        {#if !isEditingElement}
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Atomic Number:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.atomicNumber}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Name:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.name}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Symbol:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.symbol}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Atomic Mass:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.atomicMass}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Density STP:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.densitySTP}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Density Liquid:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.densityLiquid}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Radius Calculated:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.radiusCalculated}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Radius Empirical:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.radiusEmpirical}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Radius Covalent:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.radiusCovalent}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Radius Van Del Waals:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.radiusVanDelWaals}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Radius Ion:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.ionRadius}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Hardness Brinell:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.hardnessBrinell}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Hardness Mohs:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.hardnessMohs}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Hardness Vickers:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.hardnessVickers}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Modulus Bulk:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.modulusBulk}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Modulus Shear:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.modulusShear}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Modulus Young:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.modulusYoung}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Energy Levels:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.energyLevels}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Period:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.period}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Group Name IUPAC:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.groupNameIUPAC}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Group Name Old IUPAC:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.groupNameOldIUPAC}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Group Name Old CAS:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.groupNameOldCAS}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Group Family:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.groupFamily}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Group Trivial Name:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.groupTrivialName}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Group Other Name:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.groupOtherName}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Series:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.series}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Block:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.block}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Metallic Classification:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.metallicClassification}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Oxidation States:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.oxidationStates}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Melting Point K:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.meltingPointK}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Melting Point C:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.meltingPointC}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Melting Point F:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.meltingPointF}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Boiling Point K:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.boilingPointK}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Boiling Point C:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.boilingPointC}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Boiling Point F:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.boilingPointF}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Bonding Type:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.bondingType}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Electron Configuration:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.electronConfiguration}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Electron Affinity:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.electronAffinity}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Electronegativity:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.electronegativity}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Ionization Energy:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.ionizationEnergy}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Conductivity Thermal:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.conductivityThermal}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Conductivity Electric:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.conductivityElectric}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Heat Specific:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.heatSpecific}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Heat Vaporization:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.heatVaporization}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Heat Fusion:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.heatFusion}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Abundance Universe:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.abundanceUniverse}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Abundance Solar:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.abundanceSolar}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Abundance Meteor:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.abundanceMeteor}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Abundance Crust:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.abundanceCrust}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Abundance Ocean:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.abundanceOcean}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Abundance Human:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.abundanceHuman}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>CPK Hex Color:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.cpkHexColor}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Hypothetical:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.hypothetical}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Year Discovered:</strong></p>
                </div>
                <div class="col-xs-3">
                    <p>{element.yearDiscovered}</p>
                </div>
            </div>
            <br />
            <div class="row">
                <div class="col-xs-3 col-xs-offset-3">
                    <p><strong>Edit Element:</strong></p>
                </div>
                <div class="col-xs-3">
                    <button class="btn btn-success" on:click={startEditElement}><strong>Edit</strong></button>
                </div>
            </div>
        {:else}
            <form id="elementForm" on:submit|preventDefault={submitElement}>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Atomic Number:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="atomicNumber" bind:value={element.atomicNumber} required />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Name:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="name" bind:value={element.name} required />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Symbol:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="symbol" bind:value={element.symbol} required />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Atomic Mass:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="atomicMass" bind:value={element.atomicMass} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Density STP:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="densitySTP" bind:value={element.densitySTP} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Density Liquid:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="densityLiquid" bind:value={element.densityLiquid} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Radius Calculated:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="radiusCalculated" bind:value={element.radiusCalculated} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Radius Empirical:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="radiusEmpirical" bind:value={element.radiusEmpirical} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Radius Covalent:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="radiusCovalent" bind:value={element.radiusCovalent} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Radius Van Del Waals:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="radiusVanDelWaals" bind:value={element.radiusVanDelWaals} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Radius Ion:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="ionRadius" bind:value={element.ionRadius} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Hardness Brinell:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="hardnessBrinell" bind:value={element.hardnessBrinell} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Hardness Mohs:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="hardnessMohs" bind:value={element.hardnessMohs} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Hardness Vickers:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="hardnessVickers" bind:value={element.hardnessVickers} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Modulus Bulk:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="modulusBulk" bind:value={element.modulusBulk} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Modulus Shear:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="modulusShear" bind:value={element.modulusShear} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Modulus Young:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="modulusYoung" bind:value={element.modulusYoung} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Energy Levels:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="energyLevels" bind:value={element.energyLevels} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Period:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="period" bind:value={element.period} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Group Name IUPAC:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="groupNameIUPAC" bind:value={element.groupNameIUPAC} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Group Name Old IUPAC:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="groupNameOldIUPAC" bind:value={element.groupNameOldIUPAC} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Group Name Old CAS:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="groupNameOldCAS" bind:value={element.groupNameOldCAS} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Group Family:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="groupFamily" bind:value={element.groupFamily} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Group Trivial Name:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="groupTrivialName" bind:value={element.groupTrivialName} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Group Other Name:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="groupOtherName" bind:value={element.groupOtherName} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Series:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="series" bind:value={element.series} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Block:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="block" bind:value={element.block} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Metallic Classification:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="metallicClassification" bind:value={element.metallicClassification} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Oxidation States:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="oxidationStates" bind:value={element.oxidationStates} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Melting Point K:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="meltingPointK" bind:value={element.meltingPointK} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Melting Point C:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="meltingPointC" bind:value={element.meltingPointC} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Melting Point F:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="meltingPointF" bind:value={element.meltingPointF} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Boiling Point K:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="boilingPointK" bind:value={element.boilingPointK} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Boiling Point C:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="boilingPointC" bind:value={element.boilingPointC} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Boiling Point F:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="boilingPointF" bind:value={element.boilingPointF} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Bonding Type:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="bondingType" bind:value={element.bondingType} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Electron Configuration:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="electronConfiguration" bind:value={element.electronConfiguration} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Electron Affinity:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="electronAffinity" bind:value={element.electronAffinity} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Electronegativity:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="electronegativity" bind:value={element.electronegativity} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Ionization Energy:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="ionizationEnergy" bind:value={element.ionizationEnergy} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Conductivity Thermal:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="conductivityThermal" bind:value={element.conductivityThermal} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Conductivity Electric:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="conductivityElectric" bind:value={element.conductivityElectric} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Heat Specific:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="heatSpecific" bind:value={element.heatSpecific} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Heat Vaporization:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="heatVaporization" bind:value={element.heatVaporization} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Heat Fusion:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="heatFusion" bind:value={element.heatFusion} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Abundance Universe:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="abundanceUniverse" bind:value={element.abundanceUniverse} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Abundance Solar:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="abundanceSolar" bind:value={element.abundanceSolar} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Abundance Meteor:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="abundanceMeteor" bind:value={element.abundanceMeteor} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Abundance Crust:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="abundanceCrust" bind:value={element.abundanceCrust} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Abundance Ocean:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="abundanceOcean" bind:value={element.abundanceOcean} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Abundance Human:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="abundanceHuman" bind:value={element.abundanceHuman} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>CPK Hex Color:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="cpkHexColor" bind:value={element.cpkHexColor} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Hypothetical:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="hypothetical" bind:value={element.hypothetical} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Year Discovered:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <input name="yearDiscovered" bind:value={element.yearDiscovered} />
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3">
                        <p><strong>Edit Element:</strong></p>
                    </div>
                    <div class="col-xs-3">
                        <button class="btn btn-success" type="submit"><strong>Submit</strong></button>
                        <button class="btn btn-danger" on:click={endEditElement}><strong>Cancel</strong></button>
                    </div>
                </div>
            </form>
        {/if}
        <br />
        <div class="row">
            <div class="col-xs-3 col-xs-offset-3">
                <p><strong>Delete Element:</strong></p>
            </div>
            <div class="col-xs-3">
                <button type="button" class="btn btn-danger" on:click={onShowPopup}><strong>Delete</strong></button>
                <Modal open={showPopup} onClosed={(data) => onPopupClose(data)} title="Delete element">
                    Do you want to delete this element?
                </Modal>
            </div>
        </div>
        <br />
        <a href="/elements"><button class="btn btn-primary"><strong>Back</strong></button></a>
        <br />
        <br />
    </div>
</div>
