
import { useQuery } from "react-query";
import axios from "axios";


export const useGetData = () => {


const fetchProducts = () => {
    
    return axios(`https://635d5bf4686fae05ef84a2d2--kutez-case-api.netlify.app/`)

}

return useQuery(["Products Data"], () => fetchProducts(),{
    select: data => data.data
})
}
