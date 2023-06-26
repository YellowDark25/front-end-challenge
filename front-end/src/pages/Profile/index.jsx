import { useEffect, useState } from "react"
import { getUser } from "../../services/api"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import Axolote from "../../img/Axolote.jpg"

export function Profile() {
    const {user} = useParams();
    const [data, setdata] = useState([]);

    var data1 = [];

    data1 = data.map((event) => {return(event)})
    data1 = data1.sort((a,b) => new Date(b.created_at) - new Date(a.created_at))

    async function getRepositories() {
        await getUser(user).then((response) => {
            setdata(response.data);
            console.log(data);
        })
    }
    useEffect(() => {getRepositories()}, []);
    
    return (
        <>
        <Box
        bgcolor={"#293542"}
        height={"100vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ backgroundImage: `url(${Axolote})`, backgroundSize: "cover", backgroundPosition: "center"}}
        >

            <Box
            bgcolor={"rgba(255,255,255,0.85)"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            borderRadius={10}
            p={15}
            gap={2}
            >
                <h1>Repositório do usuário</h1>
            {
                data1.map((event) => {
                    return(
                        <>
                        
                        <a
                        href={event.html_url}
                        target="_blank"
                        rel="noreferrer"
                        style={{textDecoration: "none", color: "black", border: "1px solid black", borderRadius: "5px", padding: "10px"}}
                        >
                            
                        
                           {event.created_at + " - " + event.full_name} 
                        </a>
                        </>
                    )
            })}
            
            
                
            
            </Box>
        </Box>
        </>
    )
}