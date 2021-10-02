export default [

    {
        name: 'home',
        path: '/',
        component: () => import('../pages/Home.vue')
    },
    {
        name: 'account',
        path: '/account',
        component: () => import('../pages/Account.vue')
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('../pages/auth/Login.vue')
    },
    {
        name: 'register',
        path: '/register',
        component: () => import('../pages/auth/Register.vue')
    },
    {
        name: 'recovery',
        path: '/recovery',
        component: () => import('../pages/auth/Recovery.vue')
    },
    {
        name: 'password',
        path: '/password',
        component: () => import('../pages/auth/Password.vue')
    }

]