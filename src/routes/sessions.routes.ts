import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticadeUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (req, res) => {
  const { email, password } = req.body;

  const authenticadeUser = new AuthenticateUserService();

  const { user, token } = await authenticadeUser.execute({
    email,
    password,
  });

  delete user.password;

  return res.json({ user, token });
});

export default sessionsRouter;
