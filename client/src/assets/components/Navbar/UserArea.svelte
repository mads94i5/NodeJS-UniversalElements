<script>
    import { authState, checkAuth } from "../../scripts/auth.js";
    import { Link } from "svelte-routing";
    import { onMount } from "svelte";

    let userIsLoggedIn = false;
    let isAdmin = false;

    $: {
        const { isLoggedIn, userData } = $authState;
        userIsLoggedIn = isLoggedIn;
        isAdmin = isLoggedIn && userData && userData.role === "admin";
    }
    
    onMount(async () => {
        await checkAuth();
    });
    window.addEventListener("beforeunload", async function(event) {
        await checkAuth();
    });
</script>

{#if userIsLoggedIn}
    <div class="user-area">
        {#if isAdmin}
            <Link to="/admin"><button class="btn btn-user btn-primary"><strong>Admin</strong></button></Link>
        {/if}
        <Link to="/profile"><button class="btn btn-user btn-primary"><strong>Profile</strong></button></Link>
        <Link to="/logout"><button class="btn btn-user btn-primary"><strong>Logout</strong></button></Link>
    </div>
{:else}
    <div class="user-area">
        <Link to="/register"><button class="btn btn-user btn-primary"><strong>Register</strong></button></Link>
        <Link to="/login"><button class="btn btn-user btn-primary"><strong>Login</strong></button></Link>
    </div>
{/if}
