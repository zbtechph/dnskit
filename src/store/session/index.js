import mutations from './mutations'
import actions from './actions'

export default {
    state: () => ({
        user: null
    }),
    mutations,
    actions,
    namespaced: true
}