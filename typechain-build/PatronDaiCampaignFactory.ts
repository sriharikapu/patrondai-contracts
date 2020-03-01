/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { PatronDaiCampaign } from "./PatronDaiCampaign";

export class PatronDaiCampaignFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    daiAddress: string,
    cdaiAddress: string,
    owner: string
  ): Promise<PatronDaiCampaign> {
    return super.deploy(daiAddress, cdaiAddress, owner) as Promise<
      PatronDaiCampaign
    >;
  }
  getDeployTransaction(
    daiAddress: string,
    cdaiAddress: string,
    owner: string
  ): UnsignedTransaction {
    return super.getDeployTransaction(daiAddress, cdaiAddress, owner);
  }
  attach(address: string): PatronDaiCampaign {
    return super.attach(address) as PatronDaiCampaign;
  }
  connect(signer: Signer): PatronDaiCampaignFactory {
    return super.connect(signer) as PatronDaiCampaignFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PatronDaiCampaign {
    return new Contract(address, _abi, signerOrProvider) as PatronDaiCampaign;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "daiAddress",
        type: "address"
      },
      {
        internalType: "address",
        name: "cdaiAddress",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "raisedDai",
        type: "uint256"
      }
    ],
    name: "Closed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "OwnerWithdraw",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "patron",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "PatronDeposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "patron",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "PatronWithdraw",
    type: "event"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "_patrons",
    outputs: [
      {
        internalType: "uint256",
        name: "daiBalance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "collateralBalance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "lastCapitalization",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "capitalized",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "close",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getCDaiAddress",
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
  },
  {
    constant: true,
    inputs: [],
    name: "getDaiAddress",
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
  },
  {
    constant: true,
    inputs: [],
    name: "getDaiRaised",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getOwner",
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
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "patron",
        type: "address"
      }
    ],
    name: "getPatronCollateralBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "patron",
        type: "address"
      }
    ],
    name: "getPatronDaiBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "isClosed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "withdrawnSupportingDaiAmount",
        type: "uint256"
      }
    ],
    name: "stopSupporting",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "support",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051611c1b380380611c1b8339818101604052606081101561003357600080fd5b8101908080519060200190929190805190602001909291908051906020019092919050505082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550826000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561028757600080fd5b505af115801561029b573d6000803e3d6000fd5b505050506040513d60208110156102b157600080fd5b810190808051906020019092919050505050505050611946806102d56000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806397fed92c1161007157806397fed92c14610220578063b7d2af551461026a578063c2b6b58c146102c2578063db04c817146102e4578063f01fcd3914610312578063fa1704dc14610330576100b4565b80632e1a7d4d146100b957806333187dbb146100e757806343d726d61461013157806356c9493f1461013b57806373f154d714610169578063893d20e8146101d6575b600080fd5b6100e5600480360360208110156100cf57600080fd5b8101908080359060200190929190505050610388565b005b6100ef610825565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61013961084e565b005b6101676004803603602081101561015157600080fd5b810190808035906020019092919050505061092f565b005b6101ab6004803603602081101561017f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e33565b6040518085815260200184815260200183815260200182815260200194505050505060405180910390f35b6101de610e63565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610228610e8d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102ac6004803603602081101561028057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610eb7565b6040518082815260200191505060405180910390f35b6102ca610f03565b604051808215151515815260200191505060405180910390f35b610310600480360360208110156102fa57600080fd5b8101908080359060200190929190505050610f16565b005b61031a611320565b6040518082815260200191505060405180910390f35b6103726004803603602081101561034657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061132a565b6040518082815260200191505060405180910390f35b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461042e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806118b26032913960400191505060405180910390fd5b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bd6d894d6040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561049a57600080fd5b505af11580156104ae573d6000803e3d6000fd5b505050506040513d60208110156104c457600080fd5b810190808051906020019092919050505090506000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561057857600080fd5b505afa15801561058c573d6000803e3d6000fd5b505050506040513d60208110156105a257600080fd5b810190808051906020019092919050505090506000670de0b6b3a7640000828402816105ca57fe5b0490506000600554820390508085111561062f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806117c6602e913960400191505060405180910390fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663852a12e3866040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b1580156106a457600080fd5b505af11580156106b8573d6000803e3d6000fd5b505050506040513d60208110156106ce57600080fd5b810190808051906020019092919050505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16876040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156107ab57600080fd5b505af11580156107bf573d6000803e3d6000fd5b505050506040513d60208110156107d557600080fd5b8101908080519060200190929190505050507fa20809e697380eaea0fd13bf4d14b00e2ef29559ef361501189d3be2e9b0ec85856040518082815260200191505060405180910390a15050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806118b26032913960400191505060405180910390fd5b7f6cc09e7b5c3e49861ebe8f6867e1618fbfc14c8d0e968fde37c4243ca02a6f836005546040518082815260200191505060405180910390a1565b600760009054906101000a900460ff1615610995576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611838602e913960400191505060405180910390fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610a3c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260448152602001806117f46044913960600191505060405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610b1957600080fd5b505af1158015610b2d573d6000803e3d6000fd5b505050506040513d6020811015610b4357600080fd5b8101908080519060200190929190505050610ba9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806118e4602e913960400191505060405180910390fd5b610bb233611376565b80600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282540192505081905550806005600082825401925050819055506000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bd6d894d6040518163ffffffff1660e01b8152600401602060405180830381600087803b158015610c7e57600080fd5b505af1158015610c92573d6000803e3d6000fd5b505050506040513d6020811015610ca857600080fd5b81019080805190602001909291905050509050600080610cd684604051806020016040528086815250611559565b8092508193505050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a0712d68856040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b158015610d5357600080fd5b505af1158015610d67573d6000803e3d6000fd5b505050506040513d6020811015610d7d57600080fd5b81019080805190602001909291905050505080600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101600082825401925050819055503373ffffffffffffffffffffffffffffffffffffffff167f3e40e1c8c7f335860faa373b0858dd062cf92d8f41f553b835b982546893e772856040518082815260200191505060405180910390a250505050565b60066020528060005260406000206000915090508060000154908060010154908060020154908060030154905084565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101549050919050565b600760009054906101000a900460ff1681565b80600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001541015610fb1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604c815260200180611866604c913960600191505060405180910390fd5b610fba33611376565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bd6d894d6040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561102657600080fd5b505af115801561103a573d6000803e3d6000fd5b505050506040513d602081101561105057600080fd5b81019080805190602001909291905050509050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663852a12e3836040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b1580156110d857600080fd5b505af11580156110ec573d6000803e3d6000fd5b505050506040513d602081101561110257600080fd5b810190808051906020019092919050505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156111bd57600080fd5b505af11580156111d1573d6000803e3d6000fd5b505050506040513d60208110156111e757600080fd5b81019080805190602001909291905050505081600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254039250508190555060008061126484604051806020016040528086815250611559565b809250819350505080600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008282540392505081905550836005600082825403925050819055503373ffffffffffffffffffffffffffffffffffffffff167f6aa3145a1d4dc2f9c1ffd2055033cc4ea806260ca7c0ed235f208707a2c35f0b856040518082815260200191505060405180910390a250505050565b6000600554905090565b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001549050919050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bd6d894d6040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156113e257600080fd5b505af11580156113f6573d6000803e3d6000fd5b505050506040513d602081101561140c57600080fd5b810190808051906020019092919050505090506000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015482039050670de0b6b3a7640000600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101548202816114bd57fe5b04600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003016000828254019250508190555081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020181905550505050565b60008060006115666117b2565b61157086866115bc565b915091506000600381111561158157fe5b82600381111561158d57fe5b146115a3578160008090509350935050506115b5565b60006115ae82611638565b9350935050505b9250929050565b60006115c66117b2565b6000806115db670de0b6b3a764000087611657565b91509150600060038111156115ec57fe5b8260038111156115f857fe5b1461161c578160405180602001604052806000815250809050935093505050611631565b61162a8186600001516116aa565b9350935050505b9250929050565b6000670de0b6b3a764000082600001518161164f57fe5b049050919050565b600080600084141561167257600080809050915091506116a3565b600083850290508385828161168357fe5b041461169a576002600080905092509250506116a3565b60008192509250505b9250929050565b60006116b46117b2565b6000806116c986670de0b6b3a7640000611657565b91509150600060038111156116da57fe5b8260038111156116e657fe5b1461170a578160405180602001604052806000815250809050935093505050611777565b600080611717838861177e565b915091506000600381111561172857fe5b82600381111561173457fe5b1461175a5781604051806020016040528060008152508090509550955050505050611777565b600060405180602001604052808381525080905095509550505050505b9250929050565b600080600083141561179a5760016000809050915091506117ab565b60008385816117a557fe5b04915091505b9250929050565b604051806020016040528060008152509056fe506174726f6e44616943616d706169676e3a3a776974686472617720796f75206772656564792062617374617264506174726f6e44616943616d706169676e3a3a737570706f72743a205468652066756e64206f776e6572206973206e6f7420616c6c6f77656420746f206465706f736974506174726f6e44616943616d706169676e3a3a737570706f72743a2043616d706169676e20697320636c6f736564506174726f6e44616943616d706169676e3a3a73746f70537570706f7274696e6720796f752063616e2774207769746864726177206d6f7265207468616e20796f752070757474656420696e506174726f6e44616943616d706169676e3a3a6f6e6c794f776e65723a20596f75277265206e6f7420746865206f776e6572506174726f6e44616943616d706169676e3a3a737570706f727420444149207472616e73666572206661696c6564a265627a7a72315820cf86caf9a3fa5eda7bd4a23faf7a7fb12e88696e4b841fcd0548d8ced9d7271264736f6c63430005100032";
