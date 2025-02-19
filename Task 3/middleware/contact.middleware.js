const create = (req , res , next ) => {
    const { name,phone ,email}  = req.body;
    if (!name || !phone || !email) {
        res.status(404).json({
            error: true,
            message: 'Name, phone and email are required'
        });
        return;
    }
    next();
}

module.exports = { create }