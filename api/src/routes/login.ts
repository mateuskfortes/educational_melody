import { Request, Response } from 'express';
import { getUserByEmail } from '../database/auth';
import { render } from '../utils';

export const getLogin = (req: Request, res: Response) => {
  render(req, res, 'login.ejs', {})
}

export const postLogin = async (req: Request, res: Response): Promise<any> => {
  const { email, password, remember } = req.body;
  const { user, error_msg } = await getUserByEmail(email);
  if (remember === 'on') {
    req.session.cookie.maxAge = 1000 * 60 * 60 * 24 * 365;
  }
  else {
    delete req.session.cookie.maxAge;
  }
  if (!user && !error_msg) {
    return render(req, res.status(404), 'login.ejs', { error_msg: 'User not found' })
  }
  if (error_msg) {
    return render(req, res.status(400), 'login.ejs', { error_msg })
  }
  if (user?.password !== password) {
    return render(req, res.status(400), 'login.ejs', { error_msg: 'Invalid password' })
  }
  req.session.user = user; // Store the user in the session
  return res.status(201).send(`User login with email: ${user?.email}`);
}