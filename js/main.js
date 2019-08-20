import '../index.pug'
import '../styles/main.scss'
import {select, selectAll, c} from './utils'
import genRandomNums from './genRandomNums'
import handleCellClick from './handleCellClick'
import {mainState} from './gameState'
import {populateCellsWithHiddenNumbers} from './updateHtml'
import './test'


// game data
mainState.gameArr = genRandomNums(1, 10, 12)


// populate cells with hidden numbers
populateCellsWithHiddenNumbers()
