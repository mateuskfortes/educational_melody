import express, { Express } from "express";
import { DEFAULT_PORT } from './config';
import * as sessionC from 'express-session';
import session from 'express-session'
import { getRegister, postRegister } from "./routes/register";
import { getLogin, postLogin } from "./routes/login";
import { postLogout } from "./routes/logout";
import { getHome } from "./routes/home";
import connectMySQL from 'express-mysql-session'
import { getLesson } from "./routes/lesson/lesson_view_id";
import { getLessons } from "./routes/lesson";
import { getCreateLesson, postCreateLesson } from "./routes/lesson/lesson_create";
import { getSheetMusic } from "./routes/sheet-music";


class App {
	app: Express
	warningBypass: boolean
	port: number

	constructor({
		mysqlStore = true,
		warningBypass = false,
		port = DEFAULT_PORT,
		middleware = []
	}: {
		mysqlStore?: boolean;
		warningBypass?: boolean;
		port?: number;
		middleware?: any[]
	}) {
		this.warningBypass = warningBypass
		this.port = port
		this.app = express();
		this.config(mysqlStore, middleware)
		this.routes()
	}

	config(mysqlStore: boolean = false, middleware: any[]) {
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
				host: process.env.USE_DOCKER === 'true' ? 'db' : 'localhost',
				port: 3306,
				user: process.env.USE_DOCKER === 'true' ? 'root' : 'prisma_user',
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

		middleware.forEach(fn => this.app.use(fn))
	}

	routes() {
		// main route
		this.app.get('/', getHome);

		this.app.get('/register', getRegister);
		this.app.post('/register', postRegister);

		this.app.get('/login', getLogin);
		this.app.post('/login', postLogin)

		this.app.post('/logout', postLogout);

		this.app.get('/sheet-music', getSheetMusic);

		this.app.get('/lesson/view/:id', getLesson)
		this.app.get('/lesson', getLessons)
		this.app.get('/lesson/create', getCreateLesson)
		this.app.post('/lesson/create', postCreateLesson)


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