<script>
    import { afterUpdate, createEventDispatcher, onMount } from "svelte";

    export let element;
    let customStyles = "";
    
    const style1 = "color: white; background-color: green; border: 2px solid darkgreen";
    const style2 = "color: white; background-color: goldenrod; border: 2px solid darkgoldenrod";
    const style3 = "color: white; background-color: chocolate; border: 2px solid brown";
    const style4 = "color: white; background-color: crimson; border: 2px solid darkred";
    const style5 = "color: white; background-color: steelblue; border: 2px solid darkslategrey";
    const style6 = "color: white; background-color: darkcyan; border: 2px solid darkslategrey";
    const style7 = "color: white; background-color: darkviolet; border: 2px solid purple";
    const style8 = "color: white; background-color: brown; border: 2px solid rgb(110, 28, 28)";
    const style9 = "color: white; background-color: salmon; border: 2px solid crimson";
    const style10 = "color: white; background-color: dimgray; border: 2px solid lightslategray";
    const style11 = "color: white; background-color: black; border: 2px solid navy";

    const dispatch = createEventDispatcher();

    function handleClick() {
        dispatch("elementClicked", { element });
    }
    
    function setSeriesColor() {
        switch (element.series) {
            case "reactive nonmetals":
                customStyles = style1;
                break;
            case "alkali metals":
                customStyles = style2;
                break;
            case "alkaline earth metals":
                customStyles = style3;
                break;
            case "transition metals":
                customStyles = style4;
                break;
            case "post-transition metals":
                customStyles = style5;
                break;
            case "metalloids":
                customStyles = style6;
                break;
            case "noble gases":
                customStyles = style7;
                break;
            case "lanthanoids":
                customStyles = style8;
                break;
            case "actinoids":
                customStyles = style9;
                break;
            case "description":
                customStyles = style10;
                break;
            default:
                customStyles = style11;
                break;
        }
    }

    onMount(() => {
        setSeriesColor();
    });

    afterUpdate(() => {
        setSeriesColor();
    });

</script>

<button class="element" style="{customStyles}" on:click={handleClick}>
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