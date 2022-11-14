import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'

import JYRequest from './service'

createApp(App).mount('#app')

console.log('-------------')


JYRequest.request({
  url: '/lyric?id=500665346'
}).then(res => {
  console.log("res: ", res);
})

JYRequest.request({
  url: '/lyric',
  params: {
    id: 500665346
  }
}).then(res => {
  console.log("res: ", res);
})
