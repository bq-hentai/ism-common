import '../styles/index.styl'
import $ from 'jquery'
// import util from './util'
import router from '../router'
import header from '@/components/header'

router.init()

header.mount($('.app-header'))

export default function main () { }
