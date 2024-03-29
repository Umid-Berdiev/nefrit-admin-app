import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainStore = defineStore('main', {
  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    todos: [],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
    // type will be automatically inferred to number
    nextId: 0,
    confirmModalState: false,
    contractDownloadModalState: false,
    confirmModalOkButtonColor: 'danger',
    confirmState: false,
  }),
  getters: {
    getConfirmModalState(state) {
      return state.confirmModalState
    },
    getConfirmState(state) {
      return state.confirmState
    },
  },
  // actions: {
  //   // any amount of arguments, return a promise or not
  //   addTodo(text) {
  //     // you can directly mutate the state
  //     this.todos.push({ text, id: this.nextId++, isFinished: false })
  //   },
  // },
})
