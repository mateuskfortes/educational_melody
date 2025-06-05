import { Request, Response } from 'express';

export const postLogout = (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Could not log out');
    }
    res.clearCookie('connect.sid'); // Clear the session cookie
    return res.status(200).send('Logged out successfully');
  });
}