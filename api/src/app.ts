import express, { Express } from "express";
import { DEFAULT_PORT } from './config';
import * as sessionC from 'express-session';
import session from 'express-session'
import { getRegister, postRegister } from "./routes/register";
import { getLogin, postLogin } from "./routes/login";
import { postLogout } from "./routes/logout";
import { getHome } from "./routes/home";
import connectMySQL from 'express-mysql-session'


class App {
	app: Express
	warningBypass: boolean
	port: number

	constructor({
		mysqlStore = true,
		warningBypass = false,
		port = DEFAULT_PORT
	}: {
		mysqlStore?: boolean;
		warningBypass?: boolean;
		port?: number;
	}) {
		this.warningBypass = warningBypass
		this.port = port
		this.app = express();
		this.config(mysqlStore)
		this.routes()
	}

	config(mysqlStore: boolean = false) {
		this.app.set('view engine', 'ejs'); // Set EJS as the view engine to render dynamic templates
		this.app.set('views', './views'); // Define the directory where the EJS template files are stored

		this.app.use(express.static('./public')) // Static files 

		this.app.use(express.json()); // Middleware to parse JSON bodies
		this.app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

		// Session
		let sessionStore = undefined

		// Disable mysql session store for testing
		if (mysqlStore) {
			const MySQLStore = connectMySQL(sessionC)
			const dbOptions = {
				host: 'db',
				port: 3306,
				user: 'root',
				password: '123456',
				database: 'educational_melody'
			};
			sessionStore = new MySQLStore(dbOptions);
		}
		this.app.use(session({
			secret: '1234',
			store: sessionStore,
			resave: false,
			saveUninitialized: false,
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

		this.app.get('/test', (req, res) => {
			res.send(req.session);
		});
	}

	listen(port = this.port) {
		this.app.listen(port, '0.0.0.0', () => {
			console.log(`Server running at http://localhost:${port}`);
		});
	}
}

export default App