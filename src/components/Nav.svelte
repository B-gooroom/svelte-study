<script>
  import { link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
</script>

<nav class="nav">
  <ul>
    <li><h2><a href="/" use:link use:active>Home</a></h2></li>
    <li><h2><a href="/members" use:link use:active>Members</a></h2></li>
    <li><h2><a href="/search" use:link use:active>Search</a></h2></li>
  </ul>
</nav>
