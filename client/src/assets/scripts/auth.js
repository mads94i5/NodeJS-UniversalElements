import { fetchGetJson, fetchPostJson } from "./fetch";
import { AUTH_URL } from "./settings";
import { writable } from "svelte/store";

export const authState = writable({
    isLoggedIn: false,
    userData: null,
});

function setLoggedOut() {
    authState.update((state) => {
        state.isLoggedIn = false;
        state.userData = null;
        return state;
    });
}

function setLoggedIn(user) {
    authState.update((state) => {
        state.isLoggedIn = true;
        state.userData = user;
        return state;
    });
}

export async function checkAuth() {
    try {
        await fetchPostJson(AUTH_URL + "auth/refresh");
        const response = await fetchGetJson(AUTH_URL + "auth/check-auth");
        if (response.error !== "Unauthorized") {
            setLoggedIn(response);
        } else {
            try {
                setLoggedIn(response);
            } catch (err) {
                console.error("Token refresh error:", err.fullResponse.error);
                setLoggedOut();
            }
        }
    } catch (error) {
        console.error("Authentication check error:", error.message);
        setLoggedOut();
    }
}
