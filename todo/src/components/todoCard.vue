<template>
  <div class="todo-card">
    <div class="todo-card-title">
      {{todo.title}}
    </div>
    <div class="todo-card-title" >
      <span>{{todo.date}}</span>
      <div>
        <button @click="setDone" >Done</button>
        <button @click="setIgnore" >Ignore</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'todoCardComponent',
  props: {
    todo: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {
    setDone () {
      this.$store.commit('setDone', this.index)
    },
    setIgnore () {
      this.$store.commit('setIgnored', this.index)
    }
  },
  created () {},
  mounted () {}
}
</script>
<style lang='scss' scoped>
</style>
