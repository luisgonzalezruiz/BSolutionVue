/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

//import 'devextreme/dist/css/dx.material.orange.light.compact.css';
//import 'devextreme/dist/css/dx.carmine.css';

// import 'devextreme/dist/css/dx.carmine.compact.css';

import 'devextreme/dist/css/dx.material.blue.light.compact.css';


/* import './styles.scss'; */



// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
