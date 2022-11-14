// 1.发送request请求
axios.request({
  url: 'http://123.207.32.32:8000/home/multidata',
  method: 'get'
}).then(res => {
  console.log(res.data, '==========')
})

// 2.发送get请求
axios.get('http://123.207.32.32:9001/lyric', {
  params: {
    id: 500665346
  }
}).then(res => {
  console.log(res.data.lrc, '歌词')
})

// 3.发送post请求
axios.post('http://152.136.185.210:5000/login', {
  name: 'coderwhy',
  password: '123456'
}).then(res => {
  console.log(res.data, '登陆成功')
})