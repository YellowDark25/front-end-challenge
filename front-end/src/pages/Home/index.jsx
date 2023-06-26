import { useState} from "react"
import { TextField, Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import fundo from "../../img/fundo.jpg"

export function Home() {
    const [user, setUser] = useState("");


    const navigation = useNavigate();

    const searchUser = () => {
        navigation(`${user}`)
    }

    return (
        <>
            
            <Box
                bgcolor={"aqua"}
                height={"100vh"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{ backgroundImage: `url(${fundo})` 
                , backgroundSize: "cover"
                , backgroundPosition: "center"
            }}
                
            >
                
                <form onSubmit={searchUser}>

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
                        <h1>Buscador de Usuário do Github</h1>
                        <TextField
                            label="Insira o usuário"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                        />
                        <Button variant="contained" type="submit"
                        sx={{p:2}}
                        rounded>
                            Buscar</Button>

                    </Box>
                </form>
            </Box>

        </>
    )
}