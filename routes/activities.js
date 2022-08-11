import express from 'express'
import {
    getLowBudget,
    getMediumBudget,
    getHighBudget,
    patchSaved,
    getAllBudgets,
    getLowEnergy,
    getMediumEnergy,
    getHighEnergy,
    getAllEnergy,
    getDogFriendly,
    getNotDogFriendly,
    postDayplan,
    getDayplan,
    deleteDayplan,
    getSaved
} from '../models/activities.js'

const router = express.Router()

router.get('/low-budget', async (req, res) => {
    const lowBudget = await getLowBudget()
    res.json({
        success: true,
        data: lowBudget,
    })
});

router.get('/medium-budget', async (req, res) => {
    const mediumBudget = await getMediumBudget()
    res.json({
        success: true,
        data: mediumBudget,
    })
});

router.get('/high-budget', async (req, res) => {
    const highBudget = await getHighBudget()
    res.json({
        success: true,
        data: highBudget,
    })
});

router.get('/all-budgets', async (req, res) => {
    const allBudgets = await getAllBudgets()
    res.json({
        success: true,
        data: allBudgets,
    })
});

router.get('/low-energy', async (req, res) => {
    const lowEnergy = await getLowEnergy()
    res.json({
        success: true,
        data: lowEnergy,
    })
});

router.get('/medium-energy', async (req, res) => {
    const mediumEnergy = await getMediumEnergy()
    res.json({
        success: true,
        data: mediumEnergy,
    })
});

router.get('/high-energy', async (req, res) => {
    const highEnergy = await getHighEnergy()
    res.json({
        success: true,
        data: highEnergy,
    })
});

router.get('/all-energy', async (req, res) => {
    const allEnergy = await getAllEnergy()
    res.json({
        success: true,
        data: allEnergy,
    })
});

router.get('/dog-friendly', async (req, res) => {
    const dogFriendly = await getDogFriendly()
    res.json({
        success: true,
        data: dogFriendly,
    })
});

router.get('/not-dog-friendly', async (req, res) => {
    const notDogFriendly = await getNotDogFriendly()
    res.json({
        success: true,
        data: notDogFriendly,
    })
});

router.patch('/low-budget', async function (req, res) {
    const activity = req.body
    const data = await patchSaved(activity)
    res.json({
        success: true,
        payload: data,
    })
});

router.patch('/medium-budget', async function (req, res) {
    const activity = req.body
    const data = await patchSaved(activity)
    res.json({
        success: true,
        payload: data,
    })
});

router.patch('/high-budget', async function (req, res) {
    const activity = req.body
    const data = await patchSaved(activity)
    res.json({
        success: true,
        payload: data,
    })
});

// DAYPLAN TABLE POST & GET & DELETE
router.post('/dayplans', async (req, res, next) => {
    const data = req.body
    console.log(data)
    const results = await postDayplan(
        data.id,
        data.name,
        data.activities
    
    )
    res.json({ success: true, payload: results })
});

router.get('/dayplans', async (req, res) => {
    const data = await getDayplan()
    res.json({
        success: true,
        data: data,
    })
});

router.delete('/dayplans', async (req, res) => {
    const data = await deleteDayplan()
    res.json({
        success: true,
        data: data,
    })
});

// GET ALL SAVED ACTIVITIES
router.get('/saved', async (req, res) => {
    const data = await getSaved()
    res.json({
        success: true,
        data: data,
    })
});

export default router

