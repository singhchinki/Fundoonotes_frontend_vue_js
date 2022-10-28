<template>
  <div class="to_Center_Div">
    <div class="central_box">
      <div class="box_with_padding">
        <div class="Left_box">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-col>
              <div class="Fundoo_logo">

                <span class="f">F</span>
                <span class="u">u</span>
                <span class="n">n</span>
                <span class="d">d</span>
                <span class="o">o</span>
                <span class="oo">o</span>
              </div>
              <div class="create_tag">
                <div>
                  <span>Create your Fundoo Account</span>
                </div>
              </div>

              <div class="first_last_name">
                <v-text-field v-model="firstname" :rules="nameRules" label="First name" dense required outlined>
                </v-text-field>
                <v-text-field v-model="lastname" :rules="nameRules" label="Last name" dense required outlined>
                </v-text-field>
              </div>

              <div class="email">
                <v-text-field v-model="email" :rules="emailRules" label="Username"
                  hint="you can use letters& numbers and perid" dense required outlined></v-text-field>
                <!-- <v-hint class="latters">You can use letters,numbers & periods</v-hint> -->
              </div>


              <div class="passwords">
                <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" dense required outlined
                  @click:append="show1 = !show1"></v-text-field>
                <v-text-field v-model="confirm" :rules="nameRules" label="Confirm" type="password" dense required
                  outlined>
                </v-text-field>

              </div>
              <!-- <v-hint class="use">Use 8 or more characters with a mix of letters, numbers &symbols</v-hint> -->
              <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?"
                required>
              </v-checkbox>

              <div class="button_signin">
                <div>
                  <a href="http://localhost:8080/login">Sign in instead</a>
                </div>
              </div>

              <div class="botton">
                <v-btn color="primary" class="mr-4" @click="signup">
                  Next
                </v-btn>
              </div>
            </v-col>
          </v-form>
        </div>
        <div class="imageandpara">
          <img src="../assets/account.svg" alt="Image" width="244" height="244" />

        </div>
      </div>
    </div>
  </div>

</template>
  
<script>

import UserService from '../services/userService/userService'
export default {

  name: 'RegistrationComponent',

  data: () => ({
    valid: true,
    show1: false,
    show2: true,
    firstname: '',
    lastname: '',
    // email: '',
    password: '',
    confirm: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],

    checkbox: false,
    
  }),
  methods: {
    signup() {
      let reqBody = {
        FirstName: this.firstname,
        LastName: this.lastname,
        Email_Id: this.email,
        Password: this.password
      }
      console.log("sign up function calling", this.firstname, this.lastname, this.email, this.password)
      UserService.registrationService(reqBody)
        .then((result) => {
          console.log("SingUp--->",result);
          this.$router.push('Login')
        })
        .catch((error) => {
          console.log(error);
        });
      this.$refs.form.validate();

    }

  }

}
</script>
  
<style scoped>
.first_last_name {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;
  /* padding: 6px 8px; */
}

.passwords {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;
}

.email {
  width: 100%;
  height: 30%;
}

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

.Fundoo_logo {
  padding-bottom: 5px;
  padding-left: -400px;
  padding-top: 5px;
  /* height: 10px; */
  width: 100px;
  font-size: 25px;
}

.create_tag {
  font-size: 22px;
  font-weight: 500;
  line-height: 1.9999;
  padding-top: 1px;
  width: 290px;
}

.imageandpara {
  left: 42%;
  width: 1px;
  height: 40%;
  top: 10%;
  margin-top: 10%;
  margin-left: 10%;
}

.button_signin {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}

.to_Center_Div {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 5%;
}

.central_box {
  width: 650px;
  height: 505px;
  padding: 48px 40px 36px 40px;
  margin: 0;
  border-style: solid;
  border-width: 1px;
  border-color: #9a9a9c;
  border-radius: 5px;
  box-sizing: content-box;
}

.box_with_padding {
  display: flex;
}

.Left_box {
  width: 354px;
  height: 425px;

}

.botton {
  left: 10px;
  right: 10px;
  padding-left: 350px;
  padding-top: -10px;
  margin-top: -10%;
  color: blue;
  /* background-color: blue; */

}

.space {
  left: -100px;
  right: 100px;
  /* padding-left: 350px; */
  padding-top: 270px;
}

.para {
  /* border: 2px solid yellow; */

  left: 50%;
  bottom: 50%;
  font-size: 16px;
  font-weight: 300;
  margin-left: 15%;

}

.latters {
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

.use {
  color: #5f6368;
  font-size: 14px;
  line-height: 1.4286;
  position: relative;
  top: 50%;
  left: 6%;
  margin-top: -50%;
  margin-right: 10%;
  padding-top: 12%;
}
</style>