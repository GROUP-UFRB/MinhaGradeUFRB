class CreateCenterUseCase {
  constructor(centerRepository) {
    this.centerRepository = centerRepository;
  }

  async execute(data) {
    const { cod_center, name } = data;
    if (!name || !cod_center) {
      throw new Error("There is an empty field, please check and try again.");
    }
    const checkCode = await this.centerRepository.findByCode(cod_center);
    if (checkCode) {
      throw new Error("Center already exists.");
    }
    const center = await this.centerRepository.create({
      name,
      cod_center
    });
    return center;
  }
}

module.exports = CreateCenterUseCase;
