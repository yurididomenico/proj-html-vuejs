import Vue from 'vue'
import App from './App.vue'


import { library } from '@fortawesome/fontawesome-svg-core'

import { faPhoneFlip, faEnvelope, faGraduationCap, faBuildingColumns,
         faPlay, faSignal, faGear, faMaximize, faGlobe, faAddressBook,
         faPlus, faChevronRight, faComments
        } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faYoutube, faInstagram} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* add icons to the library */
library.add(
  faPhoneFlip, faEnvelope, faGraduationCap, faBuildingColumns,
  faPlay, faSignal, faGear, faMaximize, faGlobe, faAddressBook,
  faPlus, faChevronRight, faComments,
  faFacebookF, faTwitter, faYoutube, faInstagram
)
/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


