import { Structure } from '../../marshmallow/index.js';
import * as _solana_web3_js from '@solana/web3.js';
import * as BN from 'bn.js';
import '../../marshmallow/buffer-layout.js';

declare const CpmmConfigInfoLayout: Structure<number | boolean | BN | Buffer | _solana_web3_js.PublicKey | BN[], "", {
    bump: number;
    index: number;
    protocolFeeRate: BN;
    tradeFeeRate: BN;
    disableCreatePool: boolean;
    fundFeeRate: BN;
    createPoolFee: BN;
    protocolOwner: _solana_web3_js.PublicKey;
    fundOwner: _solana_web3_js.PublicKey;
    creatorFeeRate: BN;
}>;
declare const CpmmPoolInfoLayout: Structure<number | boolean | BN | number[] | Buffer | _solana_web3_js.PublicKey | BN[], "", {
    bump: number;
    openTime: BN;
    status: number;
    mintA: _solana_web3_js.PublicKey;
    mintB: _solana_web3_js.PublicKey;
    vaultA: _solana_web3_js.PublicKey;
    vaultB: _solana_web3_js.PublicKey;
    observationId: _solana_web3_js.PublicKey;
    lpAmount: BN;
    mintLp: _solana_web3_js.PublicKey;
    lpDecimals: number;
    configId: _solana_web3_js.PublicKey;
    poolCreator: _solana_web3_js.PublicKey;
    mintProgramA: _solana_web3_js.PublicKey;
    mintProgramB: _solana_web3_js.PublicKey;
    mintDecimalA: number;
    mintDecimalB: number;
    protocolFeesMintA: BN;
    protocolFeesMintB: BN;
    fundFeesMintA: BN;
    fundFeesMintB: BN;
    epoch: BN;
    feeOn: number;
    enableCreatorFee: boolean;
    creatorFeesMintA: BN;
    creatorFeesMintB: BN;
}>;
declare const CpmmPermission: Structure<Buffer | _solana_web3_js.PublicKey | BN[], "", {
    configId: _solana_web3_js.PublicKey;
}>;

export { CpmmConfigInfoLayout, CpmmPermission, CpmmPoolInfoLayout };
