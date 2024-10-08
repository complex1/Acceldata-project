<template>
  <div class="home">
    <h1>Welcome To TODO APP</h1>
    <div class="todo-input">
      <input v-model="task" type="text">
      <button @click="saveTask" > Add </button>
    </div>
    <todo-card v-for="(todo, index) in getTodoList" :key="index" :index="index" :todo="todo" />
  </div>
</template>

<script>
import todoCard from '@/components/todoCard.vue'
import { mapGetters } from 'vuex'
export default {
  components: { todoCard },
  name: 'HomeView',
  data () {
    return {
      task: ''
    }
  },
  computed: {
    ...mapGetters(['getTodoList'])
  },
  methods: {
    saveTask () {
      if (this.task.trim().length) {
        this.$store.commit('addItemToList', this.task)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  max-width: 700px;
  height: 100vh;
  overflow: hidden;
  margin: auto;
  h1 {
    font-size: 30px;
    text-align: center;
  }
}
.todo-input {
  width: 100%;
  display: flex;
  align-items: center;
  grid-gap: 20px;
  input {
    flex-grow: 1;
    font-size: 14px;
    padding: 10px;
  }
  button {
    width: 100px;
    font-size: 14px;
    padding: 10px
  }
}
</style>
