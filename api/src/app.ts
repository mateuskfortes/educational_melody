import express, { Express, Request, Response } from "express"; 
import { DEFAULT_PORT } from './config';
import session from 'express-session';
import { createUser, getUserByEmail } from "./database/auth";

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
            console.log(req.session.user); // Log the user from the session
            res.render('index.ejs', {title: "test", message: "message"})
        });

        this.app.get('/register', (_: Request, res: Response) => {
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

        this.app.get('/login', (_: Request, res: Response) => {
            res.render('login.ejs')
        });
        this.app.post('/login', async (req: Request, res: Response): Promise<any> => {
            const { email, password } = req.body;
            const { user, error_msg } = await getUserByEmail(email);
            if (error_msg) {
                return res.status(400).send(error_msg);
            }
            if (user.password !== password) {
                return res.status(400).send('Invalid password');
            }
            req.session.user = user.email; // Store the user in the session
            return res.status(201).send(`User login with email: ${user.email}`);
        })

        this.app.post('/logout', (req: Request, res: Response) => {
            req.session.destroy((err) => {
                if (err) {
                    return res.status(500).send('Could not log out');
                }
                res.clearCookie('connect.sid'); // Clear the session cookie
                return res.status(200).send('Logged out successfully');
            });
        });
    }

    listen(port = this.port) {
        this.app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    }
}

export default App