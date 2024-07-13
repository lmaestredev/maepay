export class Crypto {
  constructor(
    public name: string,
    public currentPrice: number,
    public previousPrice?: number,
    public id?: number
  ) {}
}
