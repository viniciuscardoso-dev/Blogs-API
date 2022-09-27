const newPost = async (req, _res, next) => {
    const { title, content, categoryIds } = req.body;
    if (!title || !content || !categoryIds) {
        const e = new Error('Some required fields are missing');
        e.status = 400;
        throw e;
    }
    return next();
};

module.exports = {
    newPost,
};