import express, { Express } from "express";
import { DEFAULT_PORT } from "./config.js";
import * as sessionC from "express-session";
import session from "express-session";
import { getRegister, postRegister } from "./routes/register.js";
import { getLogin, postLogin } from "./routes/login.js";
import { postLogout } from "./routes/logout.js";
import { getHome } from "./routes/home.js";
import connectMySQL from "express-mysql-session";
import * as exercise from "./routes/exercise.js";
import * as adminExercise from "./routes/adminExercise.js";
import { fileURLToPath } from "url";
import path from "path";
import { render } from "./utils.js";
import { Request, Response } from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { getLesson } from "./routes/lesson/lesson_view_id.js";
import { getLessons } from "./routes/lesson/index.js";
import {
  getCreateLesson,
  postCreateLesson,
} from "./routes/lesson/lesson_create.js";
import { getSheetMusic } from "./routes/sheet-music.js";

class App {
  app: Express;
  warningBypass: boolean;
  port: number;

  constructor({
    mysqlStore = true,
    warningBypass = false,
    port = DEFAULT_PORT,
    middleware = [],
  }: {
    mysqlStore?: boolean;
    warningBypass?: boolean;
    port?: number;
    middleware?: any[];
  }) {
    this.warningBypass = warningBypass;
    this.port = port;
    this.app = express();
    this.config(mysqlStore, middleware);
    this.routes();
  }

  config(mysqlStore: boolean = false, middleware: any[]) {
    this.app.set("view engine", "ejs"); // Set EJS as the view engine to render dynamic templates
    this.app.set("views", "./views"); // Define the directory where the EJS template files are stored

    this.app.use(express.static(path.join(__dirname, "../public"))); // Serve api/public como /

    const imagesPath = path.join(__dirname, "../images");
    this.app.use("/images", express.static(imagesPath));

    const uploadsPath = path.join(__dirname, "../uploads");
    this.app.use("/uploads", express.static(uploadsPath));

    this.app.use(express.json()); // Middleware to parse JSON bodies
    this.app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

    // Session
    let sessionStore = undefined;

    // Disable mysql session store for testing
    if (mysqlStore) {
      const MySQLStore = connectMySQL(sessionC);
      const dbOptions = {
        host: process.env.USE_DOCKER === "true" ? "db" : "localhost",
        port: 3306,
        user: process.env.USE_DOCKER === "true" ? "root" : "prisma_user",
        password: "123456",
        database: "educational_melody",
        waitForConnections: true,
        connectionLimit: 10,
        maxIdle: 10,
        idleTimeout: 60000,
        queueLimit: 0,
      };
      sessionStore = new MySQLStore(dbOptions);
    }
    this.app.use(
      session({
        secret: "1234",
        store: sessionStore,
        resave: false,
        saveUninitialized: false,
      })
    );

    middleware.forEach((fn) => this.app.use(fn));
  }

  routes() {
    // main route
    this.app.get("/", getHome);

    this.app.get("/register", getRegister);
    this.app.post("/register", postRegister);

    this.app.get("/login", getLogin);
    this.app.post("/login", postLogin);

    this.app.post("/logout", postLogout);

    this.app.get("/sheet-music", getSheetMusic);

    this.app.get("/lesson/view/:id", getLesson);
    this.app.get("/lesson", getLessons);
    this.app.get("/lesson/create", getCreateLesson);
    this.app.post("/lesson/create", postCreateLesson);

    this.app.get("/test", (req, res) => {
      res.send(req.session);
    });

    this.app.get("/exercises", exercise.listExercises);
    this.app.get("/exercises/:id", exercise.getExercise);
    this.app.post("/exercises/:id", exercise.postExercise);

    this.app.get("/admin/exercises", adminExercise.adminListExercises);
    this.app.get(
      "/admin/exercises/create",
      adminExercise.getAdminCreateExercise
    );
    this.app.post(
      "/admin/exercises/create",
      ...adminExercise.postAdminCreateExercise
    );
    const asyncHandler =
      (fn: any) => (req: Request, res: Response, next: any) => {
        Promise.resolve(fn(req, res, next)).catch(next);
      };

    this.app.get(
      "/admin/exercises/:id/edit",
      ...adminExercise.adminEditExercise.map(asyncHandler)
    );
    this.app.post(
      "/admin/exercises/:id/edit",
      ...adminExercise.adminEditExercise.map(asyncHandler)
    );
    this.app.post(
      "/admin/exercises/:id/delete",
      asyncHandler(adminExercise.adminDeleteExercise)
    );
  }

  listen(port = this.port) {
    this.app.listen(port, "0.0.0.0", () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  }
}

export default App;

export const getAdminCreateExercise = (req: Request, res: Response) => {
  render(req, res, "admin/exercises/create.ejs", { exercise: undefined });
};
