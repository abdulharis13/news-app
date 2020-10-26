const getAdditionalData = async (id, model) => {
    const result = await model.findById(id).select('-password -__v -createdBy -createdAt')
    return result
};

module.exports = getAdditionalData;