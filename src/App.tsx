import { useState } from 'react'

export default function App() {
  const [hasPermission, setHasPermission] = useState(false)

  return (
    <div className="App">
      <button
        onClick={() => {
          navigator.mediaDevices
            .getUserMedia({
              audio: true,
            })
            .then(function (stream) {
              /* 使用这个stream stream */
              console.log('获得录音授权成功')
              setHasPermission(true)
            })
            .catch(function (err) {
              /* 处理error */
              console.log('获得录音授权失败')
              setHasPermission(false)
            })
        }}
      >
        点击测试录音权限
      </button>
      <span>当前{hasPermission ? '已经获得' : '暂未获得'}录音权限</span>
    </div>
  )
}
