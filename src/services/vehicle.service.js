const VehicleRepository = require('../repositories/vehicle.repository');
const vehicleMapper = require('../mappers/vehicle.mapper');
const vehicleSchemaMapper = require('../mappers/vehicleSchema.mapper');
const { mapperList, mapperObject} = require('../components/mapper.component');

module.exports = {
  async getVehicles() {
    const vehicles =  await VehicleRepository.getVehicles();
    const {data} = vehicles;
    const { results } = data;
    const mapper = mapperList(results, vehicleMapper);
    return mapper;
  },
  async getVehicle(id) {
    const response =  await VehicleRepository.getVehicle(id);
    if (response.status == 404) {
      return null;
    }
    const {data} = response;
    const mapper = await mapperObject(data, vehicleMapper);
    return mapper;
  },
  async getVehicleSchema() {
    const vehicleSchema =  await VehicleRepository.getVehicleSchema();
    const {data} = vehicleSchema;
    const schemaMapper = await mapperObject(data, vehicleSchemaMapper);
    schemaMapper.propiedades = await mapperObject(schemaMapper.propiedades, vehicleMapper);
    return schemaMapper;
  },
}
