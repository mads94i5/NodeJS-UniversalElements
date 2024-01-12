<script>
    import { AUTH_URL } from "../../scripts/settings.js";
    import { fetchGetJson, fetchPostJsonFormData } from "../../scripts/fetch.js";
    import { checkAuth } from "../../scripts/auth.js";
    import { onMount } from "svelte";
    import toastr from "toastr";
    import { navigate } from "svelte-routing";

    onMount(() => {
        const form = document.querySelector("#form");

        toastr.options = {
            positionClass: "toast-bottom-left",
        };

        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            toastr.info("Logging in..");
            try {
                const response = await fetchPostJsonFormData(AUTH_URL + "auth/login", form);
                if (response.message !== undefined) {
                    toastr.success(response.message);
                    await checkAuth();
                    navigate("/");
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
                        toastr.error("Too many login attempts");
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
    });
</script>

<div class="container">
    <div class="text-center">
        <h2>Login</h2>
        <br />
        <form class="form" id="form">
            <div class="row">
                <div class="col-1">
                    <label for="username">Username</label>
                </div>
                <div class="col-6">
                    <input type="text" id="username" name="username" required />
                </div>
            </div>
            <br />
            <div class="row">
                <div class="col-1">
                    <label for="password">Password</label>
                </div>
                <div class="col-6">
                    <input type="password" id="password" name="password" required />
                </div>
            </div>
            <br />
            <a href="/register"><button class="btn btn-primary" type="button" id="register"><strong>Register</strong></button></a>
            <button class="btn btn-success" type="submit" id="submit"><strong>Submit</strong></button>
        </form>
        <br />
        <div id="result" />
    </div>
</div>