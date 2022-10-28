import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistrationComponent from '../components/Registration.vue'
import LoginComponent from '../components/Login.vue'
import ForgetPass from '../components/ForgetPass.vue'
import ResetPass from '../components/ResetPass.vue'
import DashbordBar from '../components/DashbordBar.vue'
import createNote from '../components/CreateNotes.vue'
import GetAllNotes from '../views/GetNote.vue'
import Dialog from '../components/Dialog.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Register',
    name: 'RegistrationComponent',
    component: RegistrationComponent
  },
  {
    path: '/createnote',
    name: 'createComponent',
    component: createNote
  },

  {
    path: '/dashbordbar',
    name: 'DashbordBar',
    component: DashbordBar,
    children:[
      {
        name: 'GetAllNotes',
        path: '/',
        component: GetAllNotes
      }
    ]
  },
  {
    path: '/Dialogbox',
    name: 'Dialog',
    component: Dialog
  },
  {
    path: '/forget',
    name: 'ForgetPass',
    component: ForgetPass
  },
  {
    path: '/resetpassword/:token',
    name: 'ResetPass',
    component: ResetPass
  },

  {
    path: '/Login',
    name: 'LoginComponent',
    component: LoginComponent
  },
  {
    path: '/about',
    name: 'about',

    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
