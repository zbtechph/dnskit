import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import guard from './guard'

const router = createRouter({
    routes,
    history: createWebHistory()
})

router.beforeEach(guard)

export default router