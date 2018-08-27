import Vue from 'vue'
import Vuex from 'vuex'
import db from './fireabase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    task_list: ''
  },
  mutations: {
    setTaskList(state, payload) {
      state.task_list = payload
    }
  },
  actions: {
    createTask (context, data) {
      db.ref('tasks/').push({
        title: data.title,
        description: data.description,
        point: data.point,
        assign: data.assign,
        status: 'backlog'
      })
    },

    getAllTask (context,data) {
        db.ref('tasks/').on('value', function(snapshot) {
          let result = snapshot.val()
          context.commit('setTaskList', result)
        })
      },

    removeTask (context, data) {
      db.ref('tasks/').child(data).remove()
    },
    
    updateToTodo(context, data) {
      db.ref('tasks/' + data.id).set({
        title: data.title,
        description: data.description,
        point: data.point,
        assign: data.assign,
        status: 'todo'
      })
    },

    updateToLog(context, data) {
      db.ref('tasks/' + data.id).set({
        title: data.title,
        description: data.description,
        point: data.point,
        assign: data.assign,
        status: 'backlog'
      })
    },

    updateToDoing(context, data) {
      db.ref('tasks/' + data.id).set({
        title: data.title,
        description: data.description,
        point: data.point,
        assign: data.assign,
        status: 'doing'
      })
    },
    updateToDone(context, data) {
      db.ref('tasks/' + data.id).set({
        title: data.title,
        description: data.description,
        point: data.point,
        assign: data.assign,
        status: 'done'
      })
    }
  }
})
