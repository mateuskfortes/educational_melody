import { Request, Response } from 'express';
import { render } from '../utils';

export const getHome = (req: Request, res: Response) => {
  render(req, res, 'index.ejs', { is_logged_in: true })
}