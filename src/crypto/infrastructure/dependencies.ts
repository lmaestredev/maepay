import { CreatePriceUseCase } from "../../price/application/create-usecase/create-price-usecase";
import { PriceRepositoryImpl } from "../../price/infrastructure/outbound/price-repository-impl";
import { CreateCryptoUseCase } from "../application/create-usecase/create-crypto-usecase";
import { GetAllCryptosUseCase } from "../application/get-usecase/get-all-cryptos-usecase";
import { UpdateCryptoUseCase } from "../application/update-usecase/update-crypto-usecase";
import { CryptoGetController } from "./inbound/controllers/get-controller";
import { CryptoPostController } from "./inbound/controllers/post-controller";
import { CryptoPutController } from "./inbound/controllers/put-controller";
import { CryptoRepositoryImpl } from "./outbound/crypto-repository-impl";

//repositories
const cryptoRepository = new CryptoRepositoryImpl();
const priceRepository = new PriceRepositoryImpl();

//usecases
const getAllCryptosUseCase = new GetAllCryptosUseCase(cryptoRepository);
const createPriceUseCase = new CreatePriceUseCase(priceRepository);
const createCryptoUseCase = new CreateCryptoUseCase(
  cryptoRepository,
  createPriceUseCase
);
const updateCryptoUseCase = new UpdateCryptoUseCase(
  cryptoRepository,
  createPriceUseCase
);

//controllers
export const cryptoPostController = new CryptoPostController(
  createCryptoUseCase
);
export const cryptoPutController = new CryptoPutController(updateCryptoUseCase);
export const cryptoGetController = new CryptoGetController(
  getAllCryptosUseCase
);
