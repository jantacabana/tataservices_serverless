const Repository = require('../repositories/empresa.repository');
const { mapperObject} = require('../components/mapper.component');

module.exports = {
  async addEmpresa(payload) {
    return await Repository.addEmpresa(payload);
  },
  async getEmpresa(id) {
    return await Repository.getEmpresa(id);
  },
  async getEmpresas() {
    return await Repository.getEmpresas();
  },
}
