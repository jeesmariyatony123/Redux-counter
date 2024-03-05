import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import counterStore from './counterStore.js'

//step2: add Provider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*step2: add Provider and store completed store creation and can access by everyone in this */}
    <Provider store={counterStore}> <App /></Provider>
  </React.StrictMode>,
)
