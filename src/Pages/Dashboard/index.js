import{Card, CardContent, } from "@mui/material"
import React from "react"
import {DirectionsBike, DirectionsCar, TwoWheeler} from '@mui/icons-material'

function Informacao (props){
    return(
        <Card style={{marginTop: '10px'}}>
            <CardContent>
                {props.icone}
                <strong style={{marginRight: '10px'}}>
                    {props.qtd}
                </strong>
                {props.titulo}
                Informação
            </CardContent>
        </Card>
    )
}
export default function DashBoard (){
    
    return(
        <React.Fragment>
            <Informacao icone={<TwoWheeler/>} qtd="5" titulo='motos'/>
            <Informacao icone={<DirectionsCar/>} qtd="10" titulo='carros'/>
            <Informacao icone={<DirectionsBike/>} qtd="2" titulo='bicicletas'/>
        </React.Fragment>
    )
}