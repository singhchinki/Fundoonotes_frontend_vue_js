<template>
    <div class="text-center">
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <div style="margin-top:4px;">
                    <v-img style="width:20px" class="ic" :src="require('../components/icons/more_vert.svg')"
                        elevation="0" v-bind="attrs" v-on="on">
                    </v-img>
                </div>
            </template>
            <v-list>

                <v-list-item >
                    <v-list-item-title @click="deleteNote()">Delete Note </v-list-item-title>
                     <!-- <v-list-item-title @click="AddLabel()">Add Label </v-list-item-title> --> 
                </v-list-item>
            </v-list>
            <!-- <v-list>
            <v-list-item v-for="(item, i) in items" :key="i" @click="() => {}">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
            </v-list> -->
        </v-menu>
    </div>
</template>
<script>
import NoteService from '@/services/userService/NoteService';
export default {
    data: () => ({
        items: [
            { title: 'Delete Note' },
            { title: 'Add Label' },
            { title: 'Add Drawing' },
            { title: 'Make a copy' },
            { title: 'Show CheckBox' },
            { title: 'Copy to Google Docs' },
        ],
    }),
    props: {
        noteId: Object

    },
    methods: {
        deleteNote() {
            console.log("calling delete function");
            console.log(this.noteId)

            let reqData = {
                noteid: this.noteId._id
            }
            console.log(reqData)
            NoteService.DeleteNotes(reqData).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
        }
    }
}
</script>