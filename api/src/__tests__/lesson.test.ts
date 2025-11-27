import request from "supertest";
import App from "../app.js";
import { Request } from "express";
import { title } from "process";

const appWithAdm = new App({
  postgresStore: false,
  middleware: [mockSessionAdmin],
}).app;

const app = new App({ postgresStore: false }).app;

const createLesson = jest.fn();
const findUniqueLesson = jest.fn();
const findManyLesson = jest.fn();

jest.mock("@prisma/client", () => {
  const actualPrisma = jest.requireActual("@prisma/client");
  return {
    __esModule: true,
    PrismaClient: jest.fn(() => ({
      material: {
        create: (data: any) => createLesson(data),
        findUnique: (data: any) => findUniqueLesson(data),
        findMany: (data: any) => findManyLesson(data),
      },
    })),
    Prisma: actualPrisma.Prisma,
  };
});

export function mockSessionAdmin(req: any, res: any, next: any) {
  req.session.user = {
    id: 1,
    username: "admin",
    is_administrator: true,
  };

  next();
}

appWithAdm.use(mockSessionAdmin);

describe("Lesson", () => {
  it("Should retrieve the list of lessons", async () => {
    const date = new Date();
    findManyLesson.mockResolvedValueOnce([
      {
        id: 123456,
        content: "content 1",
        created_at: date,
      },
      {
        id: 654321,
        content: "content 2",
        created_at: date,
      },
    ]);
    const res = await request(app).get("/lesson");
    expect(res.text).toContain("123456");
    expect(res.text).toContain("content 1");
    expect(res.text).toContain(date.toLocaleString());

    expect(res.text).toContain("654321");
    expect(res.text).toContain("content 2");
  });
  it("Should get a lesson by its id", async () => {
    findUniqueLesson.mockResolvedValueOnce({
      id: 1,
      content: "My Text",
    });
    const res = await request(app).get("/lesson/view/1");
    expect(res.status).toBe(200);
    expect(res.text).toContain("My Text");
  });
  it("Should return 404 if the lesson with the provided ID doesn't exist", async () => {
    findUniqueLesson.mockRejectedValue(new Error());
    const res = await request(app).get("/lesson/3");
    expect(res.status).toBe(404);
  });
  it("Should not access lesson creation page if the user is not an administrator", async () => {
    const res = await request(app).post("/lesson/create").send({
      content: "My Text",
    });
    expect(res.status).toBe(403);
  });
  it("Should block lesson creation if the user is not an administrator", async () => {
    const res = await request(app).post("/lesson/create").send({
      content: "My Text",
    });
    expect(res.status).toBe(403);
  });
  it("Should create a lesson", async () => {
    createLesson.mockResolvedValueOnce({
      id: 123,
      title: "My Lesson",
      conntent: "My Text",
      created_at: new Date(),
    });
    const res = await request(appWithAdm).post("/lesson/create").send({
      title: "My Lesson",
      content: "My Text",
    });
    expect(res.status).toBe(302);
    expect(res.text).toContain("123");
  });
  it("Should not create a lesson without content", async () => {
    const res = await request(appWithAdm)
      .post("/lesson/create")
      .send({ title: "My Lesson" });
    expect(res.status).toBe(422);
    expect(res.text).toContain("Conteúdo obrigatório");
  });
  it("Should not create a lesson without title", async () => {
    const res = await request(appWithAdm)
      .post("/lesson/create")
      .send({ content: "My Text" });
    expect(res.status).toBe(422);
    expect(res.text).toContain("Título obrigatório");
  });
});
