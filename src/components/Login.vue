<template>
    <div class="main_center_div">
        <div class="central_box">
            <div class="class_with_padding">
                <div class="center_first_three">

                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-col>
                            <div class="heading">
                                <!-- <span>Fundoo Notes</span> -->
                                <span class="f">F</span>
                                <span class="u">u</span>
                                <span class="n">n</span>
                                <span class="d">d</span>
                                <span class="o">o</span>
                                <span class="oo">o</span>
                            </div>
                            <div class="top_text_fill">
                                <h4>LOGIN</h4>
                            </div>
                            <div class="create_tag">
                                <div>
                                    <span>Create your Fundoo Account</span>
                                </div>
                            </div>
                            <div class="email">
                                <v-text-field v-model="email" :rules="emailRules" label="E-mail"
                                    hint="you can use letters& numbers and perid" required outlined></v-text-field>
                            </div>


                            <div class="passwords">
                                <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password"
                                    required outlined @click:append="show1 = !show1"></v-text-field>
                            </div>
                            <div class="forgotPasswordbutton"><a href="http://localhost:8080/forget" width="368"
                                    height="20">Forgot email </a>
                            </div>

                            <div class="paragraph">
                                <p>Not your computer? Use Guest mode to sign in privately.</p>
                            </div>
                            <div class="createaccountandnextbutton">
                                <v-btn :disabled="!valid" color="primary" class="mr-4" @click="login" >
                                    Next
                                </v-btn>
                            </div>
                            <div class="create"><a style="margin-right:250px"
                                    href="http://localhost:8080/Register">Create account</a></div>
                        </v-col>
                    </v-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import UserService from '../services/userService/userService'
export default {
    name: 'LoginUI',
    data: () => ({
        valid: true,
        show1: false,
        show2: true,
        password: '',
        email: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],

        checkbox: false,
    }),

    methods: {
        login() {
            let reqBody = {
                Email_Id: this.email,
                Password: this.password
            }
            console.log("login function calling", this.email, this.password)
            UserService.loginService(reqBody)
            .then((result) => {
                console.log("result--->",result);
                localStorage.setItem('token',result.data.data)
                this.$router.push('dashbordbar')
            })
            .catch((error) => {
                console.log(error);
            });
            this.$refs.form.validate();
        }

    }
    
}

</script>
<style scoped lang="scss">
.f {
    color: blue;
    font-weight: bold;
    font-family: sans-serif;
    text-align: center
}

.u {
    color: red;
    font-weight: bold;
    font-family: sans-serif;
    text-align: center
}

.n {
    color: yellow;
    font-weight: bold;
    font-family: sans-serif;
    text-align: center
}

.d {
    color: blue;
    font-weight: bold;
    font-family: sans-serif;
    text-align: center
}

.o {
    color: green;
    font-weight: bold;
    font-family: sans-serif;
    text-align: center
}

.oo {
    color: red;
    font-weight: bold;
    font-family: sans-serif;
    text-align: center
}

.heading {
    padding-bottom: -30px;
    // padding-left: 155px;
    // padding-top: 5px;
    // //   height: 100px;
    // /* height: 10px; */
    // width: 10px;

    line-height: -0.5%;
    height: 100%;
    width: 25%;
    text-align: center;

    position: relative;
    left: 38%;

    font-family: 'Google Sans', 'Noto Sans Myanmar UI', arial, sans-serif;
    font-size: 20px;
    font-weight: 40px;
    padding-top: 20px;
}

body {
    background: #fff;
    direction: ltr;
    margin: 0;
    padding: 0;
    color: #212124;
}

.main_center_div {
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 5%;
}

.central_box {
    width: 368px + 90px;
    height: 416px + 48px + 100px;
    padding: 48px 40px 36px 40px;
    margin: 0;
    border-style: solid;
    border-width: 1px;
    border-color: #c2c2ca;
    border-radius: 8px;
    box-sizing: border-box;
}

.top_text_fill {
    width: 368px;
    height: 50px;
    padding-top: 10px;
    box-sizing: border-box;
    font-size: 20px;
}

.Adjustment {
    width: 366px !important;
    height: 22px !important;
    margin: 20px 0 20px 0 !important;
}



.center_first_three {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    text-align: center;
}

.button {
    display: flex;
    justify-content: flex-end;
    padding-bottom: -10px;
    margin-top: 0px;
    margin-left: 0px;
}

.button a {
    padding-left: 20px;
    font-weight: 500;
}


.paragraph {
    // border: 2px solid red;
    color: #5f6368;
    font-size: 14px;
    line-height: 1.4286;
    position: relative;
    top: 50%;
    left: 6%;
    margin-top: -5%;
    margin-right: 10%;
    padding-top: 12%;

}

.createaccountandnextbutton {
    // border: 2px solid black;
    position: relative;
    left: 20%;
    width: 100%;
    // height: 5%;
    top: -15%;
    font-size: 14px;
    padding-top: 5%;

    height: 20px;
    padding: 6px 8px;
    margin: 20x;
    margin-left: 20%;
    margin-top: 6%;


}

.forgotPasswordbutton {
    // border: 1px solid yellow;
    position: relative;
    left: -20%;
    right: 40%;
    width: 70%;
    padding-top: 8%;

    top: 20%;
    bottom: 100%;
    font-size: 14px;
    height: 40px;
    // padding: 6px 8px;
    margin: 2px;
    margin-top: -10%;

}

.create {
    margin-top: -5%;
}
</style>