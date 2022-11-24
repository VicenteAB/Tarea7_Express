import express from "express";

import {
    getSuma,
} from "../controllers/calculator.controller.js";

const router = express.Router();

router.get("/holasuma", getSuma);

export default router;