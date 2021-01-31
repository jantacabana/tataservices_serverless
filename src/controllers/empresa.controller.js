const Validation = require('../components/validation.component');
const Service = require('../services/empresa.service');
const { empresaSchema } = require('../schemas/empresa.schema');
const { errorValidation, success, response } = require('../components/response.component');
const { getPayload } = require('../components/request.component');

module.exports = {
  async addEmpresa(event, context, callback) {
    const { payload } = await getPayload(event);
    const { error } = await Validation.validate(payload, empresaSchema);
    if (error) {
      errorValidation(error, callback);
    }
    const result = await Service.addEmpresa(payload);
    return success(result, callback);
  },

  async getEmpresa(event, context, callback) {
    const result = await Service.getEmpresa(event.pathParameters.id);
    if (result == null) {
      return response('Empresa no encontrada', 404, callback);
    }
    return success(result, callback);
  },

  async getEmpresas(event, context, callback) {
    const result = await Service.getEmpresas();
    return success(result, callback);
  },
}
