/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface InterestRateModelInterface extends Interface {
  functions: {
    getBorrowRate: TypedFunctionDescription<{
      encode([cash, borrows, reserves]: [
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    getSupplyRate: TypedFunctionDescription<{
      encode([cash, borrows, reserves, reserveFactorMantissa]: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    isInterestRateModel: TypedFunctionDescription<{ encode([]: []): string }>;
  };

  events: {};
}

export class InterestRateModel extends Contract {
  connect(signerOrProvider: Signer | Provider | string): InterestRateModel;
  attach(addressOrName: string): InterestRateModel;
  deployed(): Promise<InterestRateModel>;

  on(event: EventFilter | string, listener: Listener): InterestRateModel;
  once(event: EventFilter | string, listener: Listener): InterestRateModel;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): InterestRateModel;
  removeAllListeners(eventName: EventFilter | string): InterestRateModel;
  removeListener(eventName: any, listener: Listener): InterestRateModel;

  interface: InterestRateModelInterface;

  functions: {
    getBorrowRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish
    ): Promise<BigNumber>;

    getSupplyRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      reserveFactorMantissa: BigNumberish
    ): Promise<BigNumber>;

    isInterestRateModel(): Promise<boolean>;
  };

  getBorrowRate(
    cash: BigNumberish,
    borrows: BigNumberish,
    reserves: BigNumberish
  ): Promise<BigNumber>;

  getSupplyRate(
    cash: BigNumberish,
    borrows: BigNumberish,
    reserves: BigNumberish,
    reserveFactorMantissa: BigNumberish
  ): Promise<BigNumber>;

  isInterestRateModel(): Promise<boolean>;

  filters: {};

  estimate: {
    getBorrowRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish
    ): Promise<BigNumber>;

    getSupplyRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      reserveFactorMantissa: BigNumberish
    ): Promise<BigNumber>;

    isInterestRateModel(): Promise<BigNumber>;
  };
}
