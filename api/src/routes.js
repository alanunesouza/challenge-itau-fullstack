import { Router } from 'express';

import DiscoveryController from './app/controllers/DiscoveryController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/discovery', DiscoveryController.store);
routes.get('/discovery', DiscoveryController.index);
routes.delete('/discovery/:id', DiscoveryController.delete);

export default routes;
