import axios, {AxiosError} from "axios";
export const AxiosGlobal = async (methode:string,url:string,data?:any ,params?:string)=>{
    const baseUrl = "http://localhost:8080/"
    switch (methode){
        case "get":
            try {
                const response = await axios.get(`${baseUrl}/${url}`)
                return response.data
            }
            catch (e:any) {
                throw new Error(e.message)
            }
            break;
        case"post":
            try {
                const response= await axios.post(`${baseUrl}/${url}`)
                return response.data
            }
            catch (e:any) {
                throw new Error(e.message)
            }
            break;
        case"put":
            try {
                const response= await axios.put(`${baseUrl}/${url}`)
                return response.data
            }
            catch (e:any) {
                throw new Error(e.message)
            }
            break;
    }
}