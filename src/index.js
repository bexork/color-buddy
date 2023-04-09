import fs from 'fs'
import YAML from 'yaml'

const config = YAML.parse(fs.readFileSync('../.starkeeper-conf.yaml', 'utf8'))



//fs.writeFileSync(
//  '../StarkeeperMediaPlayerApp/.starkeeper-media.yaml',
//  YAML.stringify(media)
//)
//fs.writeFileSync(
//  '../StarkeeperMediaPlayerApp/.starkeeper-media.json',
//  JSON.stringify(media)
//)
