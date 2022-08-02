const CreateCenterUseCase = require("../useCases/center/create");
const FindAllCenterUseCase = require("../useCases/center/all");
const FindByCodeCenterUseCase = require("../useCases/center/code");

const centerRepository = require("../repositories/center");

const centerController = {
  async create(req, res) {
    const createCenterUseCaseCase = new CreateCenterUseCase(
      centerRepository
    );
    try {
      const center = await createCenterUseCaseCase.execute(req.body);
      return res.json(center);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async all(req, res) {
    const findAllCenterUseCaseCase = new FindAllCenterUseCase(
      centerRepository
    );
    try {
      const centers = await findAllCenterUseCaseCase.execute();
      return res.json(centers);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async code(req, res) {
    const findByCodeCenterUseCaseCase = new FindByCodeCenterUseCase(
      centerRepository
    );
    try {
      const { cod_center } = req.params;
      const center = await findByCodeCenterUseCaseCase.execute(cod_center);
      return res.json(center);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = centerController;
