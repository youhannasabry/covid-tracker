const load = async (req, res, next) => {
    res.send({ response: "I am alive" }).status(200);
};

const log = async (req, res, next) => {
    console.log(req.body)
};

export default {
    load,
    log
};