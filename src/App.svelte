<script>
  import Header from "./components/Header.svelte";
  import Nav from "./components/Nav.svelte";
  import Footer from "./components/Footer.svelte";
  import Router from "svelte-spa-router";
  import routes from "./routes";
</script>

<div id="app">
  {#if 1 === 1}
    <Header />
  {/if}
  <hr />
  <div class="container">
    <Nav />
    <hr />
    <section class="contents">
      <Router {routes} />
    </section>
    <hr />
  </div>
  <Footer />
</div>
