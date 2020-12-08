<template>
  <div
    class="u-b-0"
    :class="{
      light: status,
      'box-bot': type === 0,
      'user-box': type === 1
    }"
  >
  </div>
</template>

<script>
export default {
  name: 'Box',
  props: ["name", "status", "type"]
}
</script>
