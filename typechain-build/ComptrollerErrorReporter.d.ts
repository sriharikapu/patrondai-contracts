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

interface ComptrollerErrorReporterInterface extends Interface {
  functions: {};

  events: {
    Failure: TypedEventDescription<{
      encodeTopics([error, info, detail]: [null, null, null]): string[];
    }>;
  };
}

export class ComptrollerErrorReporter extends Contract {
  connect(
    signerOrProvider: Signer | Provider | string
  ): ComptrollerErrorReporter;
  attach(addressOrName: string): ComptrollerErrorReporter;
  deployed(): Promise<ComptrollerErrorReporter>;

  on(event: EventFilter | string, listener: Listener): ComptrollerErrorReporter;
  once(
    event: EventFilter | string,
    listener: Listener
  ): ComptrollerErrorReporter;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): ComptrollerErrorReporter;
  removeAllListeners(eventName: EventFilter | string): ComptrollerErrorReporter;
  removeListener(eventName: any, listener: Listener): ComptrollerErrorReporter;

  interface: ComptrollerErrorReporterInterface;

  functions: {};

  filters: {
    Failure(error: null, info: null, detail: null): EventFilter;
  };

  estimate: {};
}