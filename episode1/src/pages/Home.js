import {useQuery} from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
    const {data,isLoading,isError,refetch} = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => {
            return res.data;
        })
    })
    if(isLoading){
        return <h1>IsLoading.....</h1>
    }
    if(isError){
        return <h1>Error</h1>
    }
    return <h1>This is HomePage <p>{data?.fact}</p>
    <button onClick={refetch}>Update Data</button></h1>
}
