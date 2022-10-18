class FindAllCenterUseCase {
  constructor(private centerRepository: any) {}

  async execute() {
    const centers = await this.centerRepository.findAll();
    if (centers.length === 0) {
      throw new Error("Centers not found");
    }
    return centers;
  }
}

export default FindAllCenterUseCase;
