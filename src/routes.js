import Home from './components/contents/Home.svelte';
import Members from './components/contents/Members.svelte';
import Search from './components/contents/Search.svelte';

const routes = {
  '/': Home,
  '/members': Members,
  '/search': Search
}

export default routes;
