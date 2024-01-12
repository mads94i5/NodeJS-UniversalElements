<script>
    import { Link } from "svelte-routing";
</script>

<div class="container">
    <div class="text-center">
        <h2>Admin</h2>
        <br />
        <div class="row">
            <div class="col-xs-6">
                <Link to="/users"><button class="btn btn-primary"><strong>Users</strong></button></Link>
            </div>
            <div class="col-xs-6">
                <Link to="/elements"><button class="btn btn-primary"><strong>Elements</strong></button></Link>
            </div>
        </div>
    </div>
</div>
