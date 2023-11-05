<script>
    import { authState, checkAuth } from "../../scripts/auth.js";
    import { navigate } from "svelte-routing";
    import { onMount } from "svelte";
    import { fetchPostJson } from "../../scripts/fetch.js";
    import { AUTH_URL } from "../../scripts/settings.js";

    let isAdmin = false;

    $: {
        const { isLoggedIn, userData } = $authState;
        isAdmin = isLoggedIn && userData && userData.role === "admin";
    }

    onMount(async () => {
        await fetchPostJson(AUTH_URL + "refresh");
        await checkAuth();
        if (!isAdmin) {
            {navigate("/unauthorized")};
        }
    });
</script>

{#if isAdmin}
    <slot />
{/if}