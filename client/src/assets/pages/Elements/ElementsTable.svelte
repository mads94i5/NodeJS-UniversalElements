<script>
    import { onMount } from "svelte";
    import ElementInfo from "../../components/PeriodicTable/ElementInfo.svelte";
    import PeriodicTable from "../../components/PeriodicTable/PeriodicTable.svelte";
    import { fetchGetJson } from "../../scripts/fetch.js";
    import { API_URL } from "../../scripts/settings.js";
    import toastr from "toastr";

    let elements;
    let selectedElement;

    onMount(async () => {
        toastr.options = {
            positionClass: "toast-bottom-left",
        };
        await getElements();
    });

    function handleElementSelected(event) {
        const { element } = event.detail;
        selectedElement = element;
    }

    async function getElements() {
        try {
            const response = await fetchGetJson(API_URL + "api/elements");
            if (response !== undefined) {
                elements = response;
                selectedElement = elements[0];
            } else {
                toastr.error("response.error: " + response.error);
            }
        } catch (error) {
            if (error.message) {
                if (error.message.toString().includes("Too many r")) {
                    toastr.error("Too many requests");
                } else {
                    toastr.error("error.message: " + error.message);
                }
            } else if (error.fullResponse) {
                toastr.error("error.fullResponse: " + error.fullResponse.error);
            } else {
                toastr.error("An unknown error occurred.");
            }
        }
    }
</script>

<div class="container">
    <div class="text-center">
        <h2>Elements</h2>
        <br />
    </div>
</div>
{#if elements}
    <div class="row">
        <div class="col-md-3">
            <ElementInfo element={selectedElement} />
        </div>
        <div class="col-md-9">
            <PeriodicTable {elements} on:elementSelected={handleElementSelected} />
            <br />
        </div>
    </div>
{:else}
    <div class="table-container text-center">
        <div>
            <i class="fa-solid fa-spinner fa-spin-pulse"></i>
        </div>
    </div>
{/if}
