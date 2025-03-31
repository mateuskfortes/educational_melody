import express, { Express, Request, Response } from "express"; 
import { DEFAULT_PORT } from './config';

class App {
    app: Express
    warningBypass: boolean
    port: number

    constructor({warningBypass, port} = {warningBypass: false, port: DEFAULT_PORT}) {
        this.warningBypass = warningBypass
        this.port = port
        this.app = express();
        this.config()
        this.routes()
    }

    config() {
        this.app.set('view engine', 'ejs'); // Set EJS as the view engine to render dynamic templates
        this.app.set('views', './views'); // Define the directory where the EJS template files are stored

        this.app.use(express.static('./public')) // Static files 
    }

    routes() {
        // main route
        this.app.get('/', (req: Request, res: Response) => {
            res.render('index.ejs', {title: "test", message: "message"})
        });
    }

    listen(port = this.port) {
        this.app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    }
}

export default App