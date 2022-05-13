import express from 'express';
import { getClient } from '../db';
import ShoutOut from '../models/ShoutOutInterface';

const routes = express.Router();

routes.get("/shoutouts", async (req, res) => {
    try {
        const client = await getClient();
        const results = await client.db().collection<ShoutOut>('shoutouts').find().toArray();
        res.json(results);
    } catch (err) {
        console.error("Error", err);
        res.status(500).json({message: 'Server error'});
    }
});
routes.post("/shoutouts", async (req, res) => {
    const shoutout = req.body as ShoutOut;
    try {
        const client = await getClient();
        await client.db().collection<ShoutOut>('shoutouts').insertOne(shoutout);
        res.status(201).json(shoutout);
    } catch (err) {
        res.status(500).json({message: "server error"});
    }
})

export default routes;