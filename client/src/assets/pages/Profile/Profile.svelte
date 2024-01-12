<script>
    // @ts-nocheck
    import { onMount } from "svelte";
    import { authState, checkAuth } from "../../scripts/auth.js";
    import { fetchGetJson, fetchPostJson, fetchPatchJsonFormData, fetchDelete } from "../../scripts/fetch.js";
    import { API_URL, AUTH_URL } from "../../scripts/settings.js";
    import toastr from "toastr";
    import { navigate } from "svelte-routing";
    import Modal from "../../components/Modal/Modal.svelte";

    let showPopup = false;

    const onShowPopup = (ev) => {
        showPopup = true;
    };

    const onPopupClose = (data) => {
        showPopup = false;
        if (data === "accept") {
            deleteUser();
        }
    };

    export let userId;
    let user = [];
    let isAdmin = false;
    let isEditingUsername = false;
    let isEditingEmail = false;
    let isEditingPassword = false;

    $: {
        const { isLoggedIn, userData } = $authState;
        isAdmin = isLoggedIn && userData && userData.role === "admin";
    }

    onMount(async () => {
        toastr.options = {
            positionClass: "toast-bottom-left",
        };
        await getUserInfo();
    });

    async function getUserInfo() {
        await checkAuth();
        try {
            const response = await fetchGetJson(API_URL + "api/users/" + userId);
            if (response !== undefined) {
                user = response;
            } else {
                toastr.error("response.error: " + response.error);
            }
        } catch (error) {
            if (error.message) {
                if (error.message.toString().includes("Too many r")) {
                    toastr.error("Too many requests");
                } else {
                    toastr.error("error.message: " + error.message);
                }
            } else if (error.fullResponse) {
                toastr.error("error.fullResponse: " + error.fullResponse.error);
            } else {
                toastr.error("An unknown error occurred.");
            }
        }
    }

    function startEditUsername() {
        isEditingUsername = true;
    }

    async function endEditUsername() {
        isEditingUsername = false;
    }

    async function submitUsername() {
        toastr.info("Changing username..");
        const usernameForm = document.getElementById("usernameForm");
        await fetchPostJson(AUTH_URL + "auth/refresh");
        try {
            const response = await fetchPatchJsonFormData(API_URL + `api/users/edit/username/${userId}`, usernameForm);
            if (response.message !== undefined) {
                toastr.success(response.message);
            } else {
                if (response.error !== undefined) {
                    toastr.error(response.error);
                } else {
                    const responseText = await response.text();
                    toastr.error(responseText);
                }
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
        endEditUsername();
        await getUserInfo();
    }

    function startEditEmail() {
        isEditingEmail = true;
    }

    async function endEditEmail() {
        isEditingEmail = false;
    }

    async function submitEmail() {
        toastr.info("Changing email..");
        const emailForm = document.getElementById("emailForm");
        await fetchPostJson(AUTH_URL + "auth/refresh");
        try {
            const response = await fetchPatchJsonFormData(API_URL + `api/users/edit/email/${userId}`, emailForm);
            if (response.message !== undefined) {
                toastr.success(response.message);
            } else {
                if (response.error !== undefined) {
                    toastr.error(response.error);
                } else {
                    const responseText = await response.text();
                    toastr.error(responseText);
                }
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
        endEditEmail();
        await getUserInfo();
    }

    function startEditPassword() {
        isEditingPassword = true;
    }

    async function endEditPassword() {
        isEditingPassword = false;
    }

    async function submitPassword() {
        toastr.info("Changing password..");
        const passwordForm = document.getElementById("passwordForm");
        await fetchPostJson(AUTH_URL + "auth/refresh");
        try {
            const response = await fetchPatchJsonFormData(API_URL + `api/users/edit/password/${userId}`, passwordForm);
            if (response.message !== undefined) {
                toastr.success(response.message);
            } else {
                if (response.error !== undefined) {
                    toastr.error(response.error);
                } else {
                    const responseText = await response.text();
                    toastr.error(responseText);
                }
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
        endEditPassword();
        await getUserInfo();
    }

    async function deleteUser() {
        toastr.info("Deleting user..");
        await fetchPostJson(AUTH_URL + "auth/refresh");
        try {
            const response = await fetchDelete(API_URL + `api/users/${userId}`);
            if (response.message !== undefined) {
                toastr.success(response.message);
                if ($authState.userData.userId === userId) {
                    navigate("/logout");
                } else if (isAdmin) {
                    navigate("/users");
                }
            } else {
                if (response.error !== undefined) {
                    toastr.error(response.error);
                } else {
                    const responseText = await response.text();
                    toastr.error(responseText);
                }
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
    }
</script>

<div class="container">
    <div class="text-center">
        <h2>Profile</h2>
        <br />
        {#if !isEditingUsername}
            <div class="row">
                <div class="col-xs-2 col-xs-offset-2">
                    <p><strong>Username:</strong></p>
                </div>
                <div class="col-xs-4">
                    <p>{user.username}</p>
                </div>
                <div class="col-xs-2">
                    <button class="btn btn-success" on:click={startEditUsername}><strong>Edit</strong></button>
                </div>
            </div>
        {:else}
            <form id="usernameForm" on:submit|preventDefault={submitUsername}>
                <div class="row">
                    <div class="col-xs-2 col-xs-offset-2">
                        <p><strong>Username:</strong></p>
                    </div>
                    <div class="col-xs-4">
                        <input id="username" name="username" bind:value={user.username} />
                    </div>
                    <div class="col-xs-2">
                        <button class="btn btn-success" type="submit"><strong>Submit</strong></button>
                        <button class="btn btn-danger" on:click={endEditUsername}><strong>Cancel</strong></button>
                    </div>
                </div>
            </form>
        {/if}
        <br />
        {#if !isEditingEmail}
            <div class="row">
                <div class="col-xs-2 col-xs-offset-2">
                    <p><strong>Email:</strong></p>
                </div>
                <div class="col-xs-4">
                    <p>{user.email}</p>
                </div>
                <div class="col-xs-2">
                    <button class="btn btn-success" on:click={startEditEmail}><strong>Edit</strong></button>
                </div>
            </div>
        {:else}
            <form id="emailForm" on:submit|preventDefault={submitEmail}>
                <div class="row">
                    <div class="col-xs-2 col-xs-offset-2">
                        <p><strong>Email:</strong></p>
                    </div>
                    <div class="col-xs-4">
                        <input id="email" name="email" bind:value={user.email} />
                    </div>
                    <div class="col-xs-2">
                        <button class="btn btn-success" type="submit"><strong>Submit</strong></button>
                        <button class="btn btn-danger" on:click={endEditEmail}><strong>Cancel</strong></button>
                    </div>
                </div>
            </form>
        {/if}
        <br />
        {#if !isEditingPassword}
            <div class="row">
                <div class="col-xs-2 col-xs-offset-2">
                    <p><strong>Password:</strong></p>
                </div>
                <div class="col-xs-4"><p>********</p></div>
                <div class="col-xs-2">
                    <button class="btn btn-success" on:click={startEditPassword}><strong>Edit</strong></button>
                </div>
            </div>
        {:else}
            <form id="passwordForm" on:submit|preventDefault={submitPassword}>
                <div class="row">
                    <div class="col-xs-2 col-xs-offset-2">
                        <p><strong>Password:</strong></p>
                    </div>
                    <div class="col-xs-4">
                        <input id="password" name="password" type="password" bind:value={user.password} />
                    </div>
                    <div class="col-xs-2">
                        <button class="btn btn-success" type="submit"><strong>Submit</strong></button>
                        <button class="btn btn-danger" on:click={endEditPassword}><strong>Cancel</strong></button>
                    </div>
                </div>
            </form>
        {/if}
        <br />
        <div class="row text-center">
            <div class="col-xs-2 col-xs-offset-2">
                <p><strong>Delete User:</strong></p>
            </div>
            <div class="col-xs-4"></div>
            <div class="col-xs-2">
                <button type="button" class="btn btn-danger" on:click={onShowPopup}><strong>Delete</strong></button>
                <Modal open={showPopup} onClosed={(data) => onPopupClose(data)} title="Delete user">Do you want to delete this user?</Modal>
            </div>
        </div>
        <br />
    </div>
</div>