<script>
    import { Router, Link, Route } from "svelte-routing";
    import { authState, checkAuth } from "../../scripts/auth.js";
    import { onMount } from "svelte";
    import UserGuard from "../Guards/UserGuard.svelte";
    import AdminGuard from "../Guards/AdminGuard.svelte";
    import Home from "../../pages/Home/Home.svelte";
    import ElementsTable from "../../pages/Elements/ElementsTable.svelte";
    import Element from "../../pages/Elements/Element.svelte";
    import Elements from "../../pages/Elements/Elements.svelte";
    import Chat from "../../pages/Chat/Chat.svelte";
    import Logout from "../Logout/Logout.svelte";
    import Login from "../../pages/Login/Login.svelte";
    import Register from "../../pages/Register/Register.svelte";
    import Profile from "../../pages/Profile/Profile.svelte";
    import Admin from "../../pages/Admin/Admin.svelte";
    import Users from "../../pages/Users/Users.svelte";
    import Error from "../../pages/Error/Error.svelte";
    import Unauthorized from "../../pages/Error/Unauthorized.svelte";
    import AddElement from "../../pages/Elements/AddElement.svelte";

    export let url = "";

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
    window.addEventListener("beforeunload", async function (event) {
        await checkAuth();
    });
</script>

<Router {url}>
    <nav>
        <Link to="/"><img src="/assets/images/icon.png" alt="" class="nav-icon" /></Link>
        <Link to="/table"><button class="btn btn-nav btn-primary"><strong>Table</strong></button></Link>
        {#if userIsLoggedIn}
            <Link to="/chat"><button class="btn btn-nav btn-primary"><strong>Chat</strong></button></Link>
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
    </nav>
    <div>
        <Route path="/"><Home /></Route>
        <Route path="/table"><ElementsTable /></Route>
        <Route path="/chat">
            <UserGuard>
                <Chat />
            </UserGuard>
        </Route>
        <Route path="/login"><Login /></Route>
        <Route path="/register"><Register /></Route>
        <Route path="/logout"><Logout /></Route>
        <Route path="/profile">
            <UserGuard>
                <Profile userId={$authState.userData.userId} />
            </UserGuard>
        </Route>
        <Route path="/profile/:id" let:params>
            <AdminGuard>
                <Profile userId={params.id} />
            </AdminGuard>
        </Route>
        <Route path="/admin">
            <AdminGuard>
                <Admin />
            </AdminGuard>
        </Route>
        <Route path="/users">
            <AdminGuard>
                <Users />
            </AdminGuard>
        </Route>
        <Route path="/elements">
            <AdminGuard>
                <Elements />
            </AdminGuard>
        </Route>
        <Route path="/elements/:id" let:params>
            <AdminGuard>
                <Element elementId={params.id} />
            </AdminGuard>
        </Route>
        <Route path="/elements/new">
            <AdminGuard>
                <AddElement />
            </AdminGuard>
        </Route>
        <Route path="/unauthorized"><Unauthorized /></Route>
        <Route path="*"><Error /></Route>
    </div>
</Router>
