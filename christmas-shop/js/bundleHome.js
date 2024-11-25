import './burger.js'
import './slider.js'
import './timer.js'
import {setModalMode} from './modal.js'
import { randomGifts } from './randomGifts.js'

randomGifts(4, '.home-gifts-cards-container')
setModalMode()