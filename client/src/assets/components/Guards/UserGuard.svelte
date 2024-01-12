<script>
    import { authState, checkAuth } from "../../scripts/auth.js";
    import { navigate } from "svelte-routing";
    import { onMount } from "svelte";

    let userIsLoggedIn = false;

    $: {
        const { isLoggedIn } = $authState;
        userIsLoggedIn = isLoggedIn;
    }

    onMount(async () => {
        await checkAuth();
        if (!userIsLoggedIn) {
            {
                navigate("/unauthorized");
            }
        }
    });
</script>

{#if userIsLoggedIn}
    <slot />
{/if}
