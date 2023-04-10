import fs from 'fs'
import YAML from 'yaml'
import {
  createNeons,
  generateNeonCSS,
  neonRoots,
  randomLinearGradient
} from './colors.js'

const config = YAML.parse(fs.readFileSync('../.starkeeper-conf.yaml', 'utf8'))

const l = randomLinearGradient(4)
console.log(l)

const g = createNeons(neonRoots.red)
console.log(r)

const b = createNeons(neonRoots.green)
console.log(g)

const r = createNeons(neonRoots.blue)
console.log(b)

const css = generateNeonCSS(16)

fs.writeFileSync('out.css', css, 'utf8')
//fs.writeFileSync(
//  '../StarkeeperMediaPlayerApp/.starkeeper-media.json',
//  JSON.stringify(media)
//)
