<template>
  <div>
    <p class="card">
      {{text}}-{{msg}}
        <p><slot />
          </p>
    </p>
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
