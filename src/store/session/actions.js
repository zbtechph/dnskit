import supabase from "../../services/supabase"

export default {

    async authStateObserver({ commit }) {
        return await supabase.auth.onAuthStateChange((_, session) => {
            if (session) commit("SET_USER", session.user)
        })
    },

    async login({ commit }, payload) {
        const { email, password } = payload
        const { user, error } = await supabase.auth.signIn({ email, password })
        if (error) throw new Error(error.message)
        return user;
    },

    async logout({ commit }) {
        await supabase.auth.signOut()
        commit("SET_USER", null)
    }

}