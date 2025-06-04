import express, { Express, Request, Response } from "express"; 
import { DEFAULT_PORT } from './config';
import session from 'express-session';
import { createUser } from "./database/auth";

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

        this.app.use(express.json()); // Middleware to parse JSON bodies
        this.app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

        this.app.use(session({
            secret: '1234'
        }))
    }

    routes() {
        // main route
        this.app.get('/', (req: Request, res: Response) => {
            res.render('index.ejs', {title: "test", message: "message"})
        });

        this.app.get('/register', (req: Request, res: Response) => {
            res.render('register.ejs')
        });
        this.app.post('/register', async (req: Request, res: Response): Promise<any> => {
            const { email, password } = req.body;
            const { user, error } = await createUser(email, password);
            if (error) {
                return res.status(400).send(error);
            }
            req.session.user = user.email; // Store the user in the session
            return res.status(201).send(`User created with email: ${user.email}`);
        });
    }

    listen(port = this.port) {
        this.app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    }
}

export default App