import * as Yup from 'yup';

import Discovery from '../models/Discovery';

class DiscoveryController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required(),
      reference_point: Yup.string(),
      additional_comments: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id, name, description } = await Discovery.create(req.body);

    return res.json({
      id,
      name,
      description,
    });
  }

  async index(req, res) {
    const discoveries = await Discovery.findAll();

    return res.json(discoveries);
  }

  async delete(req, res) {
    const discovery = await Discovery.findByPk(req.params.id);

    await discovery.destroy();

    return res.json(discovery);
  }
}

export default new DiscoveryController();
