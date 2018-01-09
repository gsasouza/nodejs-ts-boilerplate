import { Router } from "express";

import { getAllRealties, getOneRealty } from "./realties-get";
import { createRealty } from "./realties-post";

const RealtiesRoutes = Router();

RealtiesRoutes.get("/", getAllRealties);
RealtiesRoutes.get("/:id", getOneRealty);

RealtiesRoutes.post("/", createRealty);

export default RealtiesRoutes;
