<template>
    <div class="kartu">
    <v-toolbar color="red">
      <v-toolbar-title>Back-Log</v-toolbar-title>
    </v-toolbar>

    <v-card class="dalam">
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
        <v-flex xs12 v-for="(data,i) in backlog" v-bind:key="i" v-if="data.status == 'backlog'">
        <v-card color="red lighten-4" class="dalam">
            <v-card-title primary-title>
            <div class="headline">Title : {{ data.title }}</div>
            </v-card-title>
            <v-card-text>
                <h4>Desc : {{ data.description }}</h4>
                <h4>Point : {{ data.point }}</h4>
                <h4>Assigned To : {{ data.assign }}</h4>
            </v-card-text>
            
            <v-btn @click="remove(i)">Delete</v-btn>
            <v-btn @click="update(data,i)">Todo</v-btn>
            
        </v-card>
        </v-flex>
        </v-layout>
      </v-container>
    </v-card>

    
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    props: ['backlog'],

    methods: {
        ...mapActions([
            'removeTask',
            'updateToTodo'
        ]),

        remove (id) {
            this.removeTask(id)
        },

        update (data,id) {
            let obj = {
                title: data.title,
                description: data.description,
                assign: data.assign,
                point: data.point,
                id: id,
                status: data.status
            }
            this.updateToTodo(obj)
        }
    }
}
</script>

<style scoped>
    .kartu {
        margin-right: 20px;
        color: white;
    }

    .dalam {
        color: black;
    }

    .v-btn {
        background-color: darkblue;
        color: white;
    }
</style>
