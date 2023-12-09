<script>
    import toastr from "toastr";
    import { authState, checkAuth } from "../../scripts/auth.js";
    import { fetchGetJson } from "../../scripts/fetch.js";
    import { API_URL } from "../../scripts/settings.js";
    import MessageBubble from "./MessageBubble.svelte";
    import io from "socket.io-client";
    import { afterUpdate, onMount } from "svelte";

    const socket = io(API_URL, {
        withCredentials: true,
    });

    let message = "";
    let messages = [];
    let user;

    async function submitText() {
        await checkAuth();
        try {
            const response = await fetchGetJson(API_URL + "api/users/" + $authState.userData.userId);
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

        socket.emit("client-message", {
            text: message,
            username: user.username,
        });

        message = "";
    }

    socket.on("server-message", (data) => {
        messages = [
            ...messages,
            {
                text: data.text,
                username: data.username,
            },
        ];
    });

    afterUpdate(() => {
        scrollToBottom();
    });

    function scrollToBottom() {
        const chatBox = document.getElementById("chat-box");
        chatBox.scrollTop = chatBox.scrollHeight;
    }
</script>

<div class="container">
    <div class="text-center">
        <h2>Chat</h2>
        <br />
        <p>
            Discuss the universal elements here.<br />
        </p>
        <div id="chat-box" class="chat-box blue-border vertical-scrollable-content">
            {#each messages as message}
                <MessageBubble username={message.username} 
                isSelf={user.username === message.username ? "self" : "other"}>
                    {message.text}
                </MessageBubble>
            {/each}
        </div>
        <br />
        <div class="row">
            <form id="chatForm" on:submit|preventDefault={submitText}>
                <div class="col-xs-10">
                    <input id="message-input" bind:value={message} style="width: 100%;" />
                </div>
                <div class="col-xs-2" style="height: 2.8rem">
                    <div>
                        <button type="submit" style="background-color: transparent; border: 0;">
                            <i class="fa-solid fa-circle-arrow-right fa-2xl" style="color: #6d7ad8;"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <br />
</div>
