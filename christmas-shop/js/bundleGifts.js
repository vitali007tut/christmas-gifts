import './burger.js'
import './giftsFilter.js'
import './ScrollToTop.js'
import { randomGifts } from './randomGifts.js'
import { setFilterMode } from './giftsFilter.js'
import {setModalMode} from './modal.js'

randomGifts(36, '.gift-items-block', '.')
setFilterMode()
setModalMode()