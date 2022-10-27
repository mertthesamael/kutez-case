
import { useQuery } from "react-query";
import axios from "axios";


export const useGetData = () => {


const fetchProducts = () => {
    
    return axios(`https://635aaed69fd73556e7ce3bd4--kutez-case-api.netlify.app`)

}

return useQuery(["Products Data"], () => fetchProducts(),{
    select: data => data.data
})
}
