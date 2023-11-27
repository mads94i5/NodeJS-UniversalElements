<script>
    import TableElement from "./TableElement.svelte";

    export let element;
</script>

<div class="table-container">
    <table>
        <tr class="white-border">
            Element Info
        </tr>
        <tr class="white-border">
            <TableElement element={element} />
        </tr>
        <tr>
            <td class="tbl-padding">
                Name: {element.name}
            </td>
            <td class="tbl-padding">
                Symbol: {element.symbol}
            </td>
        </tr>
    </table>
</div>