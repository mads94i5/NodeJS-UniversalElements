<script>
    import { onMount } from "svelte";
    import { API_URL, AUTH_URL } from "../../scripts/settings.js";
    import { fetchGetJson, fetchPostJson } from "../../scripts/fetch.js";
    import toastr from "toastr";

    let elements = [];

    onMount(async () => {
        toastr.options = {
            positionClass: "toast-bottom-left",
        };
        toastr.info("Retrieving elements..");
        try {
            await fetchPostJson(AUTH_URL + "auth/refresh");
            const response = await fetchGetJson(API_URL + "api/elements");
            if (response !== undefined) {
                toastr.success("Retrieved elements");
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
    })
</script>

<div class="container">
    <h2 class="text-center">Elements</h2>
    <br />
    <div class="table-container">
        <table class="blue-border" width="100%">
            <thead>
                <tr>
                    <th class="tbl-padding border" style="width: 25%;">Atomic Number</th>
                    <th class="tbl-padding border" style="width: 35%;">Name</th>
                    <th class="tbl-padding border" style="width: 20%;">Symbol</th>
                    <th class="tbl-padding border">Details</th>
                </tr>
            </thead>
            <tbody id="table-body">
                {#each elements as element}
                <tr>
                    <td class="tbl-padding border">{element.atomicNumber}</td>
                    <td class="tbl-padding border">{element.name}</td>
                    <td class="tbl-padding border">{element.symbol}</td>
                    <td class="text-center border"><a href="/elements/{element.atomicNumber}"><button class="btn btn-primary"><strong>View element</strong></button></a></td>
                </tr>
                {/each}
            </tbody>
        </table>
        <br />
        <div class="text-center">
            <a href="/elements/new"><button class="btn btn-success"><strong>Add element</strong></button></a>
        </div>
    </div>
    <br />
</div>
