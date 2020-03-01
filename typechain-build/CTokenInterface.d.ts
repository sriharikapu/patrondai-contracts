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

interface CTokenInterfaceInterface extends Interface {
  functions: {
    _acceptAdmin: TypedFunctionDescription<{ encode([]: []): string }>;

    _reduceReserves: TypedFunctionDescription<{
      encode([reduceAmount]: [BigNumberish]): string;
    }>;

    _setComptroller: TypedFunctionDescription<{
      encode([newComptroller]: [string]): string;
    }>;

    _setInterestRateModel: TypedFunctionDescription<{
      encode([newInterestRateModel]: [string]): string;
    }>;

    _setPendingAdmin: TypedFunctionDescription<{
      encode([newPendingAdmin]: [string]): string;
    }>;

    _setReserveFactor: TypedFunctionDescription<{
      encode([newReserveFactorMantissa]: [BigNumberish]): string;
    }>;

    accrualBlockNumber: TypedFunctionDescription<{ encode([]: []): string }>;

    accrueInterest: TypedFunctionDescription<{ encode([]: []): string }>;

    admin: TypedFunctionDescription<{ encode([]: []): string }>;

    allowance: TypedFunctionDescription<{
      encode([owner, spender]: [string, string]): string;
    }>;

    approve: TypedFunctionDescription<{
      encode([spender, amount]: [string, BigNumberish]): string;
    }>;

    balanceOf: TypedFunctionDescription<{ encode([owner]: [string]): string }>;

    balanceOfUnderlying: TypedFunctionDescription<{
      encode([owner]: [string]): string;
    }>;

    borrowBalanceCurrent: TypedFunctionDescription<{
      encode([account]: [string]): string;
    }>;

    borrowBalanceStored: TypedFunctionDescription<{
      encode([account]: [string]): string;
    }>;

    borrowIndex: TypedFunctionDescription<{ encode([]: []): string }>;

    borrowRatePerBlock: TypedFunctionDescription<{ encode([]: []): string }>;

    comptroller: TypedFunctionDescription<{ encode([]: []): string }>;

    decimals: TypedFunctionDescription<{ encode([]: []): string }>;

    exchangeRateCurrent: TypedFunctionDescription<{ encode([]: []): string }>;

    exchangeRateStored: TypedFunctionDescription<{ encode([]: []): string }>;

    getAccountSnapshot: TypedFunctionDescription<{
      encode([account]: [string]): string;
    }>;

    getCash: TypedFunctionDescription<{ encode([]: []): string }>;

    interestRateModel: TypedFunctionDescription<{ encode([]: []): string }>;

    isCToken: TypedFunctionDescription<{ encode([]: []): string }>;

    name: TypedFunctionDescription<{ encode([]: []): string }>;

    pendingAdmin: TypedFunctionDescription<{ encode([]: []): string }>;

    reserveFactorMantissa: TypedFunctionDescription<{ encode([]: []): string }>;

    seize: TypedFunctionDescription<{
      encode([liquidator, borrower, seizeTokens]: [
        string,
        string,
        BigNumberish
      ]): string;
    }>;

    supplyRatePerBlock: TypedFunctionDescription<{ encode([]: []): string }>;

    symbol: TypedFunctionDescription<{ encode([]: []): string }>;

    totalBorrows: TypedFunctionDescription<{ encode([]: []): string }>;

    totalBorrowsCurrent: TypedFunctionDescription<{ encode([]: []): string }>;

    totalReserves: TypedFunctionDescription<{ encode([]: []): string }>;

    totalSupply: TypedFunctionDescription<{ encode([]: []): string }>;

    transfer: TypedFunctionDescription<{
      encode([dst, amount]: [string, BigNumberish]): string;
    }>;

    transferFrom: TypedFunctionDescription<{
      encode([src, dst, amount]: [string, string, BigNumberish]): string;
    }>;
  };

