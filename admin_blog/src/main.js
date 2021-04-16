import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/lib/theme-chalk/index.css' 
import installElementPlus from './plugins/element'
//markdown引入
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

VMdPreview.use(githubTheme);

const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).use(VMdPreview).mount('#app')