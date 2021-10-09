export default {
    ADD_RECORD(state, payload) {
        state.records.push(payload)
    },
    EMPTY_RECORDS(state) {
        state.records.splice(0, state.records.length)
    },
    DELETE_RECORD(state, payload) {
        const index = state.records.findIndex(record => record.id === payload);
        state.records.splice(index, 1);
    }
}