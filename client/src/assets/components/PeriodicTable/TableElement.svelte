<script>
    export let element;
    export let customStyles = "";
</script>

<button class="element" style="{customStyles}">
    <div id="atomic-mass">
        {#if Array.isArray(element.atomicMass)}
            {"(" + element.atomicMass + ")"}
        {:else}
            {element.atomicMass || ""}
        {/if}
    </div>
    <div id="atomic-number">{element.atomicNumber || ""}</div>
    <div id="symbol">{element.symbol}</div>
    <div id="element-name" class="no-wrap">{element.name}</div>
    <div id="ionization-energy">{element.ionizationEnergy[0] || ""}</div>
    <div id="electronegativity">{element.electronegativity || ""}</div>
</button>