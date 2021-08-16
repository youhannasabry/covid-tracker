const { Log } = require('../../../models');

const load = async (req, res, next) => {
    res.send({ response: "I am alive" }).status(200);
};

const log = async (req, res, next) => {
    try {
        let logData = req.body;
        const logs = await Log.create(logData);
        res.send({ response: "Temperature Recorded successfully" }).status(200);
    } catch (err) {
        res.send({ response: "Email is duplicated" }).status(500);
    }
};

export default {
    load,
    log
};