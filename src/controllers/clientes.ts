import { Request, Response } from "express"
import { ClienteModel } from "../models/clientes";
export const getCliente = async (req: Request, res: Response) => {
    const { cedula } = req.body;
    console.log("IMPRIMIR REQ BODY "+req.body)
    console.log("CEDULA REQ "+cedula)
        
    const cliente: any = await ClienteModel.findOne({ where: { cedula: cedula }});

    res.json({
        cliente
    })

    if (!cedula) {
        return res.status(400).json({
            msg: `No existe un Cliente con esta cédula ${cedula}`
        })
    }
}

export const getTodos = async (req: Request, res: Response) => {
    const listClientes = await ClienteModel.findAll();
    res.json({
        listClientes
    })
}