  events: {
    AccrueInterest: TypedEventDescription<{
      encodeTopics([
        cashPrior,
        interestAccumulated,
        borrowIndex,
        totalBorrows
      ]: [null, null, null, null]): string[];
    }>;

    Approval: TypedEventDescription<{
      encodeTopics([owner, spender, amount]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;

    Borrow: TypedEventDescription<{
      encodeTopics([borrower, borrowAmount, accountBorrows, totalBorrows]: [
        null,
        null,
        null,
        null
      ]): string[];
    }>;

    Failure: TypedEventDescription<{
      encodeTopics([error, info, detail]: [null, null, null]): string[];
    }>;

    LiquidateBorrow: TypedEventDescription<{
      encodeTopics([
        liquidator,
        borrower,
        repayAmount,
        cTokenCollateral,
        seizeTokens
      ]: [null, null, null, null, null]): string[];
    }>;

    Mint: TypedEventDescription<{
      encodeTopics([minter, mintAmount, mintTokens]: [
        null,
        null,
        null
      ]): string[];
    }>;

    NewAdmin: TypedEventDescription<{
      encodeTopics([oldAdmin, newAdmin]: [null, null]): string[];
    }>;

    NewComptroller: TypedEventDescription<{
      encodeTopics([oldComptroller, newComptroller]: [null, null]): string[];
    }>;

    NewMarketInterestRateModel: TypedEventDescription<{
      encodeTopics([oldInterestRateModel, newInterestRateModel]: [
        null,
        null
      ]): string[];
    }>;

    NewPendingAdmin: TypedEventDescription<{
      encodeTopics([oldPendingAdmin, newPendingAdmin]: [null, null]): string[];
    }>;

    NewReserveFactor: TypedEventDescription<{
      encodeTopics([oldReserveFactorMantissa, newReserveFactorMantissa]: [
        null,
        null
      ]): string[];
    }>;

    Redeem: TypedEventDescription<{
      encodeTopics([redeemer, redeemAmount, redeemTokens]: [
        null,
        null,
        null
      ]): string[];
    }>;

    RepayBorrow: TypedEventDescription<{
      encodeTopics([
        payer,
        borrower,
        repayAmount,
        accountBorrows,
        totalBorrows
      ]: [null, null, null, null, null]): string[];
    }>;

    ReservesAdded: TypedEventDescription<{
      encodeTopics([benefactor, addAmount, newTotalReserves]: [
        null,
        null,
        null
      ]): string[];
    }>;

    ReservesReduced: TypedEventDescription<{
      encodeTopics([admin, reduceAmount, newTotalReserves]: [
        null,
        null,
        null
      ]): string[];
    }>;

    Transfer: TypedEventDescription<{
      encodeTopics([from, to, amount]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;
  };
}

export class CTokenInterface extends Contract {
  connect(signerOrProvider: Signer | Provider | string): CTokenInterface;
  attach(addressOrName: string): CTokenInterface;
  deployed(): Promise<CTokenInterface>;

  on(event: EventFilter | string, listener: Listener): CTokenInterface;
  once(event: EventFilter | string, listener: Listener): CTokenInterface;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): CTokenInterface;
  removeAllListeners(eventName: EventFilter | string): CTokenInterface;
  removeListener(eventName: any, listener: Listener): CTokenInterface;

  interface: CTokenInterfaceInterface;

  functions: {
    _acceptAdmin(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    _reduceReserves(
      reduceAmount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    _setComptroller(
      newComptroller: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    _setInterestRateModel(
      newInterestRateModel: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    _setPendingAdmin(
      newPendingAdmin: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    _setReserveFactor(
      newReserveFactorMantissa: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    accrualBlockNumber(): Promise<BigNumber>;

    accrueInterest(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    admin(): Promise<string>;

    allowance(owner: string, spender: string): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    balanceOf(owner: string): Promise<BigNumber>;

    balanceOfUnderlying(
      owner: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    borrowBalanceCurrent(
      account: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    borrowBalanceStored(account: string): Promise<BigNumber>;

    borrowIndex(): Promise<BigNumber>;

    borrowRatePerBlock(): Promise<BigNumber>;

    comptroller(): Promise<string>;

    decimals(): Promise<number>;

    exchangeRateCurrent(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    exchangeRateStored(): Promise<BigNumber>;

    getAccountSnapshot(
      account: string
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
    }>;

    getCash(): Promise<BigNumber>;

    interestRateModel(): Promise<string>;

    isCToken(): Promise<boolean>;

    name(): Promise<string>;

    pendingAdmin(): Promise<string>;

    reserveFactorMantissa(): Promise<BigNumber>;

    seize(
      liquidator: string,
      borrower: string,
      seizeTokens: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    supplyRatePerBlock(): Promise<BigNumber>;

    symbol(): Promise<string>;

    totalBorrows(): Promise<BigNumber>;

    totalBorrowsCurrent(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    totalReserves(): Promise<BigNumber>;

    totalSupply(): Promise<BigNumber>;

    transfer(
      dst: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferFrom(
      src: string,
      dst: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  _acceptAdmin(overrides?: TransactionOverrides): Promise<ContractTransaction>;

  _reduceReserves(
    reduceAmount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  _setComptroller(
    newComptroller: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  _setInterestRateModel(
    newInterestRateModel: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  _setPendingAdmin(
    newPendingAdmin: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  _setReserveFactor(
    newReserveFactorMantissa: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  accrualBlockNumber(): Promise<BigNumber>;

  accrueInterest(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  admin(): Promise<string>;

  allowance(owner: string, spender: string): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  balanceOf(owner: string): Promise<BigNumber>;

  balanceOfUnderlying(
    owner: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  borrowBalanceCurrent(
    account: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  borrowBalanceStored(account: string): Promise<BigNumber>;

  borrowIndex(): Promise<BigNumber>;

  borrowRatePerBlock(): Promise<BigNumber>;

  comptroller(): Promise<string>;

  decimals(): Promise<number>;

  exchangeRateCurrent(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  exchangeRateStored(): Promise<BigNumber>;

  getAccountSnapshot(
    account: string
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
  }>;

  getCash(): Promise<BigNumber>;

  interestRateModel(): Promise<string>;

  isCToken(): Promise<boolean>;

  name(): Promise<string>;

  pendingAdmin(): Promise<string>;

  reserveFactorMantissa(): Promise<BigNumber>;

  seize(
    liquidator: string,
    borrower: string,
    seizeTokens: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  supplyRatePerBlock(): Promise<BigNumber>;

  symbol(): Promise<string>;

  totalBorrows(): Promise<BigNumber>;

  totalBorrowsCurrent(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  totalReserves(): Promise<BigNumber>;

  totalSupply(): Promise<BigNumber>;

  transfer(
    dst: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  transferFrom(
    src: string,
    dst: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    AccrueInterest(
      cashPrior: null,
      interestAccumulated: null,
      borrowIndex: null,
      totalBorrows: null
    ): EventFilter;

    Approval(
      owner: string | null,
      spender: string | null,
      amount: null
    ): EventFilter;

    Borrow(
      borrower: null,
      borrowAmount: null,
      accountBorrows: null,
      totalBorrows: null
    ): EventFilter;

    Failure(error: null, info: null, detail: null): EventFilter;

    LiquidateBorrow(
      liquidator: null,
      borrower: null,
      repayAmount: null,
      cTokenCollateral: null,
      seizeTokens: null
    ): EventFilter;

    Mint(minter: null, mintAmount: null, mintTokens: null): EventFilter;

    NewAdmin(oldAdmin: null, newAdmin: null): EventFilter;

    NewComptroller(oldComptroller: null, newComptroller: null): EventFilter;

    NewMarketInterestRateModel(
      oldInterestRateModel: null,
      newInterestRateModel: null
    ): EventFilter;

    NewPendingAdmin(oldPendingAdmin: null, newPendingAdmin: null): EventFilter;

    NewReserveFactor(
      oldReserveFactorMantissa: null,
      newReserveFactorMantissa: null
    ): EventFilter;

    Redeem(redeemer: null, redeemAmount: null, redeemTokens: null): EventFilter;

    RepayBorrow(
      payer: null,
      borrower: null,
      repayAmount: null,
      accountBorrows: null,
      totalBorrows: null
    ): EventFilter;

    ReservesAdded(
      benefactor: null,
      addAmount: null,
      newTotalReserves: null
    ): EventFilter;

    ReservesReduced(
      admin: null,
      reduceAmount: null,
      newTotalReserves: null
    ): EventFilter;

    Transfer(from: string | null, to: string | null, amount: null): EventFilter;
  };

  estimate: {
    _acceptAdmin(): Promise<BigNumber>;

    _reduceReserves(reduceAmount: BigNumberish): Promise<BigNumber>;

    _setComptroller(newComptroller: string): Promise<BigNumber>;

    _setInterestRateModel(newInterestRateModel: string): Promise<BigNumber>;

    _setPendingAdmin(newPendingAdmin: string): Promise<BigNumber>;

    _setReserveFactor(
      newReserveFactorMantissa: BigNumberish
    ): Promise<BigNumber>;

    accrualBlockNumber(): Promise<BigNumber>;

    accrueInterest(): Promise<BigNumber>;

    admin(): Promise<BigNumber>;

    allowance(owner: string, spender: string): Promise<BigNumber>;

    approve(spender: string, amount: BigNumberish): Promise<BigNumber>;

    balanceOf(owner: string): Promise<BigNumber>;

    balanceOfUnderlying(owner: string): Promise<BigNumber>;

    borrowBalanceCurrent(account: string): Promise<BigNumber>;

    borrowBalanceStored(account: string): Promise<BigNumber>;

    borrowIndex(): Promise<BigNumber>;

    borrowRatePerBlock(): Promise<BigNumber>;

    comptroller(): Promise<BigNumber>;

    decimals(): Promise<BigNumber>;

    exchangeRateCurrent(): Promise<BigNumber>;

    exchangeRateStored(): Promise<BigNumber>;

    getAccountSnapshot(account: string): Promise<BigNumber>;

    getCash(): Promise<BigNumber>;

    interestRateModel(): Promise<BigNumber>;

    isCToken(): Promise<BigNumber>;

    name(): Promise<BigNumber>;

    pendingAdmin(): Promise<BigNumber>;

    reserveFactorMantissa(): Promise<BigNumber>;

    seize(
      liquidator: string,
      borrower: string,
      seizeTokens: BigNumberish
    ): Promise<BigNumber>;

    supplyRatePerBlock(): Promise<BigNumber>;

    symbol(): Promise<BigNumber>;

    totalBorrows(): Promise<BigNumber>;

    totalBorrowsCurrent(): Promise<BigNumber>;

    totalReserves(): Promise<BigNumber>;

    totalSupply(): Promise<BigNumber>;

    transfer(dst: string, amount: BigNumberish): Promise<BigNumber>;

    transferFrom(
      src: string,
      dst: string,
      amount: BigNumberish
    ): Promise<BigNumber>;
  };
}
