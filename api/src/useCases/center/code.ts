class FindByCodeCenterUseCase {
  constructor(private centerRepository: any) {}

  async execute(cod_center: string) {
    const center = await this.centerRepository.findByCode(cod_center);
    if (!center) {
      throw new Error("Center not found");
    }
    return center;
  }
}

export default FindByCodeCenterUseCase;
