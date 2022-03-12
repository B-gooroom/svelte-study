<script>
  import Header from "./components/Header.svelte";
  import Nav from "./components/Nav.svelte";
  import Footer from "./components/Footer.svelte";
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
      <div>
        <h3>Members</h3>
        <p>Contents</p>
      </div>
    </section>
    <hr />
  </div>
  <Footer />
</div>
