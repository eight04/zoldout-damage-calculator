<script>
export let method, field, text;

function sort() {
  if (method.field !== field) {
    method.field = field;
    method.dir = 1;
  } else {
    method.dir *= -1;
  }
}
</script>
<button
  class:sorted={method.field === field}
  class:reversed={method.dir < 0}
  on:click={sort}>{text}</button>


