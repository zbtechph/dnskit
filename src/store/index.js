import { createStore } from 'vuex';
import session from './session'
import dns from './dns'

const store = createStore({
    state: () => ({
        count: 0
    }),
    modules: {
        session,
        dns
    }
})

export default store