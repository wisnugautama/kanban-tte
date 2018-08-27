<template>
    <div class="kartu">
    <v-toolbar color="indigo">
      <v-toolbar-title>Todo</v-toolbar-title>
    </v-toolbar>

    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
        <v-flex xs12 v-for="(data,i) in todo" v-bind:key="i" v-if="data.status == 'todo'">
        <v-card color="indigo" class="white--text">
            <v-card-title primary-title>
            <div class="headline">Title : {{ data.title }}</div>
            </v-card-title>
            <v-card-text>
                <h4>Desc : {{ data.description }}</h4>
                <h4>Point : {{ data.point }}</h4>
                <h4>Assigned To : {{ data.assign }}</h4>
            </v-card-text>
            <!-- <v-layout row wrap> -->
            <v-btn @click="backToLog(data,i)">Backlog</v-btn>
            <v-btn @click="remove(i)">Delete</v-btn>
            <v-btn @click="doing(data,i)">Doing</v-btn>
            <!-- </v-layout> -->
        </v-card>
        </v-flex>
        </v-layout>
      </v-container>
    </v-card>

    
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    props: ['todo'],

    methods: {
        ...mapActions([
            'updateToLog',
            'updateToDoing',
            'removeTask'
        ]),

        backToLog (data,id) {
            let obj = {
                title: data.title,
                description: data.description,
                assign: data.assign,
                point: data.point,
                id: id,
                status: data.status
            }
            this.updateToLog(obj)
        },

        remove (id) {
            this.removeTask(id)
        },

        doing (data,id) {
            let obj = {
                title: data.title,
                description: data.description,
                assign: data.assign,
                point: data.point,
                id: id,
                status: data.status
            }
            this.updateToDoing(obj)
        }
    }
}
</script>

<style scoped>
    .kartu {
        margin-right: 20px;
        color: white;
    }

    .v-btn {
        background-color: darkblue;
    }
</style>
