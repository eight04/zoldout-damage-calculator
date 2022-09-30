<script>
import {currentPage as page} from "./env.mjs";
</script>

<ul>
  <li class:active={page === "sword"}><a href=".">劍</a></li>
  <li class:active={page === "bow"}><a href="bow.html">弓</a></li>
  <li class:active={page === "wand"}><a href="wand.html">杖</a></li>
  <li class:active={page === "tome"}><a href="tome.html">書</a></li>
</ul>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: .2em;
}
a {
  display: block;
  padding: .4em .8em;
}
.active a {
  background: #eee;
}
</style>
