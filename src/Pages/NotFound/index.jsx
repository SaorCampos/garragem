import { Button } from '@mui/material'
import foto from './imagem.svg'
import { Link } from 'react-router-dom'
export default function NotFound(){
    return(
        <div>
            <img src={foto}/>
            <Link to='/'>
                <Button variant='outlined' >Voltar pro inicio</Button>
            </Link>
        </div>
    )
}