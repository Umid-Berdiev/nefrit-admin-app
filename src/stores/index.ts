import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainStore = defineStore('main', {
  // const confirmModalState = ref(false)

  // function getConfirmModalState() {
  //   return confirmModalState.value
  // }

  // function setConfirmModalState(value: boolean) {
  //   console.log('value: ', value)

  //   confirmModalState.value = value
  // }

  // function toggleConfirmModalState() {
  //   confirmModalState.value = !confirmModalState.value
  // }

  // return {
  //   confirmModalState,
  //   getConfirmModalState,
  //   setConfirmModalState,
  //   toggleConfirmModalState,
  // }

  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    todos: [],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
    // type will be automatically inferred to number
    nextId: 0,
    confirmModalState: false,
  }),
  getters: {
    finishedTodos(state) {
      // autocompletion! ✨
      return state.todos.filter((todo) => todo.isFinished)
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished)
    },
    /**
     * @returns {{ text: string, id: number, isFinished: boolean }[]}
     */
    filteredTodos(state) {
      if (this.filter === 'finished') {
        // call other getters with autocompletion ✨
        return this.finishedTodos
      } else if (this.filter === 'unfinished') {
        return this.unfinishedTodos
      }
      return this.todos
    },
    getConfirmModalState(state) {
      return state.confirmModalState
    },
  },
  actions: {
    // any amount of arguments, return a promise or not
    addTodo(text) {
      // you can directly mutate the state
      this.todos.push({ text, id: this.nextId++, isFinished: false })
    },
  },
})
