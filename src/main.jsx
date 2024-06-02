import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import mockApi from './utils/mockApi.js'

console.log('URL_API:', URL_API)
console.log('import.meta.env.MODE:', import.meta.env.MODE)

if (import.meta.env.MODE === 'development') {
  mockApi()
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />

)
