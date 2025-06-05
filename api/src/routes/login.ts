import { Request, Response } from 'express';
import { getUserByEmail } from '../database/auth';

export const getLogin = (_: Request, res: Response) => {
  res.render('login.ejs')
}

export const postLogin = async (req: Request, res: Response): Promise<any> => {
  const { email, password } = req.body;
  const { user, error_msg } = await getUserByEmail(email);
  if (!user && !error_msg) {
    return res.status(404).send('User not found');
  }
  if (error_msg) {
    return res.status(400).send(error_msg);
  }
  if (user?.password !== password) {
    return res.status(400).send('Invalid password');
  }
  req.session.user = user; // Store the user in the session
  return res.status(201).send(`User login with email: ${user?.email}`);
}