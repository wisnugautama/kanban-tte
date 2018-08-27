<template>
    <div class="kartu">
    <v-toolbar color="green">
      <v-toolbar-title>Done</v-toolbar-title>
    </v-toolbar>

    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
        <v-flex xs12 v-for="(data,i) in done" v-bind:key="i" v-if="data.status == 'done'">
        <v-card color="teal" class="white--text">
            <v-card-title primary-title>
            <div class="headline">Title : {{ data.title }}</div>
            </v-card-title>
            <v-card-text>
                <h4>Desc : {{ data.description }}</h4>
                <h4>Point : {{ data.point }}</h4>
                <h4>Assigned To : {{ data.assign }}</h4>
            </v-card-text>
            
            <v-btn @click="remove(i)">Delete</v-btn>
            <v-btn @click="doing(data,i)">Doing</v-btn>
            
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
    props: ['done'],

    methods: {
        ...mapActions([
            'removeTask',
            'updateToDoing'
        ]),

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
        color: black;
    }

    .v-btn {
        background-color: darkblue
    }
</style>
