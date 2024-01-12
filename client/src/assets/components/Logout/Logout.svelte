<script>
    import { onMount } from "svelte";
    import { checkAuth } from "../../scripts/auth.js";
    import { AUTH_URL } from "../../scripts/settings.js";
    import { fetchPostJson } from "../../scripts/fetch.js";
    import toastr from "toastr";
    import { navigate } from "svelte-routing";

    onMount(async () => {
        toastr.options = {
            positionClass: "toast-bottom-left",
        };
        toastr.info("Logging out..");
        try {
            await fetchPostJson(AUTH_URL + "auth/refresh");
            const response = await fetchPostJson(AUTH_URL + "auth/logout");
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
        } catch (err) {
            if (err.message) {
                if (err.message.toString().includes("Too many r")) {
                    toastr.error("Too many requests");
                } else {
                    toastr.error(err.message);
                }
            } else if (err.fullResponse) {
                toastr.error(err.fullResponse.error);
            } else {
                toastr.error("An unknown error occurred.");
            }
        }
    });
</script>