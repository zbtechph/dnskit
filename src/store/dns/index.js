import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {

    state : () => ({
        records: []
    }),
    getters,
    mutations,
    actions,
    namespaced: true

}