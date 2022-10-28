<template>
    <div>
        <div>
            <!-- <CreateNotes></CreateNotes> -->
            <DisplayNotes v-bind:NoteListArray="NotesArray"></DisplayNotes>

        </div>
    </div>


</template>

<script>

// import CreateNotes from "@/components/CreateNotes.vue";
import DisplayNotes from "@/components/DisplayNotes.vue";
import NoteService from '../services/userService/NoteService';

export default {
    name: "TrashAllNotes",
    components: {
        // CreateNotes,
        DisplayNotes
    },
    data() {
        return {
            NotesArray: [],
        }
    },
    methods: {
        Trash() {
            console.log("calling Trash function");
            NoteService.getAllTrashedNotes().then((response) => {
                console.log(response);
                let Trash = response.data.data.filter(function (t){
                    return t.Trash !=1;
                });
                console.log(Trash);
                this.NotesArray = Trash
                this.NotesArray.reverse()
                //this.$router.push('dashbordbar/')
            }).catch((error) => {
                console.log(error);
            })

        },

    },
    mounted() {
        this.getAllTrashedNotes()
    }
}

</script>