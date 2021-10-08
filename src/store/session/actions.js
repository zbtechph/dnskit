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

    async loginWith({ commit }, payload) {
        const { user, error } = await supabase.auth.signIn({ provider: payload })
        if (error) throw new Error(error.message)
        return user;
    },

    async signup({ commit }, payload) {
        const { email, password } = payload
        const { user, error } = await supabase.auth.signUp({ email, password })
        if (error) throw new Error(error.message)
        return user;
    },

    async logout({ commit }) {
        await supabase.auth.signOut()
        commit("SET_USER", null)
    },

    async resetPassword({ commit }, payload) {
        const { email } = payload
        const { data, error } = await supabase.auth.api.resetPasswordForEmail(email)
        if (error) throw new Error(error.message)
        return data;
    }

}