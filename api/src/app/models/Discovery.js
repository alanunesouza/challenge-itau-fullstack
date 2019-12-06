import { Model, Sequelize } from 'sequelize';

class Discovery extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        reference_point: Sequelize.VIRTUAL,
        additional_comments: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Discovery;
