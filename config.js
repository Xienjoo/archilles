import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6282163342693', 'Xienjo', true]
] //Numeros de owner 

global.mods = ['62895359712065'] 
global.prems = ['6282163342693', '6282163342693', '6282163342693']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'Archilles┃ᴮᴼᵀ' 
global.author = '@xien.avl' 
global.fgig = '▢ Ikuti saya di Instagram \nhttps://www.instagram.com/xienjo\n' 
global.dygp = ''
global.fgsc = 'https://github.com/Xienjoo' 
global.fgyt = 'https://chat.whatsapp.com/GslJldm1X5FFUildkaCn9x'
global.fgpyp = 'https://sociabuzz.com/archillesroleplay'
global.fglog = 'https://i.ibb.co/4JMBWWg/Archilles.jpg' 

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})