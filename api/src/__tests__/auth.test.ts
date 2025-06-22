import request from "supertest";
import App from "../app";
import { Prisma } from "@prisma/client";

const testUser = {
  username: 'test',
  email: 'test@test.com',
  password: 'test',
  is_administrator: false,
};

const adminUser1 = {
  username: 'test',
  email: 'admin1@test.com',
  password: 'test',
  is_administrator: true,
  terms_of_service: 'on'
}
const adminUser2 = {
  username: 'test',
  email: 'admin2@test.com',
  password: 'test',
  is_administrator: true,
}
const requestAdminUser2 = {
  username: 'test',
  email: adminUser2.email,
  password: adminUser2.password,
  is_administrator: 'on',
  terms_of_service: 'on'
}

const app = new App({ mysqlStore: false }).app

const mockDB: any[] = [];

const createUserPrisma = jest.fn((args) => {
  const data = args.data;

  // Simulate a unique constraint violation if the email already exists
  if (mockDB.find((user) => user.email === data.email)) {
    const error = {
      code: 'P2002',
    }
    Object.setPrototypeOf(error, Prisma.PrismaClientKnownRequestError.prototype);
    return Promise.reject(error)
  }

  // Simulate successful user creation
  mockDB.push(data);
  return Promise.resolve({
    email: data.email,
    password: data.password,
    is_administrator: data.is_administrator
  });
});
const findUniqueUserPrisma = jest.fn((data) => {
  const user = mockDB.find((user) => user.email === data.where.email)
  if (user) {
    return Promise.resolve({ 
      email: user.email,
      password: user.password,
      is_administrator: user.is_administrator
    });
  }
})

jest.mock('@prisma/client', () => {
  const actualPrisma = jest.requireActual('@prisma/client')
  return {
    __esModule: true,
    PrismaClient: jest.fn(() => ({
    user: {
      create: (data: any) => createUserPrisma(data),
      findUnique: (data: any) => findUniqueUserPrisma(data),
    },
  })),
    Prisma: actualPrisma.Prisma,
  };
});

describe('Auth', () => {
  beforeEach(() => {
    mockDB.length = 0; // Clear the mock database before each test
    createUserPrisma.mockClear();
    findUniqueUserPrisma.mockClear();
  })
  it('should get create a user page', async () => {
    const res = await request(app).get('/register');
    expect(res.statusCode).toEqual(200);
  });
  it('should create a user', async () => {
    const res = await request(app).post('/register').send({
      username: testUser.username,
      email: testUser.email,
      password: testUser.password,
      terms_of_service: 'on'
    });
    expect(res.statusCode).toEqual(201);
    expect(createUserPrisma).toHaveBeenCalledWith({
      data: {
        username: testUser.username,
        email: testUser.email,
        password: testUser.password,
        is_administrator: testUser.is_administrator,
      }
    })
    expect(createUserPrisma).toHaveBeenCalledTimes(1);
    expect(res.text).toContain(`User created with email: ${testUser.email}`);
  });
  it('should not create a user if terms of service is not accepted', async () => {
    const res = await request(app).post('/register').send({
      username: testUser.username,
      email: testUser.email,
      password: testUser.password,
      terms_of_service: '',
    });
    expect(res.statusCode).toEqual(400);
    expect(res.text).toContain('You must agree to the terms of service');
    expect(createUserPrisma).toHaveBeenCalledTimes(0);
  })
  it('should not create a user if username, email or password is missing', async () => {
    const res = await request(app).post('/register').send({
      username: '',
      email: '',
      password: '',
      terms_of_service: 'on'
    });
    expect(res.statusCode).toEqual(400);
    expect(res.text).toContain('Username, email and password are required');
    expect(createUserPrisma).toHaveBeenCalledTimes(0);
  })
  it('should not create a user if email already exists', async () => {
    mockDB.push(testUser);
    const res = await request(app).post('/register').send({
      username: testUser.username,
      email: testUser.email,
      password: testUser.password,
      terms_of_service: 'on'
    });
    expect(res.statusCode).toEqual(400);
    expect(createUserPrisma).toHaveBeenCalledWith({
      data: {
        username: testUser.username,
        email: testUser.email,
        password: testUser.password,
        is_administrator: testUser.is_administrator,
      }
    })
    expect(createUserPrisma).toHaveBeenCalledTimes(1);
    expect(res.text).toContain('This email is already in use');
  });
  it('should get login a user page', async () => {
    const res = await request(app).get('/login');
    expect(res.statusCode).toEqual(200);
  });
  it('should login a user', async () => {
    mockDB.push(testUser);
    const res = await request(app).post('/login').send({
      email: testUser.email,
      password: testUser.password,
    });
    expect(res.statusCode).toEqual(201);
    expect(findUniqueUserPrisma).toHaveBeenCalledWith({
      where: {
        email: testUser.email,
      }
    })
    expect(findUniqueUserPrisma).toHaveBeenCalledTimes(1);
    expect(res.text).toContain(`User login with email: ${testUser.email}`);
  });
  it('should not login a user with invalid password', async () => {
    mockDB.push(testUser);
    const res = await request(app).post('/login').send({
      email: testUser.email,
      password: 'wrongpassword',
    });
    expect(res.statusCode).toEqual(400);
    expect(findUniqueUserPrisma).toHaveBeenCalledWith({
      where: {
        email: testUser.email,
      }
    })
    expect(findUniqueUserPrisma).toHaveBeenCalledTimes(1);
    expect(res.text).toContain('Invalid password');
  });
  it('should not login a user with non-existing email', async () => {
    const res = await request(app).post('/login').send({
      email: 'nonexisting@test.com',
      password: 'test',
    });
    expect(res.statusCode).toEqual(404);
    expect(findUniqueUserPrisma).toHaveBeenCalledWith({
      where: {
        email: 'nonexisting@test.com',
      }
    })
    expect(findUniqueUserPrisma).toHaveBeenCalledTimes(1);
    expect(res.text).toContain('User not found');
  })
  it('should be able to create a administrator user if the user is an administrator', async () => {
    mockDB.push({
      email: 'admin1@test.com',
      password: 'test',
      is_administrator: true,
    });
    
    // login the admin user and get the session cookie
    const resLogin = await request(app).post('/login').send(adminUser1);
    const session = resLogin.headers['set-cookie'][0].match(/connect\.sid=[^;]+/) || ['']

    expect(session[0]).not.toBe('');
    expect(resLogin.statusCode).toEqual(201);
    const res = await request(app).post('/register').send(requestAdminUser2).set('Cookie', session[0]);
    expect(res.statusCode).toEqual(201);
    expect(createUserPrisma).toHaveBeenCalledWith({
      data: adminUser2
    })
    expect(createUserPrisma).toHaveBeenCalledTimes(1);
  })
  it('should not be able to create a administrator user if the user is not an administrator', async () => {
    mockDB.push({
      email: 'admin1@test.com',
      password: 'test',
      is_administrator: false,
    });

    // login the admin user and get the session cookie
    const resLogin = await request(app).post('/login').send(adminUser1);
    const session = resLogin.headers['set-cookie'][0].match(/connect\.sid=[^;]+/) || ['']
    expect(session[0]).not.toBe('');
    expect(resLogin.statusCode).toEqual(201);
    const res = await request(app).post('/register').send(requestAdminUser2).set('Cookie', session[0]);
    expect(res.statusCode).toEqual(403);
    expect(createUserPrisma).toHaveBeenCalledTimes(0);
    expect(res.text).toContain('You are not authorized to create an administrator user');
  })
})