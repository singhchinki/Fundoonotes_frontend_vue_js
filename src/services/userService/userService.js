import HttpService from "../httpServices/httpService";
class UserService {
    loginService(data) {
        // http://localhost:3000/api/v1/users/login
        console.log("login user services", data);
        let option = {
            headers: {
                "Content.Type": 'application/Json'
            }
        }
        return HttpService.PostService('users/login', data, option)
    }
    registrationService(data) {
        console.log("Sign Up user services", data);
        let option = {
            headers: {
                "Content.Type": 'application/Json'
            }
        }
        return HttpService.PostService('users', data, option)

    }
    fogetService(data) {
        let option = {
            headers: {
                "Content.Type": 'application/Json'
            }
        }
        return HttpService.PostService('users/forgetPassword', data, option)

    }
    resetpwdService(data, token) {
        let option = {
            headers: {
                'Authorization': token,
                "Content.Type": 'application/Json',

            }
        }
        return HttpService.Put('users/resetpassword/' + token, data, option)
    }
}
export default new UserService()