/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { CDelegationStorage } from "./CDelegationStorage";

export class CDelegationStorageFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(): Promise<CDelegationStorage> {
    return super.deploy() as Promise<CDelegationStorage>;
  }
  getDeployTransaction(): UnsignedTransaction {
    return super.getDeployTransaction();
  }
  attach(address: string): CDelegationStorage {
    return super.attach(address) as CDelegationStorage;
  }
  connect(signer: Signer): CDelegationStorageFactory {
    return super.connect(signer) as CDelegationStorageFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CDelegationStorage {
    return new Contract(address, _abi, signerOrProvider) as CDelegationStorage;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060cf8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80635c60da1b14602d575b600080fd5b60336075565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fea265627a7a7231582066eef97b8b20d6f6421d595490b30455b5661add8674c7231d5ed8c97ca0cc0f64736f6c63430005100032";