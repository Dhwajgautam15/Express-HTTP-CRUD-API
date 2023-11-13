const yup = require("yup");

const todoSchema = yup.object({
    id:yup.number().required(),
    text:yup.string().required(),
    iscompleted : yup.boolean().required(),
});
module.exports = todoSchema;