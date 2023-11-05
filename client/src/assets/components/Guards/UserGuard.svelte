<script>
    import { authState, checkAuth } from "../../scripts/auth.js";
    import { navigate } from "svelte-routing";
    import { onMount } from "svelte";
    import { fetchPostJson } from "../../scripts/fetch.js";
    import { AUTH_URL } from "../../scripts/settings.js";

    let userIsLoggedIn = false;

    $: {
        const { isLoggedIn } = $authState;
        userIsLoggedIn = isLoggedIn;
    }

    onMount(async () => {
        await fetchPostJson(AUTH_URL + "refresh");
        await checkAuth();
        if (!userIsLoggedIn) {
            {navigate("/unauthorized")};
        }
    });
</script>

{#if userIsLoggedIn}
    <slot />
{/if}