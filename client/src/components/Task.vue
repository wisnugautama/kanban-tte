<template>
    <div class="container">
    <v-layout>
    <v-dialog v-model="dialog" persistent max-width="1000px">
      <v-btn slot="activator" class="white">New Task</v-btn>
      <v-card class="ho">
        <v-card-title>
          <span class="headline">Add New Task</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field v-model="title" label="Title" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="description" label="Description" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="point" label="Point" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="assign" label="Assigned To" required></v-text-field>
              </v-flex>
              
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" @click="newTask" @click.native="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
    data () {
        return {
            dialog: false,
            title: '',
            description: '',
            point: '',
            assign: ''
        }
    },

    methods: {
        ...mapActions([
            'createTask'
        ]),

        newTask () {
          let obj = {
            title: this.title,
            description: this.description,
            point: this.point,
            assign: this.assign
          }
          this.createTask(obj)
        }
    }
}
</script>

<style>
    .ho {
        background-color: white;
    }
</style>
