<script>
    import { authState, checkAuth } from "../../scripts/auth.js";
    import { navigate } from "svelte-routing";
    import { onMount } from "svelte";

    let isAdmin = false;

    $: {
        const { isLoggedIn, userData } = $authState;
        isAdmin = isLoggedIn && userData && userData.role === "admin";
    }

    onMount(async () => {
        await checkAuth();
        if (!isAdmin) {
            {
                navigate("/unauthorized");
            }
        }
    });
</script>

{#if isAdmin}
    <slot />
{/if}