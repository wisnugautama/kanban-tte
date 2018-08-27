<template>
    <div class="container fluid">
    <Task></Task>
    <v-layout row wrap>
        <v-flex xs3>
            <BackLog :backlog="this.task_list"></BackLog>
        </v-flex>
        <v-flex xs3>
            <Todo :todo="this.task_list"></Todo>
        </v-flex>
        <v-flex xs3>
            <Doing :doing="this.task_list"></Doing>
        </v-flex>
        <v-flex xs3>
            <Done :done="this.task_list"></Done>
        </v-flex>
    </v-layout>
    </div>
</template>

<script>
import BackLog from '@/components/BackLog.vue'
import Todo from '@/components/Todo.vue'
import Doing from '@/components/Doing.vue'
import Done from '@/components/Done.vue'
import Task from '@/components/Task.vue'
import { mapActions, mapState } from "vuex";
export default {
    name: 'task',
    components: {
        BackLog,
        Todo,
        Doing,
        Done,
        Task
    },

    methods: {
        ...mapActions([
            'getAllTask'
        ])
    },

    computed: {
        ...mapState([
            'task_list'
        ])
    },

    mounted () {
        this.getAllTask()
    }
}
</script>

<style scoped>

</style>
