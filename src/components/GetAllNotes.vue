<template>
    <div>
        <div>
            <CreateNotes></CreateNotes>
            <DisplayNotes v-bind:NoteListArray="NotesArray"></DisplayNotes>

        </div>
    </div>


</template>

<script>

import CreateNotes from "@/components/CreateNotes.vue";
import DisplayNotes from "@/components/DisplayNotes.vue";
import NoteService from '../services/userService/NoteService';

export default {
    name: "GetAllNotes",
    components: {
        CreateNotes,
        DisplayNotes
    },
    data() {
        return {
            NotesArray: [],
        }
    },
    methods: {
        GetAllListNotes() {
            console.log('GetAllNotes called')
            NoteService.GetAllNoteService().then((response) => {
                console.log(response);
                console.log(this.NotesArray)
                this.NotesArray = response.data.data;
                this.NotesArray.reverse();
                //this.$router.push('dashbordbar/')
                
            }).catch((error) => {
                console.log(error);
            })
        },

    },
    mounted() {
        this.GetAllListNotes()
    }
}

</script>