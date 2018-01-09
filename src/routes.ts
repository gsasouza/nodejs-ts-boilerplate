import { Application } from "express";

import RealtiesRoutes from "./modules/realties/routes";

const urlBase = "/api/v1";

const allRoutes = (server: Application) => {
  server.use(`${urlBase}/realties`, RealtiesRoutes);
  // Default route errorhandler
  server.use(function(req, res, next) {
    res.status(404).json({
      status: 404,
      msg: `Error on route. This route exist?`,
      route: req.originalUrl
    });
    next();
  });
};

export default allRoutes;
