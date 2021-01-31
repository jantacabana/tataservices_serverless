const { success, response } = require('../components/response.component');
const Service = require('../services/vehicle.service');
module.exports = {
  async getVehicles(event, context, callback) {
    const result = await Service.getVehicles();
    return success(result, callback);
  },
  async getVehicle(event, context, callback) {
    const result = await Service.getVehicle(event.pathParameters.id);
    if (result == null) {
      return response('vehículo no encontrado', 404, callback);
    }
    return success(result, callback);
  },
  async getVehicleSchema(event, context, callback) {
    const result = await Service.getVehicleSchema();
    return success(result, callback);
  },
}