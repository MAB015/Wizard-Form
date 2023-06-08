import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store/store.tsx'
import { Provider } from 'react-redux'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/style.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
