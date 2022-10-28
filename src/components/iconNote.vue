<template>
    <div class="ic" style="margin right:10px">
        <img class="ic" style="width:20px" :src="require('../components/icons/add_alert.svg')" />
        <img style="width:20px" class="ic" :src="require('../components/icons/person_add.svg')" />
        <MoreVertMenuColor v-bind:noteId="NoteObject"></MoreVertMenuColor>
        <!-- <img @click="color()" style="width:15px" class="ic" :src="require('../components/icons/palette.svg')" /> -->
        <img style="width:20px" margin-right:20px class="ic" :src="require('../components/icons/image.svg')" />
        <img @click="ArchiveNotes()" style="width:20px" class="ic" :src="require('../components/icons/archive.svg')" />
        <MoreVertMenu v-bind:noteId="NoteObject"></MoreVertMenu>
    </div>
</template>

<script>

import MoreVertMenuColor from '../components/MoreVertMenuColor.vue'
import MoreVertMenu from  '../components/MoreVertMenu.vue'
import  NoteService  from '@/services/userService/NoteService';

export default {
    name: "NoteIcons",
    components: { MoreVertMenu, MoreVertMenuColor },
    props:
    {
        NoteObject: {},
        colour: [],
    },
    //archive method
    methods: {
        ArchiveNotes() {
            console.log("calling archived function");
            console.log(this.NoteObject)
            let reqData = {
                 noteid: this.NoteObject._id,
            }
            console.log(  this.NoteObject,)
            NoteService.archiveNoteById(reqData).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
        },
    }
}



</script>

<style scoped>
.ic {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: space-around;
    padding-bottom: 10px;
    padding-top: 5px;
    padding-left: 2px;
    /* width: 20px; */
}
</style>