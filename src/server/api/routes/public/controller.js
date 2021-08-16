const load = async (req, res, next) => {
    res.send({ response: "I am alive" }).status(200);
};

export default {
    load,

};