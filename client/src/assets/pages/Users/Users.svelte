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
            await fetchPostJson(AUTH_URL + "auth/refresh");
            const response = await fetchGetJson(API_URL + "api/users");
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
    });
</script>

<div class="container">
    <h2 class="text-center">Users</h2>
    <br />
    <div class="table-container">
        <table class="blue-border" width="100%">
            <thead>
                <tr>
                    <th class="tbl-padding border" style="width: 5%;">ID</th>
                    <th class="tbl-padding border" style="width: 35%;">Username</th>
                    <th class="tbl-padding border" style="width: 35%;">Email</th>
                    <th class="tbl-padding border" style="width: 10%;">Role</th>
                    <th class="tbl-padding border">Profile</th>
                </tr>
            </thead>
            <tbody id="table-body">
                {#each users as user (user.id)}
                    <tr>
                        <td class="tbl-padding border">{user.id}</td>
                        <td class="tbl-padding border">{user.username}</td>
                        <td class="tbl-padding border">{user.email}</td>
                        <td class="tbl-padding border">{user.role}</td>
                        <td class="text-center border"
                            ><a href="/profile/{user.id}"><button class="btn btn-primary"><strong>View profile</strong></button></a></td
                        >
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
    <br />
</div>