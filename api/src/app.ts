import express, { Express } from "express"; 
import { DEFAULT_PORT } from './config';
import session from 'express-session';
import { getRegister, postRegister } from "./routes/register";
import { getLogin, postLogin } from "./routes/login";
import { postLogout } from "./routes/logout";
import { getHome } from "./routes/home";

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
		this.app.get('/', getHome);

		this.app.get('/register', getRegister);
		this.app.post('/register', postRegister);

		this.app.get('/login', getLogin);
		this.app.post('/login', postLogin)

		this.app.post('/logout', postLogout);
	}

	listen(port = this.port) {
		this.app.listen(port, () => {
			console.log(`Server running at http://localhost:${port}`);
		});
	}
}

export default App