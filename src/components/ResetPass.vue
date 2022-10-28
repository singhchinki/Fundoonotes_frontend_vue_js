<template>
  <div class="main_center_div">
    <div class="central_box">
      <div class="class_with_padding">
        <div class="center_first_three">
          <v-form>
            <v-col ref="form" v-model="valid" lazy-validation>
              <div class="Fundoo_logo">
                <!-- <span>Fundoo Notes</span> -->
                <span class="f">F</span>
                <span class="u">u</span>
                <span class="n">n</span>
                <span class="d">d</span>
                <span class="o">o</span>
                <span class="oo">o</span>
              </div>
              <div class="top_text_fill">
                <span>Enter new Password</span>
              </div>
              <div class="passwordNEW">
                <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'" name="input-10-1" label="Enter New Password" counter outlined
                  @click:append="show1 = !show1"></v-text-field>
              </div>
              <div class="passwords">
                <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'" name="input-10-1" label="Re-Enter Password" counter outlined
                  @click:append="show1 = !show1"></v-text-field>
              </div>
              <div class="button">

                <v-btn :disabled="!valid" color="primary" class="mr-4" @click="reset">
                  Next
                </v-btn>
              </div>
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
  name: 'ResetPass',
  data() {
    return {
      token: "",
      valid: true,
      show1: false,
      show2: true,
      password: 'Password',

    }
  },
  mounted() {
        this.token = this.$route.params.token
        console.log("mounted", this.token);
  },
  methods: {
    reset() {
      let reqBody = {
                //Email_Id: this.email,
                Password: this.password
            }
            console.log("reset function calling",this.password)
            UserService.resetpwdService(reqBody,this.token)
            .then((result) => {
                console.log(result);
                
            })
            .catch((error) => {
                console.log(error);
            });
           // this.$refs.form.validate();
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

.main_center_div {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 5%;
}

.central_box {
  width: 368px + 80px;
  height: 418px + 48px + 36px;
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
  height: 64px;
  padding-top: 16px;
  box-sizing: border-box;
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
  padding-bottom: 20px;
  margin-top: 26px;
  margin-left: -8px;
  color: red;
}

.Fundoo_logo {
  font-size: 20px;
}
</style>