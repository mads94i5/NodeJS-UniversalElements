<script>
    export let username;
    export let isSelf;
</script>

<div class="chat-bubble chat-bubble-{isSelf}" style="position: relative; left: {isSelf === 'self' ? '47%' : '0'};">
    <p><strong>{username}:</strong></p>
    <p><slot /></p>
</div>