
import Bitcoin from './components/pages/Bitcoin'
import Btc from './components/pages/Btc'
import Rupiah from './components/pages/Rupiah'

export default {
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path: '/',
            name: 'Bitcoin',
            component: Bitcoin
        },
        {
            path: '/btc',
            name: 'btc_to_rupiah',
            component: Btc
        },
        {
            path: '/rupiah',
            name: 'rupiah_to_btc',
            component: Rupiah
        }
    ]
}