export default {
    getRecordById: (state) => (id) => {
        return state.records.filter(record => record.id === id)[0]
    },
    getRecordByHostname: (state) => (hostname) => {
        return state.records.filter(record => record.hostname === hostname)[0]
    }
}