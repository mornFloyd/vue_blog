import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import 'assets/icon/iconfont.css'

//markdown预览插件引入
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';


VMdPreview.use(githubTheme,{
  codeHighlightExtensionMap: {
    javascript: 'html'
  }
});

const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).use(VMdPreview).mount('#app')