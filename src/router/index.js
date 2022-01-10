
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Board',
        name: 'Board',
        component: () => import ('../views/Board.vue')
    }
]

export default routes