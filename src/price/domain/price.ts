export class Price {
  constructor(
    public readonly price: number,
    public readonly cryptoId?: number,
    public readonly createdAt?: Date,
    public readonly id?: number
  ) {}
}
