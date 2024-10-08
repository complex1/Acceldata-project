import { createStore } from 'vuex'

export default createStore({
  state: {
    todoList: []
  },
  getters: {
    getTodoList: (state) => state.todoList
  },
  mutations: {
    addItemToList (state, item) {
      state.todoList = [...state.todoList, {
        title: item,
        isDone: false,
        isIgnored: false,
        date: new Date().toDateString()
      }]
    },
    setDone (state, index) {
      state.todoList = state.todoList.map((val, _index) => {
        if (_index === index) {
          val.isDone = true
        }
        return val
      })
    },
    setIgnored (state, index) {
      state.todoList = state.todoList.map((val, _index) => {
        if (_index === index) {
          val.isIgnored = true
        }
        return val
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
