import express, { Express } from "express";
import { DEFAULT_PORT } from './config';
import * as sessionC from 'express-session';
import session from 'express-session'
import { getRegister, postRegister } from "./routes/register";
import { getLogin, postLogin } from "./routes/login";
import { postLogout } from "./routes/logout";
import { getHome } from "./routes/home";
<<<<<<< Updated upstream
import connectMySQL from 'express-mysql-session';
import { getQuestionsPage, getQuestionPage, postCreateQuestion, postUpdateQuestion, postDeleteQuestion } from "./routes/exercise";

=======
import connectMySQL from 'express-mysql-session'
import * as exercise from './routes/exercise';
import * as adminExercise from './routes/adminExercise';
import { fileURLToPath } from 'url';
import path from 'path';
>>>>>>> Stashed changes


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

		// Corrija aqui:
		const __filename = fileURLToPath(import.meta.url);
		const __dirname = path.dirname(__filename);
		this.app.use(express.static(path.join(__dirname, '../public'))); // Serve api/public como /

		const imagesPath = path.join(__dirname, '../images');
		this.app.use('/images', express.static(imagesPath));

		const uploadsPath = path.join(__dirname, '../uploads');
		this.app.use('/uploads', express.static(uploadsPath));

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

<<<<<<< Updated upstream
		this.app.get("/exercises", getQuestionsPage);
  		this.app.get("/exercises/:id", getQuestionPage);
  		this.app.post("/exercises/create", postCreateQuestion);
  		this.app.post("/exercises/update", postUpdateQuestion);
  		this.app.post("/exercises/delete", postDeleteQuestion);
=======
		this.app.get('/exercises', exercise.listExercises);
		this.app.get('/exercises/:id', exercise.getExercise);
		this.app.post('/exercises/:id', exercise.postExercise);

		this.app.get('/admin/exercises', adminExercise.adminListExercises);
		this.app.get('/admin/exercises/create', adminExercise.getAdminCreateExercise);
		this.app.post('/admin/exercises/create', ...adminExercise.postAdminCreateExercise);
		this.app.get('/admin/exercises/:id/edit', adminExercise.adminEditExercise);
		this.app.post('/admin/exercises/:id/edit', adminExercise.adminEditExercise);
		this.app.post('/admin/exercises/:id/delete', adminExercise.adminDeleteExercise);
>>>>>>> Stashed changes
	}

	listen(port = this.port) {
		this.app.listen(port, '0.0.0.0', () => {
			console.log(`Server running at http://localhost:${port}`);
		});
	}
}

export default App

export const getAdminCreateExercise = (req: Request, res: Response) => {
  render(req, res, 'admin/exercises/create.ejs', { exercise: undefined });
};