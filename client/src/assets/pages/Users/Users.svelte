<script>
    import { onMount } from "svelte";
    import { API_URL, AUTH_URL } from "../../scripts/settings.js";
    import { fetchGetJson, fetchPostJson } from "../../scripts/fetch.js";
    import toastr from "toastr";

    let users = [];

    onMount(async () => {
        toastr.options = {
            positionClass: "toast-bottom-left",
        };
        toastr.info("Retrieving users..");
        try {
            await fetchPostJson(AUTH_URL + "refresh");
            const response = await fetchGetJson(API_URL + "users");
            if (response !== undefined) {
                toastr.success("Retrieved users");
                users = response;
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
    <h2 class="text-center">Users</h2>
    <br />
    <div class="table-container">
        <table width="100%">
            <thead>
                <tr>
                    <th style="width: 5%;">ID</th>
                    <th style="width: 35%;">Username</th>
                    <th style="width: 45%;">Email</th>
                    <th>Role</th>
                    <th>Profile</th>
                </tr>
            </thead>
            <tbody id="table-body">
                {#each users as user (user.id)}
                <tr>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td><a href="/profile/{user.id}"><button class="btn btn-primary">View profile</button></a></td>
                </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>
