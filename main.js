import './style/style.scss'

import {
  popup
} from './scripts/popup.js'
import {
  news
} from './scripts/news'

news(document.querySelector('.news__container'))
popup(document.querySelector('.aside__form'), document.querySelector('.popup'))