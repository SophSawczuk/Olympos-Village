
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import i18next from 'i18next'
import global_tr from "./components/locales/tr/global.json"
import global_en from "./components/locales/en/global.json"
import { I18nextProvider } from 'react-i18next'


i18next.init({
  interpolation: { escapeValue: false },
  lng: "tr",
  fallbackLng: 'en',
  resources: {
    tr: {
      translation: global_tr
    },
    en: {
      translation: global_en
    }
  }
})

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </BrowserRouter>,
)
