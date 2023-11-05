import { fetchPostJson } from "./fetch";
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
        const response = await fetch(AUTH_URL + "check-auth", {
            method: "GET",
            credentials: "include",
        });
        if (response.ok) {
            const user = await response.json();
            if (user.error !== "Unauthorized") {
                setLoggedIn(user);
            } else {
                try {
                    await fetchPostJson(AUTH_URL + "refresh");
                    setLoggedIn(user);
                } catch (err) {
                    console.error("Token refresh error:", err.fullResponse.error);
                    setLoggedOut();
                }
            }
        } else {
            setLoggedOut();
        }
    } catch (error) {
        console.error("Authentication check error:", error.message);
    }
}
