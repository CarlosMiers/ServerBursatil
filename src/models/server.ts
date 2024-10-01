//importamos express para empezar a desarrollar las apis

import cors from "cors";
import express, { Application } from "express";
import routesUsuarios from '../routes/usuarios';
import routesClientes from '../routes/clientes';
import routesCarteraRentaFijaEmisor from '../routes/cartera_renta_fija_emisor';
import routesCarteraRentaFijaDetallado from '../routes/cartera_renta_fija_emisor_detalle';
import routesCarteraAcciones from '../routes/cartera_acciones';
import routesCarteraAccionesDetalle from '../routes/cartera_acciones_detalle';
import routesVencimientoCartera from "../routes/vencimiento_cartera";
import routesAsesor from "../routes/asesor_cliente";
import routesOferta from "../routes/ofertas";
import { UserModel } from './usuarios';

class Server {
    private app: Application;
    private port: string;
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Aplicacion corriendo en el puerto " + this.port);
        })
    }

    routes() {
        this.app.use('/api/asesor/id', routesAsesor);
        this.app.use('/api/users', routesUsuarios);
        this.app.use('/api/users/login', routesUsuarios);
        this.app.use('/api/cliente/id', routesClientes);
        this.app.use('/api/cliente', routesClientes);
        this.app.use('/api/cartera/rentafija/id', routesCarteraRentaFijaEmisor);
        this.app.use('/api/cartera/rentafijadetalle/id', routesCarteraRentaFijaDetallado);
        this.app.use('/api/cartera/rentaacciones/id', routesCarteraAcciones);
        this.app.use('/api/cartera/rentaaccionesdetalle/id', routesCarteraAccionesDetalle);
        this.app.use('/api/cartera/vencimientocartera/id', routesVencimientoCartera);
        this.app.use('/api/oferta/id', routesOferta);
    }

    midlewares() {
        // Configurar cabeceras y cors
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
        });

        //parseo body
        this.app.use(express.json());
        //Cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await UserModel.sync()
        } catch (error) {
            console.log("Error de conexion a Base de Datos", error);
        }
    }

}


export default Server;