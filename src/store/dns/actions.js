import supabase from '../../services/supabase'

export default {

    async populateRecords( { commit } ){
        const { data, error } = await supabase.from("dns_records").select()
        if(error){
            alert("An error has occured while fetching your dns records");
        }
        console.log(data)
    },
    
    async addRecord({ commit  }, payload){

    }

}