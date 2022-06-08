import { createContext } from 'react'

// Menu data context
const HeaderContext = createContext({
  squareJson: require('../../FileService/menu/square.json'),
  buycryptoJson: require('../../FileService/menu/buycrypto.json'),
  tradeJson: require('../../FileService/menu/trade.json'),
  derivarivesJson: require('../../FileService/menu/derivatives.json'),
  earnJson: require('../../FileService/menu/earn.json'),
  financeJson: require('../../FileService/menu/finance.json')
})

export default HeaderContext
