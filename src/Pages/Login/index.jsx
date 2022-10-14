import { Button, Divider, TextField } from "@mui/material";
import './style.css'
export default function Login(){
    return(
        <div className="login">
            <h2>Login</h2>
            <Divider/>

            <form>
                <TextField label="Email" fullWidth />
                <TextField label="Senha" fullWidth />
                <Button variant="contained" fullWidth>Entrar</Button>
            </form>
        </div>
    )
}