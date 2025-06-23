import { Request, Response } from 'express';
import { render } from '../utils';

export const postLogout = (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err)
      return res.status(500).send('');
    }
    res.clearCookie('connect.sid'); // Clear the session cookie
    return render(req, res.status(200), 'index.ejs', {})
  });
}