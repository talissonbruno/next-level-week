import express from 'express';

const routes = express.Router();

import PointController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const pointController = new PointController();
const itemsCrontroller = new ItemsController();

routes.get('/items', itemsCrontroller.index);

routes.post('/points', pointController.create);
routes.get('/points', pointController.index);
routes.get('/points/:id', pointController.show);



export default routes;