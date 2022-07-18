import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import VueToast from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';





createApp(App).use(router).use(VueToast).use(VueSweetalert2).mount('#app')