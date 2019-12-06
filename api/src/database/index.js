import Sequelize from 'sequelize';

import Discovery from '../app/models/Discovery';

import databaseConfig from '../config/database';

const models = [Discovery];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
