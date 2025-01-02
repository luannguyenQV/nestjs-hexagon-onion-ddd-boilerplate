export class FindAllAlarmsQuery {
  constructor(
    public readonly page?: number,
    public readonly limit?: number,
    public readonly sort?: string,
    public readonly order?: string,
    public readonly search?: string,
  ) {}
}
