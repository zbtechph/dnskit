import store from '../store'

export default (to, from) => {

    const loggedIn = store.state.session.user ? true : false;

    const anonOnlyRoutes = [
        'login', 'register', 'recover'
    ];

    if (loggedIn && anonOnlyRoutes.includes(to.name)) {
        return { name: "home" }
    }

    if(!loggedIn && to.meta.requiresAuth){
        return { name: "login", query: { redirect: to.fullPath } }
    }

}