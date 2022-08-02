class FindByCodeCenterUseCase {
  constructor(centerRepository) {
    this.centerRepository = centerRepository;
  }

  async execute(cod_center) {
    const center = await this.centerRepository.findByCode(cod_center);
    if (!center) {
        throw new Error('Center not found');
    }
    return center;
  }
}

module.exports = FindByCodeCenterUseCase;
