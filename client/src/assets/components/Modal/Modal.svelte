<script>
    export let open = false;
    export let showBackdrop = true;
    export let onClosed;
    export let title = "Modal title";

    const modalClose = (data) => {
        open = false;
        if (onClosed) {
            onClosed(data);
        }
    };
</script>

{#if open}
    <div class="modal" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden={false}>
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalLabel" style="color: black;"><h4>{title}</h4></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" on:click={() => modalClose("cancel")}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" style="color: black;">
                    <slot />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal" on:click={() => modalClose("cancel")}>
                        <strong>Cancel</strong>
                    </button>
                    <button type="button" class="btn btn-danger" on:click={() => modalClose("accept")}>
                        <strong>Accept</strong>
                    </button>
                </div>
            </div>
        </div>
    </div>
    {#if showBackdrop}
        <div class="modal-backdrop show" />
    {/if}
{/if}

<style>
    .modal {
        display: block;
    }
</style>
