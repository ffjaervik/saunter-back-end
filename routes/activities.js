import express from 'express';
import {
    getLowBudget,
    getMediumBudget,
    getHighBudget
} from '../models/activities.js';

const router = express.Router();
router.get("/", async (req, res) => {
    const lowBudget = await getLowBudget();
    const mediumBudget = await getMediumBudget();
    const highBudget = await getHighBudget();
    res.json({
        lowBudget,
        mediumBudget,
        highBudget
        });
}
);