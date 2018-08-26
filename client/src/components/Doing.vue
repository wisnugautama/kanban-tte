<template>
    <div class="kartu">
    <v-toolbar color="yellow">
      <v-toolbar-title>Doing</v-toolbar-title>
    </v-toolbar>

    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
        <v-flex xs12 v-for="(data,i) in doing" v-bind:key="i" v-if="data.status == 'doing'">
        <v-card color="cyan darken-4" class="white--text">
            <v-card-title primary-title>
            <div class="headline">Title : {{ data.title }}</div>
            </v-card-title>
            <v-card-text>
                <h4>Desc : {{ data.description }}</h4>
                <h4>Point : {{ data.point }}</h4>
                <h4>Assigned To : {{ data.assign }}</h4>
            </v-card-text>
            <!-- <v-card-actions> -->
            <v-btn @click="todo(data,i)">Todo</v-btn>
            <v-btn @click="remove(i)">Delete</v-btn>
            <v-btn @click="done(data,i)">Done</v-btn>
            <!-- </v-card-actions> -->
        </v-card>
        </v-flex>
        </v-layout>
      </v-container>
    </v-card>

    
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: ['doing'],

    methods: {
        ...mapActions([
            'removeTask',
            'updateToTodo',
            'updateToDone'
        ]),

        remove (id) {
            this.removeTask(id)
        },

        todo (data,id) {
            let obj = {
                title: data.title,
                description: data.description,
                assign: data.assign,
                point: data.point,
                id: id,
                status: data.status
            }
            this.updateToTodo(obj)
        },

        done (data,id) {
            let obj = {
                title: data.title,
                description: data.description,
                assign: data.assign,
                point: data.point,
                id: id,
                status: data.status
            }

            this.updateToDone(obj)
        }
    }
}
</script>

<style scoped>
    .kartu {
        margin-right: 20px;
        color: black;
    }

    .v-btn {
        background-color: darkblue;
    }
</style>
