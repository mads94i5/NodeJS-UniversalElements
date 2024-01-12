<script>
    import { AUTH_URL } from "../../scripts/settings.js";
    import { fetchPostJsonFormData } from "../../scripts/fetch.js";
    import { onMount } from "svelte";
    import toastr from "toastr";

    onMount(() => {
        const form = document.querySelector("#form");

        toastr.options = {
            positionClass: "toast-bottom-left",
        };

        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            toastr.info("Trying to register...");
            try {
                const response = await fetchPostJsonFormData(AUTH_URL + "auth/register", form);
                if (response.token !== undefined) {
                    toastr.success("Registered successfully!");
                    setTimeout(function () {
                        window.location.href = "/login";
                    }, 1500);
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
        });
    });
</script>

<div class="container">
    <div class="text-center">
        <h2>Register</h2>
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
                    <label for="email">Email</label>
                </div>
                <div class="col-6">
                    <input type="email" id="email" name="email" required />
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
            <a href="/login"><button class="btn btn-primary" type="button" id="login"><strong>Login</strong></button></a>
            <button class="btn btn-success" type="submit" id="submit"><strong>Register now!</strong></button>
        </form>
        <br />
        <div id="result" />
    </div>
</div>