<template>
  <div>
    <ul>
      {{msg}}
      <li>
        <slot />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      msg: 'nihao'
    }
  },
  props: ['text']
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
