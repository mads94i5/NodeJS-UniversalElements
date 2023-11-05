<script>
    import { Router, Link, Route } from "svelte-routing";
    import { authState } from "../../scripts/auth.js";
    import UserArea from "./UserArea.svelte";
    import UserGuard from "../Guards/UserGuard.svelte";
    import AdminGuard from "../Guards/AdminGuard.svelte";
    import Home from "../../pages/Home/Home.svelte";
    import Logout from "../Logout/Logout.svelte";
    import Login from "../../pages/Login/Login.svelte";
    import Register from "../../pages/Register/Register.svelte";
    import Profile from "../../pages/Profile/Profile.svelte";
    import Admin from "../../pages/Admin/Admin.svelte";
    import Users from "../../pages/Users/Users.svelte";
    import Error from "../../pages/Error/Error.svelte";
    import Unauthorized from "../../pages/Error/Unauthorized.svelte";

    export let url = "";
</script>

<Router {url}>
    <nav>
        <Link to="/"><button class="btn btn-primary"><strong>Home</strong></button></Link>
        <UserArea />
    </nav>
    <div>
        <Route path="/"><Home /></Route>
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
        <Route path="/unauthorized"><Unauthorized /></Route>
        <Route path="*"><Error /></Route>
    </div>
</Router>
