import HttpService from "../httpServices/httpService";
class NoteService {

    CreateNoteService(data) {
        // http://localhost:3000/api/v1/notes
        let token = localStorage.getItem('token')
        console.log("create note services", data);
        let option = {
            headers: {
                "Content.Type": 'application/Json',
                "Authorization": 'bearer ' + token
            }
        }
        return HttpService.PostService('notes', data, option)
    }
    GetAllNoteService() {
        let token = localStorage.getItem('token')
        let option = {
            headers: {
                "Content.Type": 'application/Json',
                "Authorization": 'bearer ' + token
            }
        }
        return HttpService.Get('notes', option)

    }
    UpdateNotes(data) {
       
        let token = localStorage.getItem('token')
        let option = {
            headers: {
                "Content.Type": 'application/Json',
                "Authorization": 'bearer ' + token
            }
        }
        return HttpService.Put(`notes/${data.noteid}`, data, option)

    }
    archiveNoteById(data) {
        let token = localStorage.getItem('token')
        let option = {
            headers: {
                "Content.Type": 'application/Json',
                "Authorization": 'bearer ' + token
            }
        }
        return HttpService.Put(`notes/${data.noteid}/isarchive`, data, option)
    }

    DeleteNotes(data) {
        let token = localStorage.getItem('token')
        let option = {
            headers: {
                "Content.Type": 'application/Json',
                "Authorization": 'bearer ' + token
            }
        }
        return HttpService.Put(`notes/${data.noteid}/istrash`, data, option)
    }

    getallarchiveNoteById() {
        let token = localStorage.getItem('token')
        let option = {
            headers: {
                "Content.Type": 'application/Json',
                "Authorization": 'bearer ' + token
            }
        }
        return HttpService.Get('notes', option)
    }

    getAllTrashedNotes() {
        let token = localStorage.getItem('token')
        let option = {
            headers: {
                "Content.Type": 'application/Json',
                "Authorization": 'bearer ' + token
            }
        }
        return HttpService.Get('notes', option)
    }
    colourNoteById(data) {
        let token = localStorage.getItem('token')
        let option = {
            headers: {
                "Content.Type": 'application/Json',
                "Authorization": 'bearer ' + token
            }
        }
        return HttpService.Put('notes', data, option)
    }
}
export default new NoteService()