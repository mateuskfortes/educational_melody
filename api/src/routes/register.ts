import { Request, Response } from 'express';
import { createUser } from '../database/auth';

export const getRegister = (req: Request, res: Response) => {
  const currentUserIsAdministrator = req.session.user?.is_administrator || false
  res.render('register.ejs', { administrator_checkbox: currentUserIsAdministrator })
}

export const postRegister = async (req: Request, res: Response): Promise<any> => {
  const username = req.body.username
  const email = req.body.email;
  const password = req.body.password;

  if (!username || !email || !password) {
    return res.status(400).send('Email and password are required');
  }
  
  // Get the is_administrator flag from the request body, defaulting to false
  const is_administrator = req.body.is_administrator === 'on' || false
  
  // If the user is not an administrator, they cannot create an administrator user
  if (!req.session.user?.is_administrator && is_administrator) {
    return res.status(403).send('You are not authorized to create an administrator user');
  } 

  const { user, error_msg } = await createUser(username, email, password,  is_administrator)
  if (error_msg) {
    return res.status(400).send(error_msg);
  }

  if(user) {
    req.session.user = user; // Store the user in the session

    if (user.is_administrator) {
      return res.status(201).send(`Administrator user created with email: ${user.email}`);
    }
    return res.status(201).send(`User created with email: ${user.email}`)
  }

  return res.status(500).send('Unexpected error creating user');
}