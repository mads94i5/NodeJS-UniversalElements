<script>
    import TableElement from "./TableElement.svelte";

    export let element;

    let selectedGroup;

    let selectedDensity;
    let selectedRadius;
    let selectedHardness;
    let selectedModulus;

    let selectedIonizationEnergy;

    let selectedBoilTemperature;
    let selectedMeltTemperature;
    let selectedHeat;
    let selectedConductivity;
    let selectedAbundance;

    function capitalizeFirstLetter(str) {
        return str.replace(str[0], str[0].toUpperCase());
    }
</script>

{#if element}
<div class="element-info horizontal-scrollable-content blue-border"> 
    <div class="element-info-box">
        <table class="element-info-table border">
            <tr class="white-border">
                <td class="tbl-padding" colspan="2"><strong>Element Info</strong></td>
            </tr>
            <tr class="white-border">
                <td colspan="2">
                    <div style="background-color: #{element.cpkHexColor}; width: 50%; margin-left: 25%; height: 100%;">
                        <TableElement {element} />
                    </div>
                </td>
            </tr>
            <tr>
                <td class="tbl-padding element-data">
                    <strong class="smaller-font">Atomic Number</strong>
                </td>
                <td class="tbl-padding element-data">
                    {#if element.atomicNumber}
                        {element.atomicNumber}
                    {:else}
                        N/A
                    {/if}
                </td>
            </tr>
            <tr>
                <td class="tbl-padding">
                    <strong class="smaller-font">Name</strong>
                </td>
                <td class="tbl-padding">
                    {#if element.name}
                        <div class="smaller-font">{element.name}</div>
                    {:else}
                        N/A
                    {/if}
                </td>
            </tr>
            <tr>
                <td class="tbl-padding">
                    <strong class="smaller-font">Symbol</strong>
                </td>
                <td class="tbl-padding">
                    {#if element.symbol}
                        {element.symbol}
                    {:else}
                        N/A
                    {/if}
                </td>
            </tr>
        </table>
    </div>
    <div class="element-info-box">
        <table class="element-info-table border">
            <tr>
                <td class="tbl-padding element-data">
                    <strong class="smaller-font">Period</strong>
                </td>
                <td class="tbl-padding element-data">
                    {#if element.period}
                        {element.period}
                    {:else}
                        N/A
                    {/if}
                </td>
            </tr>
            <tr>
                <td class="tbl-padding element-data">
                    <strong class="smaller-font">Group</strong>
                    <select class="small-font" bind:value={selectedGroup}>
                        <option value="groupUIPAC">UIPAC</option>
                        <option value="groupOldUIPAC">Old UIPAC</option>
                        <option value="groupOldCAS">Old CAS</option>
                    </select>
                </td>
                <td class="tbl-padding element-data">
                    {#if selectedGroup === "groupUIPAC"}
                        {#if element.groupNameIUPAC}
                            {element.groupNameIUPAC}
                        {:else}
                            N/A
                        {/if}
                    {/if}
                    {#if selectedGroup === "groupOldUIPAC"}
                        {#if element.groupNameOldIUPAC}
                            {element.groupNameOldIUPAC}
                        {:else}
                            N/A
                        {/if}
                    {/if}
                    {#if selectedGroup === "groupOldCAS"}
                        {#if element.groupNameOldCAS}
                            {element.groupNameOldCAS}
                        {:else}
                            N/A
                        {/if}
                    {/if}
                </td>
            </tr>
            <tr>
                <td class="tbl-padding element-data">
                    <strong class="smaller-font">Group Family</strong>
                </td>
                <td class="tbl-padding element-data">
                    {#if element.groupFamily}
                    <div class="smaller-font">{capitalizeFirstLetter(element.groupFamily)}</div>
                    {:else}
                        N/A
                    {/if}
                </td>
            </tr>
            <tr>
                <td class="tbl-padding element-data">
                    <strong class="smaller-font">Group Trivial Name</strong>
                </td>
                <td class="tbl-padding element-data">
                    {#if element.groupTrivialName}
                        {#if element.groupTrivialName.length > 21}
                            <div class="small-font">{capitalizeFirstLetter(element.groupTrivialName)}</div>
                        {:else}
                            <div class="smaller-font">{capitalizeFirstLetter(element.groupTrivialName)}</div>
                        {/if}
                    {:else}
                        N/A
                    {/if}
                </td>
            </tr>
            <tr>
                <td class="tbl-padding element-data">
                    <strong class="smaller-font">Series</strong>
                </td>
                <td class="tbl-padding element-data">
                    {#if element.series}
                        <div class="smaller-font">{capitalizeFirstLetter(element.series)}</div>
                    {:else}
                        N/A
                    {/if}
                </td>
            </tr>
            <tr>
                <td class="tbl-padding element-data">
                    <strong class="smaller-font">Metallic Classification</strong>
                </td>
                <td class="tbl-padding element-data">
                    {#if element.metallicClassification}
                        {capitalizeFirstLetter(element.metallicClassification)}
                    {:else}
                        N/A
                    {/if}
                </td>
            </tr>
            <tr>
                <td class="tbl-padding element-data">
                    <strong class="smaller-font">Block</strong>
                </td>
                <td class="tbl-padding element-data">
                    {#if element.block}
                        {element.block}
                    {:else}
                        N/A
                    {/if}
                </td>
            </tr>
        </table>
    </div>
    <div class="element-info-box">
        <table class="element-info-table border">
            <tr>
                <td class="tbl-padding element-data">
                    <strong class="smaller-font">Atomic Mass</strong>
                </td>
                <td class="tbl-padding element-data">
                    {#if element.atomicMass}
                        <div class="smaller-font">{element.atomicMass} u</div>
                    {:else}
                        N/A
                    {/if}
                </td>
            </tr>
            <tr>
                <td class="tbl-padding element-data">
                    <strong class="smaller-font">Energy Levels</strong>
                </td>
                <td class="tbl-padding element-data">
                    {#if element.energyLevels && element.energyLevels.length > 0}
                        <div class="smaller-font">{element.energyLevels}</div>
                    {:else}
                        N/A
                    {/if}
                </td>
            </tr>
            <tr>
                <td class="tbl-padding element-data">
                    <strong class="smaller-font">Density</strong>
                    <select class="small-font" bind:value={selectedDensity}>
                        <option value="densitySTP">STP</option>
                        <option value="densityLiquid">Liquid</option>
                    </select>
                </td>
                <td class="tbl-padding element-data">
                    {#if selectedDensity === "densitySTP"}
                        {#if element.densitySTP}
                            {element.densitySTP} kg/m³
                        {:else}
                            N/A
                        {/if}
                    {/if}    
                    {#if selectedDensity === "densityLiquid"}
                        {#if element.densityLiquid}
                            {element.densityLiquid} kg/m³
                        {:else}
                            N/A
                        {/if}
                    {/if}
                </td>
            </tr>
            <tr>
                <td class="tbl-padding element-data">
                    <strong class="smaller-font">Radius</strong>
                    <select class="small-font" bind:value={selectedRadius}>
                        <option value="radiusCalc">Calculated</option>
                        <option value="radiusEmp">Empirical</option>
                        <option value="radiusCon">Covalent</option>
                        <option value="radiusWaals">Van Del Waals</option>
                        <option value="radiusIon">Ion</option>
                    </select>
                </td>
                <td class="tbl-padding element-data">
                    {#if selectedRadius === "radiusCalc"}
                        {#if element.radiusCalculated}
                            {element.radiusCalculated} pm
                        {:else}
                            N/A
                        {/if}
                    {/if}
                    {#if selectedRadius === "radiusEmp"}
                        {#if element.radiusEmpirical}
                            {element.radiusEmpirical}pm
                        {:else}
                            N/A
                        {/if}
                    {/if}
                    {#if selectedRadius === "radiusCon"}
                        {#if element.radiusCovalent}
                            {element.radiusCovalent} pm
                        {:else}
                            N/A
                        {/if}
                    {/if}
                    {#if selectedRadius === "radiusWaals"}
                        {#if element.radiusVanDelWaals}
                            {element.radiusVanDelWaals} pm
                        {:else}
                            N/A
                        {/if}
                    {/if}
                    {#if selectedRadius === "radiusIon"}
                        {#if element.ionRadius}
                            {element.ionRadius} pm
                        {:else}
                            N/A
                        {/if}
                    {/if}
                </td>
            </tr>
            <tr>
                <td class="tbl-padding element-data">
                    <strong class="smaller-font">Hardness</strong>
                    <select class="small-font" bind:value={selectedHardness}>
                        <option value="hardnessBrin">Brinell</option>
                        <option value="hardnessMohs">Mohs</option>
                        <option value="hardnessVick">Vickers</option>
                    </select>
                </td>
                <td class="tbl-padding element-data">
                    {#if selectedHardness === "hardnessBrin"}
                        {#if element.hardnessBrinell}
                            {element.hardnessBrinell} MPa
                        {:else}
                            N/A
                        {/if}
                    {/if}
                    {#if selectedHardness === "hardnessMohs"}
                        {#if element.hardnessMohs}
                            {element.hardnessMohs} MPa
                        {:else}
                            N/A
                        {/if}
                    {/if}
                    {#if selectedHardness === "hardnessVick"}
                        {#if element.hardnessVickers}
                            {element.hardnessVickers} MPa
                        {:else}
                            N/A
                        {/if}
                    {/if}
                </td>
            </tr>
            <tr>
                <td class="tbl-padding element-data">
                    <strong class="smaller-font">Modulus</strong>
                    <select class="small-font" bind:value={selectedModulus}>
                        <option value="modulusBulk">Bulk</option>
                        <option value="modulusShear">Shear</option>
                        <option value="modulusYoung">Young</option>
                    </select>
                </td>
                <td class="tbl-padding element-data">
                    {#if selectedModulus === "modulusBulk"}
                        {#if element.hardnessBrinell}
                            {element.hardnessBrinell}
                        {:else}
                            N/A
                        {/if}
                    {/if}
                    {#if selectedModulus === "modulusShear"}
                        {#if element.hardnessMohs}
                            {element.hardnessMohs}
                        {:else}
                            N/A
                        {/if}
                    {/if}
                    {#if selectedModulus === "modulusYoung"}
                        {#if element.hardnessVickers}
                            {element.hardnessVickers}
                        {:else}
                            N/A
                        {/if}
                    {/if}
                </td>
            </tr>
        </table>
    </div>
    <div class="element-info-box">
        <table class="element-info-table border">
            <tr>
                <td class="tbl-padding element-data">
                    <strong class="smaller-font">Bonding Type</strong>
                </td>
                <td class="tbl-padding element-data">
                    {#if element.bondingType}
                        <div class="smaller-font">{capitalizeFirstLetter(element.bondingType)}</div>
                    {:else}
                        N/A
                    {/if}
                </td>
            </tr>
            <tr>
                <td class="tbl-padding element-data">
                    <strong class="smaller-font">Electron Configuration</strong>
                </td>
                <td class="tbl-padding element-data">
                    {#if element.electronConfiguration}
                        <div class="smaller-font">{element.electronConfiguration}</div>
                    {:else}
                        N/A
                    {/if}
                </td>
            </tr>
            <tr>
                <td class="tbl-padding element-data">
                    <strong class="smaller-font">Electron Affinity</strong>
                </td>
                <td class="tbl-padding element-data">
                    {#if element.electronAffinity}
                        {element.electronAffinity}
                    {:else}
                        N/A
                    {/if}
                </td>
            </tr>
            <tr>
                <td class="tbl-padding element-data">
                    <strong class="smaller-font">Electronegativity</strong>
                </td>
                <td class="tbl-padding element-data">
                    {#if element.electronegativity}
                        {element.electronegativity}
                    {:else}
                        N/A
                    {/if}
                </td>
            </tr>
            <tr>
                <td class="tbl-padding element-data">
                    <strong class="small-font">Ionization Energy</strong>
                    <select class="small-font" bind:value={selectedIonizationEnergy}>
                        <option value="1">1st</option>
                        <option value="2">2nd</option>
                        <option value="3">3rd</option>
                        <option value="4">4th</option>
                        <option value="5">5th</option>
                        <option value="6">6th</option>
                        <option value="7">7th</option>
                        <option value="8">8th</option>
                        <option value="9">9th</option>
                        <option value="10">10th</option>
                        <option value="11">11th</option>
                        <option value="12">12th</option>
                        <option value="13">13th</option>
                        <option value="14">14th</option>
                        <option value="15">15th</option>
                        <option value="16">16th</option>
                        <option value="17">17th</option>
                        <option value="18">18th</option>
                        <option value="19">19th</option>
                        <option value="20">20th</option>
                        <option value="21">21th</option>
                        <option value="22">22th</option>
                        <option value="23">23th</option>
                        <option value="24">24th</option>
                        <option value="25">25th</option>
                        <option value="26">26th</option>
                        <option value="27">27th</option>
                        <option value="28">28th</option>
                        <option value="29">29th</option>
                        <option value="30">30th</option>
                    </select>
                </td>
                <td class="tbl-padding element-data">
                    {#if element.ionizationEnergy[selectedIonizationEnergy]}
                        {element.ionizationEnergy[selectedIonizationEnergy]} kJ/mol
                    {:else}
                        N/A
                    {/if}
                </td>
            </tr>
            <tr>
                <td class="tbl-padding element-data">
                    <strong class="smaller-font">Oxidation States</strong>
                </td>
                <td class="tbl-padding element-data">
                    {#if element.oxidationStates && element.oxidationStates.length > 0}
                        <div class="smaller-font">{element.oxidationStates}</div>
                    {:else}
                        N/A
                    {/if}
                </td>
            </tr>
        </table>
    </div>
    <div class="element-info-box">
        <table class="element-info-table border">
            <tr>
                <td class="tbl-padding element-data">
                    <strong class="smaller-font">Melting Point</strong>
                    <select class="small-font" bind:value={selectedMeltTemperature}>
                        <option value="meltingPointK">K</option>
                        <option value="meltingPointC">°C</option>
                        <option value="meltingPointF">°F</option>
                    </select>
                </td>
                <td class="tbl-padding element-data">
                    {#if selectedMeltTemperature === "meltingPointK"}
                        {#if element.meltingPointK}
                            {element.meltingPointK} K
                        {:else}
                            N/A
                        {/if}
                    {/if}
                    {#if selectedMeltTemperature === "meltingPointC"}
                        {#if element.meltingPointC}
                            {element.meltingPointC} °C
                        {:else}
                            N/A
                        {/if}
                    {/if}
                    {#if selectedMeltTemperature === "meltingPointF"}
                        {#if element.meltingPointF}
                            {element.meltingPointF} °F
                        {:else}
                            N/A
                        {/if}
                    {/if}
                </td>
            </tr>
            <tr>
                <td class="tbl-padding element-data">
                    <strong class="smaller-font">Boiling Point</strong>
                    <select class="small-font" bind:value={selectedBoilTemperature}>
                        <option value="boilingPointK">K</option>
                        <option value="boilingPointC">°C</option>
                        <option value="boilingPointF">°F</option>
                    </select>
                </td>
                <td class="tbl-padding element-data">
                    {#if selectedBoilTemperature === "boilingPointK"}
                        {#if element.boilingPointK}
                            {element.boilingPointK} K
                        {:else}
                            N/A
                        {/if}
                    {/if}
                    {#if selectedBoilTemperature === "boilingPointC"}
                        {#if element.boilingPointC}
                            {element.boilingPointC} °C
                        {:else}
                            N/A
                        {/if}
                    {/if}
                    {#if selectedBoilTemperature === "boilingPointF"}
                        {#if element.boilingPointF}
                            {element.boilingPointF} °F
                        {:else}
                            N/A
                        {/if}
                    {/if}
                </td>
            </tr>
            <tr>
                <td class="tbl-padding element-data">
                    <strong class="smaller-font">Heat</strong>
                    <select class="small-font" bind:value={selectedHeat}>
                        <option value="heatSpecific">Specific</option>
                        <option value="heatVaporization">Vaporization</option>
                        <option value="heatFusion">Fusion</option>
                    </select>
                </td>
                <td class="tbl-padding element-data">
                    {#if selectedHeat === "heatSpecific"}
                        {#if element.heatSpecific}
                            {element.heatSpecific} J/kgK
                        {:else}
                            N/A
                        {/if}
                    {/if}
                    {#if selectedHeat === "heatVaporization"}
                        {#if element.heatVaporization}
                            {element.heatVaporization} kJ/mol
                        {:else}
                            N/A
                        {/if}
                    {/if}
                    {#if selectedHeat === "heatFusion"}
                        {#if element.heatFusion}
                            {element.heatFusion} kJ/mol
                        {:else}
                            N/A
                        {/if}
                    {/if}
                </td>
            </tr>
            <tr>
                <td class="tbl-padding element-data">
                    <strong class="smaller-font">Conductivity</strong>
                    <select class="small-font" bind:value={selectedConductivity}>
                        <option value="conductivityThermal">Thermal</option>
                        <option value="conductivityElectric">Electric</option>
                    </select>
                </td>
                <td class="tbl-padding element-data">
                    {#if selectedConductivity === "conductivityThermal"}
                        {#if element.conductivityThermal}
                            {element.conductivityThermal} W/mK
                        {:else}
                            N/A
                        {/if}
                    {/if}    
                    {#if selectedConductivity === "conductivityElectric"}
                        {#if element.conductivityElectric}
                            {element.conductivityElectric} MS/m
                        {:else}
                            N/A
                        {/if}
                    {/if}
                </td>
            </tr>
            <tr>
                <td class="tbl-padding element-data">
                    <strong class="smaller-font">Abundance</strong>
                    <select class="small-font" bind:value={selectedAbundance}>
                        <option value="abundanceUniverse">Universe</option>
                        <option value="abundanceSolar">Solar</option>
                        <option value="abundanceMeteor">Meteor</option>
                        <option value="abundanceCrust">Crust</option>
                        <option value="abundanceOcean">Ocean</option>
                        <option value="abundanceHuman">Human</option>
                    </select>
                </td>
                <td class="tbl-padding element-data">
                    {#if selectedAbundance === "abundanceUniverse"}
                        {#if element.abundanceUniverse}
                            {element.abundanceUniverse}%
                        {:else}
                            N/A
                        {/if}
                    {/if}
                    {#if selectedAbundance === "abundanceSolar"}
                        {#if element.abundanceSolar}
                            {element.abundanceSolar}%
                        {:else}
                            N/A
                        {/if}
                    {/if}
                    {#if selectedAbundance === "abundanceMeteor"}
                        {#if element.abundanceMeteor}
                            {element.abundanceMeteor}%
                        {:else}
                            N/A
                        {/if}
                    {/if}
                    {#if selectedAbundance === "abundanceCrust"}
                        {#if element.abundanceCrust}
                            {element.abundanceCrust}%
                        {:else}
                            N/A
                        {/if}
                    {/if}
                    {#if selectedAbundance === "abundanceOcean"}
                        {#if element.abundanceOcean}
                            {element.abundanceOcean}%
                        {:else}
                            N/A
                        {/if}
                    {/if}
                    {#if selectedAbundance === "abundanceHuman"}
                        {#if element.abundanceHuman}
                            {element.abundanceHuman}%
                        {:else}
                            N/A
                        {/if}
                    {/if}
                </td>
            </tr>
            <tr>
                <td class="tbl-padding element-data">
                    <strong class="smaller-font">Hypothetical</strong>
                </td>
                <td class="tbl-padding element-data">
                    {#if element.hypothetical}
                        <div class="smaller-font">{capitalizeFirstLetter(element.hypothetical)}</div>
                    {:else}
                        N/A
                    {/if}
                </td>
            </tr>
            <tr>
                <td class="tbl-padding element-data">
                    <strong class="smaller-font">Year Discovered</strong>
                </td>
                <td class="tbl-padding element-data">
                    {#if element.yearDiscovered}
                        {element.yearDiscovered}
                    {:else}
                        N/A
                    {/if}
                </td>
            </tr>
        </table>
    </div>
</div>
{/if}
