<script>
    import { Link } from "svelte-routing";
</script>

<div class="container">
    <div class="text-center">
        <h2>Error</h2><br>
        <p>
            401 Unauthorized.
            <br><br>
            You do not have authorization to this link. <br>
            Click <Link to="/login">here</Link> to login.<br>
            Or <Link to="/">here</Link> to return to the frontpage.<br>
        </p>
    </div>
</div>