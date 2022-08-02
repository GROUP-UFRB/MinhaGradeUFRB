class FindAllCenterUseCase {
    constructor(centerRepository) {
      this.centerRepository = centerRepository;
    }
  
    async execute() {
      const centers = await this.centerRepository.findAll();
      if (centers == []) {
          throw new Error('Centers not found');
      }
      return centers;
    }
  }
  
  module.exports = FindAllCenterUseCase;
  