import * as chai from 'chai';
import '../custom-matchers';
import {Provider, utils, Wallet, L2VoidSigner, L1VoidSigner} from '../../src';
import {ethers, BigNumber} from 'ethers';

import TokensL1 from '../tokens.json';

const {expect} = chai;

describe('L2VoidSigner', () => {
  const ADDRESS = '0x36615Cf349d7F6344891B1e7CA7C72883F5dc049';
  const RECEIVER = '0xa61464658AfeAf65CccaaFD3a512b69A83B77618';

  const provider = Provider.getDefaultProvider();
  const signer = new L2VoidSigner(ADDRESS, provider);

  describe('#constructor()', () => {
    it('`L2VoidSigner(address, provider)` should return a `L2VoidSigner` with L2 provider', async () => {
      const signer = new L2VoidSigner(ADDRESS, provider);

      expect(signer.address).to.be.equal(ADDRESS);
      expect(signer.provider).to.be.equal(provider);
    });

    it('`L2VoidSigner(address)` should return a `L2VoidSigner` without L2 provider', async () => {
      const signer = new L2VoidSigner(ADDRESS);

      expect(signer.address).to.be.equal(ADDRESS);
      expect(signer.provider).to.be.null;
    });
  });

  describe('#getBalance()', () => {
    it('should return the `L2VoidSigner` balance', async () => {
      const result = await signer.getBalance();
      expect(result.gt(0)).to.be.true;
    });
  });

  describe('#getAllBalances()', () => {
    it('should return all balances', async () => {
      const result = await signer.getAllBalances();
      expect(Object.keys(result)).to.have.lengthOf(2);
    });
  });

  describe('#getL2BridgeContracts()', () => {
    it('should return a L2 bridge contracts', async () => {
      const result = await signer.getL2BridgeContracts();
      expect(result).not.to.be.null;
    });
  });

  describe('#getAddress()', () => {
    it('should return a `L2VoidSigner` address', async () => {
      const result = await signer.getAddress();
      expect(result).to.be.equal(ADDRESS);
    });
  });

  describe('#connect()', () => {
    it('should return a `L2VoidSigner` with provided `provider` as L2 provider', async () => {
      let signer = new L2VoidSigner(ADDRESS);
      signer = signer.connect(provider);

      expect(signer.address).to.be.equal(ADDRESS);
      expect(signer.provider).to.be.equal(provider);
    });
  });

  describe('#getDeploymentNonce()', () => {
    it('should return a deployment nonce', async () => {
      const result = await signer.getDeploymentNonce();
      expect(result).not.to.be.null;
    });
  });

  describe('#populateTransaction()', () => {
    it('should return populated transaction with default values if are omitted', async () => {
      const tx = {
        to: RECEIVER,
        value: 7_000_000,
        type: 2,
        from: ADDRESS,
        nonce: await signer.getNonce('pending'),
        chainId: 270,
        maxFeePerGas: BigNumber.from(1_700_000_000),
        maxPriorityFeePerGas: BigNumber.from(1_500_000_000),
      };
      const result = await signer.populateTransaction({
        to: RECEIVER,
        value: 7_000_000,
      });
      expect(result).to.be.deepEqualExcluding(tx, ['gasLimit']);
    });

    it('should return populated transaction when `maxFeePerGas` and `maxPriorityFeePerGas` and `customData` are provided', async () => {
      const tx = {
        to: RECEIVER,
        value: 7_000_000,
        type: 113,
        from: ADDRESS,
        nonce: await signer.getNonce('pending'),
        data: '0x',
        chainId: 270,
        maxFeePerGas: BigNumber.from(3_500_000_000),
        maxPriorityFeePerGas: BigNumber.from(2_000_000_000),
        customData: {
          gasPerPubdata: utils.DEFAULT_GAS_PER_PUBDATA_LIMIT,
          factoryDeps: [],
        },
      };
      const result = await signer.populateTransaction({
        to: RECEIVER,
        value: 7_000_000,
        maxFeePerGas: BigNumber.from(3_500_000_000),
        maxPriorityFeePerGas: BigNumber.from(2_000_000_000),
        customData: {
          gasPerPubdata: utils.DEFAULT_GAS_PER_PUBDATA_LIMIT,
          factoryDeps: [],
        },
      });
      expect(result).to.be.deepEqualExcluding(tx, ['gasLimit']);
    });

    it('should return populated transaction when `maxPriorityFeePerGas` and `customData` are provided', async () => {
      const tx = {
        to: RECEIVER,
        value: 7_000_000,
        type: 113,
        from: ADDRESS,
        nonce: await signer.getNonce('pending'),
        data: '0x',
        chainId: 270,
        maxPriorityFeePerGas: BigNumber.from(2_000_000_000),
        customData: {
          gasPerPubdata: utils.DEFAULT_GAS_PER_PUBDATA_LIMIT,
          factoryDeps: [],
        },
      };
      const result = await signer.populateTransaction({
        to: RECEIVER,
        value: 7_000_000,
        maxPriorityFeePerGas: BigNumber.from(2_000_000_000),
        customData: {
          gasPerPubdata: utils.DEFAULT_GAS_PER_PUBDATA_LIMIT,
        },
      });
      expect(result).to.be.deepEqualExcluding(tx, ['gasLimit']);
    });

    it('should return populated transaction when `maxFeePerGas` and `customData` are provided', async () => {
      const tx = {
        to: RECEIVER,
        value: 7_000_000,
        type: 113,
        from: ADDRESS,
        nonce: await signer.getNonce('pending'),
        data: '0x',
        chainId: 270,
        maxFeePerGas: BigNumber.from(3_500_000_000),
        customData: {
          gasPerPubdata: utils.DEFAULT_GAS_PER_PUBDATA_LIMIT,
          factoryDeps: [],
        },
      };
      const result = await signer.populateTransaction({
        to: RECEIVER,
        value: 7_000_000,
        maxFeePerGas: BigNumber.from(3_500_000_000),
        customData: {
          gasPerPubdata: utils.DEFAULT_GAS_PER_PUBDATA_LIMIT,
        },
      });
      expect(result).to.be.deepEqualExcluding(tx, ['gasLimit']);
    });

    it('should return populated EIP1559 transaction when `maxFeePerGas` and `maxPriorityFeePerGas` are provided', async () => {
      const tx = {
        to: RECEIVER,
        value: 7_000_000,
        type: 2,
        from: ADDRESS,
        nonce: await signer.getNonce('pending'),
        chainId: 270,
        maxFeePerGas: BigNumber.from(3_500_000_000),
        maxPriorityFeePerGas: BigNumber.from(2_000_000_000),
      };
      const result = await signer.populateTransaction({
        to: RECEIVER,
        value: 7_000_000,
        maxFeePerGas: BigNumber.from(3_500_000_000),
        maxPriorityFeePerGas: BigNumber.from(2_000_000_000),
      });
      expect(result).to.be.deepEqualExcluding(tx, ['gasLimit']);
    });

    it('should return populated EIP1559 transaction with `maxFeePerGas` and `maxPriorityFeePerGas` same as provided `gasPrice`', async () => {
      const tx = {
        to: RECEIVER,
        value: 7_000_000,
        type: 2,
        from: ADDRESS,
        nonce: await signer.getNonce('pending'),
        chainId: 270,
        maxFeePerGas: BigNumber.from(3_500_000_000),
        maxPriorityFeePerGas: BigNumber.from(3_500_000_000),
      };
      const result = await signer.populateTransaction({
        to: RECEIVER,
        value: 7_000_000,
        gasPrice: BigNumber.from(3_500_000_000),
      });
      expect(result).to.be.deepEqualExcluding(tx, ['gasLimit']);
    });

    it('should return populated legacy transaction when `type = 0`', async () => {
      const tx = {
        to: RECEIVER,
        value: 7_000_000,
        type: 0,
        from: ADDRESS,
        nonce: await signer.getNonce('pending'),
        chainId: 270,
        gasPrice: BigNumber.from(100_000_000),
      };
      const result = await signer.populateTransaction({
        type: 0,
        to: RECEIVER,
        value: 7_000_000,
      });
      expect(result).to.be.deepEqualExcluding(tx, ['gasLimit']);
    });
  });

  describe('#sendTransaction()', () => {
    it('should throw an error when trying to send transaction', async () => {
      try {
        await signer.sendTransaction({
          to: RECEIVER,
          value: 7_000_000,
          maxFeePerGas: BigNumber.from(3_500_000_000),
          maxPriorityFeePerGas: BigNumber.from(2_000_000_000),
        });
      } catch (e) {
        expect((e as Error).message).to.contain(
          'VoidSigner cannot sign transactions'
        );
      }
    }).timeout(10_000);
  });

  describe('#withdraw()', () => {
    it('should throw an error when tyring to withdraw assets', async () => {
      try {
        await signer.withdraw({
          token: utils.ETH_ADDRESS,
          to: await signer.getAddress(),
          amount: 7_000_000_000,
        });
      } catch (e) {
        expect((e as Error).message).to.contain(
          'VoidSigner cannot sign transactions'
        );
      }
    }).timeout(25_000);
  });

  describe('#transfer()', () => {
    it('should throw an error when tyring to transfer assets', async () => {
      try {
        await signer.transfer({
          token: utils.ETH_ADDRESS,
          to: RECEIVER,
          amount: 7_000_000_000,
        });
      } catch (e) {
        expect((e as Error).message).to.contain(
          'VoidSigner cannot sign transactions'
        );
      }
    }).timeout(25_000);
  });

  describe('#signTransaction()', () => {
    it('should throw an error when trying to sign transaction', async () => {
      try {
        await signer.signTransaction({
          type: 2,
          to: RECEIVER,
          value: BigNumber.from(7_000_000_000),
        });
      } catch (e) {
        expect((e as Error).message).to.contain(
          'VoidSigner cannot sign transactions'
        );
      }
    }).timeout(25_000);
  });
});

