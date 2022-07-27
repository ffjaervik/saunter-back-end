import express from 'express';
import {
    getLowBudget,
    getMediumBudget,
    getHighBudget
} from '../models/activities.js';

const router = express.Router();

router.get("/low-budget", async (req, res) => {
    const lowBudget = await getLowBudget();
    res.json({
        status: "success",
        data: lowBudget
        });
});

router.get("/medium-budget", async (req, res) => {
    const mediumBudget = await getMediumBudget();
    res.json({
        status: "success",
        data: mediumBudget
        });
});

router.get("/high-budget", async (req, res) => {
    const highBudget = await getHighBudget();
    res.json({
        status: "success",
        data: highBudget
        });
});


export default router;