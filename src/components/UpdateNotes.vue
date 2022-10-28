<template>
    <v-dialog v-model="show" max-width="500px">
        <v-card style="height: 180px">

            <div style="text-align: left; padding-left: 20px;">
                <input type="text" v-model="Title" />
            </div>
            <div style="text-align: left; padding-left: 20px;">

                <input type="text" v-model="Description" />
            </div>
            <div class="iconns">
                <NoteIcons v-bind:NoteObject="NoteData">
                </NoteIcons>
            </div>
            <div class="btn_in_update">
                <v-card-actions>
                    <v-btn small color="white" elevation="0" @click.stop="show = false" @click="submit">Close</v-btn>
                </v-card-actions>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>

import NoteIcons from '@/components/iconNote.vue'
import NoteService from '../services/userService/NoteService'
export default {
    name: 'DialogueNote',
    components: {
        NoteIcons
    },
    data() {
        return {

            dialog: false,
            Title: 'object',
            Description: 'object',

        }
    },
    props: {
        value: Boolean,
        NoteData: {},

    },
    methods: {
        submit() {
            console.log("calling submit for update");



            let reqData = {
                Title: this.Title,
                Description: this.Description,
                noteid: this.NoteData._id


            };

            console.log(reqData)
            NoteService.UpdateNotes(reqData).then((response) => {
                console.log(response);
            })
                .catch((error) => {
                    console.log(error);
                });
        },
    },



    computed: {
        show: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            },
        },

    },
    Title: {
        get() {
            return this.NoteData.Title;
        },
        set(value) {
            this.$emit("input", value);
        },

    },
    Description: {
        get() {
            return this.NoteData.Description;
        },
        set(value) {
            this.$emit("input", value);
        },
    },

    mounted() {

        this.Title = this.NoteData.Title
        this.Description = this.NoteData.Description
    },
}
</script>

<style scoped>
.btn_in_update {
    padding-left: 400px;
    margin-top: -50px;

}

.iconns {
    display: flex;
    flex-direction: row;
    gap: 18px;
    /* margin-right: 25px; */
    padding-top: 65px;
    padding-left: 5px;
    padding-bottom: 10px;
    margin-top: 2px;
}

.description_txt {
    margin-left: -160px;
}

.title_text {
    margin-left: -160px;
    padding-top: 10px;
}
</style>