describe('L1VoidSigner', () => {
  const ADDRESS = '0x36615Cf349d7F6344891B1e7CA7C72883F5dc049';
  const RECEIVER = '0xa61464658AfeAf65CccaaFD3a512b69A83B77618';

  const provider = Provider.getDefaultProvider();
  const ethProvider = ethers.getDefaultProvider('http://localhost:8545');
  const signer = new L1VoidSigner(ADDRESS, ethProvider, provider);

  const DAI_L1 = TokensL1[0].address;

  describe('#constructor()', () => {
    it('`L1VoidSigner(privateKey, providerL1, providerL2)` should return a `L1VoidSigner` with L1 and L2 provider', async () => {
      const signer = new L1VoidSigner(ADDRESS, ethProvider, provider);

      expect(signer.address).to.be.equal(ADDRESS);
      expect(signer.provider).to.be.equal(ethProvider);
      expect(signer.providerL2).to.be.equal(provider);
    });

    it('`L1VoidSigner(privateKey, providerL1)` should return a `L1VoidSigner` with L1 provider', async () => {
      const signer = new L1VoidSigner(ADDRESS, ethProvider);

      expect(signer.address).to.be.equal(ADDRESS);
      expect(signer.provider).to.be.equal(ethProvider);
      expect(signer.providerL2).to.be.undefined;
    });

    it('`L1VoidSigner(privateKey)` should return a `L1VoidSigner` without providers', async () => {
      const signer = new L1VoidSigner(ADDRESS);

      expect(signer.address).to.be.equal(ADDRESS);
      expect(signer.provider).to.be.null;
      expect(signer.providerL2).to.be.undefined;
    });
  });

  describe('#getMainContract()', () => {
    it('should return the main contract', async () => {
      const result = await signer.getMainContract();
      expect(result).not.to.be.null;
    });
  });

  describe('#getL1BridgeContracts()', () => {
    it('should return a L1 bridge contracts', async () => {
      const result = await signer.getL1BridgeContracts();
      expect(result).not.to.be.null;
    });
  });

  describe('#getBalanceL1()', () => {
    it('should return a L1 balance', async () => {
      const result = await signer.getBalanceL1();
      expect(result.gt(0)).to.be.true;
    });
  });

  describe('#getAllowanceL1()', () => {
    it('should return allowance of L1 token', async () => {
      const result = await signer.getAllowanceL1(DAI_L1);
      expect(result.gte(0)).to.be.true;
    });
  });

  describe('#l2TokenAddress()', () => {
    it('should return the L2 ETH address', async () => {
      const result = await signer.l2TokenAddress(utils.ETH_ADDRESS);
      expect(result).to.be.equal(utils.ETH_ADDRESS);
    });

    it('should return the L2 DAI address', async () => {
      const result = await signer.l2TokenAddress(DAI_L1);
      expect(result).not.to.be.null;
    });
  });

  describe('#approveERC20()', () => {
    it('should throw an error when approving token', async () => {
      try {
        await signer.approveERC20(utils.ETH_ADDRESS, 5);
      } catch (e) {
        expect((e as Error).message).to.be.equal(
          "ETH token can't be approved! The address of the token does not exist on L1."
        );
      }
    }).timeout(10_000);
  });

  describe('#getBaseCost()', () => {
    it('should return base cost of L1 transaction', async () => {
      const result = await signer.getBaseCost({gasLimit: 100_000});
      expect(result).not.to.be.null;
    });
  });

  describe('#getBalance()', () => {
    it('should return the `L1VoidSigner` balance', async () => {
      const result = await signer.getBalance();
      expect(result.gt(0)).to.be.true;
    });
  });

  describe('#getAddress()', () => {
    it('should return a `L1VoidSigner` address', async () => {
      const result = await signer.getAddress();
      expect(result).to.be.equal(ADDRESS);
    });
  });

  describe('#connect()', () => {
    it('should return a `L1VoidSigner` with provided `provider` as L1 provider', async () => {
      let singer = new L1VoidSigner(ADDRESS);
      singer = singer.connect(ethProvider);
      expect(singer.address).to.be.equal(ADDRESS);
      expect(singer.provider).to.be.equal(ethProvider);
    });
  });

  describe('#connectL2()', () => {
    it('should return a `L1VoidSigner` with provided `provider` as L2 provider', async () => {
      let singer = new L1VoidSigner(ADDRESS);
      singer = singer.connectToL2(provider);
      expect(singer.address).to.be.equal(ADDRESS);
      expect(singer.providerL2).to.be.equal(provider);
    });
  });

  describe('#populateTransaction()', () => {
    it('should return populated transaction with default values if are omitted', async () => {
      const tx = {
        to: RECEIVER,
        value: 7_000_000,
        type: 2,
        from: ADDRESS,
        nonce: await signer.getNonce('pending'),
        chainId: 9,
        maxFeePerGas: BigNumber.from(1_500_000_002),
        maxPriorityFeePerGas: BigNumber.from(1_500_000_000),
      };
      const result = await signer.populateTransaction({
        to: RECEIVER,
        value: 7_000_000,
      });
      expect(result).to.be.deepEqualExcluding(tx, ['gasLimit']);
    });

    it('should return populated EIP1559 transaction when `maxFeePerGas` and `maxPriorityFeePerGas` are provided', async () => {
      const tx = {
        to: RECEIVER,
        value: 7_000_000,
        type: 2,
        from: ADDRESS,
        nonce: await signer.getNonce('pending'),
        chainId: 9,
        maxFeePerGas: BigNumber.from(3_500_000_000),
        maxPriorityFeePerGas: BigNumber.from(2_000_000_000),
      };
      const result = await signer.populateTransaction({
        to: RECEIVER,
        value: 7_000_000,
        maxFeePerGas: BigNumber.from(3_500_000_000),
        maxPriorityFeePerGas: BigNumber.from(2_000_000_000),
      });
      expect(result).to.be.deepEqualExcluding(tx, ['gasLimit']);
    });

    it('should return populated EIP1559 transaction with `maxFeePerGas` and `maxPriorityFeePerGas` same as provided `gasPrice`', async () => {
      const tx = {
        to: RECEIVER,
        value: 7_000_000,
        type: 2,
        from: ADDRESS,
        nonce: await signer.getNonce('pending'),
        chainId: 9,
        maxFeePerGas: BigNumber.from(3_500_000_000),
        maxPriorityFeePerGas: BigNumber.from(3_500_000_000),
      };
      const result = await signer.populateTransaction({
        to: RECEIVER,
        value: 7_000_000,
        gasPrice: BigNumber.from(3_500_000_000),
      });
      expect(result).to.be.deepEqualExcluding(tx, ['gasLimit']);
    });

    it('should return populated legacy transaction when `type = 0`', async () => {
      const tx = {
        to: RECEIVER,
        value: 7_000_000,
        type: 0,
        from: ADDRESS,
        nonce: await signer.getNonce('pending'),
        chainId: 9,
        gasPrice: BigNumber.from(1_000_000_001),
      };
      const result = await signer.populateTransaction({
        type: 0,
        to: RECEIVER,
        value: 7_000_000,
      });
      expect(result).to.be.deepEqualExcluding(tx, ['gasLimit']);
    });
  });

  describe('#sendTransaction()', () => {
    it('should throw an error when trying to send transaction', async () => {
      try {
        await signer.sendTransaction({
          to: RECEIVER,
          value: 7_000_000,
          maxFeePerGas: BigNumber.from(3_500_000_000),
          maxPriorityFeePerGas: BigNumber.from(2_000_000_000),
        });
      } catch (e) {
        expect((e as Error).message).to.contain(
          'VoidSigner cannot sign transactions'
        );
      }
    }).timeout(10_000);
  });

  describe('#getDepositTx()', () => {
    it('should return ETH deposit transaction', async () => {
      const tx = {
        contractAddress: ADDRESS,
        calldata: '0x',
        l2Value: 7_000_000,
        l2GasLimit: BigNumber.from(405_884),
        token: '0x0000000000000000000000000000000000000000',
        to: ADDRESS,
        amount: 7_000_000,
        refundRecipient: ADDRESS,
        operatorTip: BigNumber.from(0),
        overrides: {
          maxFeePerGas: BigNumber.from(1_500_000_001),
          maxPriorityFeePerGas: BigNumber.from(1_500_000_000),
          value: BigNumber.from(109_081_332_000_000),
        },
        gasPerPubdataByte: 800,
      };
      const result = await signer.getDepositTx({
        token: utils.ETH_ADDRESS,
        to: await signer.getAddress(),
        amount: 7_000_000,
        refundRecipient: await signer.getAddress(),
      });
      expect(result).to.be.deep.equal(tx);
    });

    it('should return a deposit transaction with `tx.to == L1VoidSigner.getAddress()` when `tx.to` is not specified', async () => {
      const tx = {
        contractAddress: ADDRESS,
        calldata: '0x',
        l2Value: 7_000_000,
        l2GasLimit: BigNumber.from(405_884),
        token: '0x0000000000000000000000000000000000000000',
        to: ADDRESS,
        amount: 7_000_000,
        refundRecipient: ADDRESS,
        operatorTip: BigNumber.from(0),
        overrides: {
          maxFeePerGas: BigNumber.from(1_500_000_001),
          maxPriorityFeePerGas: BigNumber.from(1_500_000_000),
          value: BigNumber.from(109_081_332_000_000),
        },
        gasPerPubdataByte: 800,
      };
      const result = await signer.getDepositTx({
        token: utils.ETH_ADDRESS,
        amount: 7_000_000,
        refundRecipient: await signer.getAddress(),
      });
      expect(result).to.be.deep.equal(tx);
    });

    it('should return DAI deposit transaction', async () => {
      const tx = {
        maxFeePerGas: BigNumber.from(1_500_000_001),
        maxPriorityFeePerGas: BigNumber.from(1_500_000_000),
        value: BigNumber.from(108_857_993_750_000),
        from: ADDRESS,
        to: (await signer.getL1BridgeContracts()).erc20.address,
      };
      const result = await signer.getDepositTx({
        token: DAI_L1,
        to: await signer.getAddress(),
        amount: 5,
        refundRecipient: await signer.getAddress(),
      });
      result.to = result.to.toLowerCase();
      expect(result).to.be.deepEqualExcluding(tx, ['data']);
    });
  });

  describe('#estimateGasDeposit()', () => {
    it('should return gas estimation for ETH deposit transaction', async () => {
      const result = await signer.estimateGasDeposit({
        token: utils.ETH_ADDRESS,
        to: await signer.getAddress(),
        amount: 5,
        refundRecipient: await signer.getAddress(),
      });
      expect(result.eq(BigNumber.from(134_799))).to.be.true;
    });

    it('should return gas estimation for DAI deposit transaction', async () => {
      const wallet = new Wallet(
        '0x7726827caac94a7f9e1b160f7ea819f172f7b6f9d2a97f992c38edeab82d4110',
        provider,
        ethProvider
      );
      const tx = await wallet.approveERC20(DAI_L1, 5);
      await tx.wait();

      const result = await signer.estimateGasDeposit({
        token: DAI_L1,
        to: await signer.getAddress(),
        amount: 5,
        refundRecipient: await signer.getAddress(),
      });
      expect(result.eq(BigNumber.from(255_336))).to.be.true;
    }).timeout(10_000);
  });

  describe('#deposit()', () => {
    it('should throw an error when trying to deposit assets', async () => {
      try {
        await signer.deposit({
          token: utils.ETH_ADDRESS,
          to: await signer.getAddress(),
          amount: 7_000_000_000,
          refundRecipient: await signer.getAddress(),
        });
      } catch (e) {
        expect((e as Error).message).to.contain(
          'VoidSigner cannot sign transactions'
        );
      }
    }).timeout(10_000);
  });

  describe('#claimFailedDeposit()', () => {
    it('should throw an error when trying to claim successful deposit', async () => {
      try {
        const response = await signer.deposit({
          token: utils.ETH_ADDRESS,
          to: await signer.getAddress(),
          amount: 7_000_000_000,
          refundRecipient: await signer.getAddress(),
        });

        const tx = await response.waitFinalize();
        await signer.claimFailedDeposit(tx.transactionHash);
      } catch (e) {
        expect((e as Error).message).to.contain(
          'VoidSigner cannot sign transactions'
        );
      }
    }).timeout(30_000);
  });

  describe('#getFullRequiredDepositFee()', () => {
    it('should return fee for ETH token deposit', async () => {
      const feeData = {
        baseCost: BigNumber.from(107_740_531_250_000),
        l1GasLimit: BigNumber.from(134_799),
        l2GasLimit: BigNumber.from('0x61dff'),
        maxFeePerGas: BigNumber.from(1_500_000_001),
        maxPriorityFeePerGas: BigNumber.from(1_500_000_000),
      };
      const result = await signer.getFullRequiredDepositFee({
        token: utils.ETH_ADDRESS,
        to: await signer.getAddress(),
      });
      expect(result).to.be.deep.equal(feeData);
    });

    it('should throw an error when there is not enough allowance to cover the deposit', async () => {
      try {
        await signer.getFullRequiredDepositFee({
          token: DAI_L1,
          to: await signer.getAddress(),
        });
      } catch (e) {
        expect((e as Error).message).to.be.equal(
          'Not enough allowance to cover the deposit!'
        );
      }
    }).timeout(10_000);

    it('should return fee for DAI token deposit', async () => {
      const feeData = {
        baseCost: BigNumber.from(108_857_993_750_000),
        l1GasLimit: BigNumber.from(255_096),
        l2GasLimit: BigNumber.from('0x62e3d'),
        maxFeePerGas: BigNumber.from(1_500_000_001),
        maxPriorityFeePerGas: BigNumber.from(1_500_000_000),
      };

      const result = await signer.getFullRequiredDepositFee({
        token: DAI_L1,
        to: await signer.getAddress(),
      });
      expect(result).to.be.deep.equal(feeData);
    }).timeout(10_000);

    it('should throw an error when there is not enough balance for the deposit', async () => {
      try {
        const randomSigner = new L1VoidSigner(
          ethers.Wallet.createRandom().address,
          ethProvider,
          provider
        );

        await randomSigner.getFullRequiredDepositFee({
          token: DAI_L1,
          to: await randomSigner.getAddress(),
        });
      } catch (e) {
        expect((e as Error).message).to.include(
          'Not enough balance for deposit!'
        );
      }
    }).timeout(10_000);
  });

  describe('#getRequestExecuteTx()', () => {
    it('should return request execute transaction', async () => {
      const result = await signer.getRequestExecuteTx({
        contractAddress: await provider.getMainContractAddress(),
        calldata: '0x',
        l2Value: 7_000_000_000,
      });
      expect(result).not.to.be.null;
    });
  });

  describe('#estimateGasRequestExecute()', () => {
    it('should return gas estimation for request execute transaction', async () => {
      const result = await signer.estimateGasRequestExecute({
        contractAddress: await provider.getMainContractAddress(),
        calldata: '0x',
        l2Value: 7_000_000_000,
      });
      expect(result.isZero()).to.be.false;
    });
  });

  describe('#requestExecute()', () => {
    it('should request transaction execution on L2 network', async () => {
      try {
        await signer.requestExecute({
          contractAddress: await provider.getMainContractAddress(),
          calldata: '0x',
          l2Value: 7_000_000_000,
          l2GasLimit: 900_000,
        });
      } catch (e) {
        expect((e as Error).message).to.contain(
          'VoidSigner cannot sign transactions'
        );
      }
    }).timeout(10_000);
  });

  describe('#signTransaction()', () => {
    it('should throw an error when trying to send transaction', async () => {
      try {
        await signer.sendTransaction({
          to: RECEIVER,
          value: 7_000_000,
          maxFeePerGas: BigNumber.from(3_500_000_000),
          maxPriorityFeePerGas: BigNumber.from(2_000_000_000),
        });
      } catch (e) {
        expect((e as Error).message).to.contain(
          'VoidSigner cannot sign transactions'
        );
      }
    }).timeout(10_000);
  });
});
