import { Structure } from '../../marshmallow/index.js';
import * as _solana_web3_js from '@solana/web3.js';
import * as BN from 'bn.js';
import '../../marshmallow/buffer-layout.js';

declare const LaunchpadConfig: Structure<number | BN | _solana_web3_js.PublicKey | BN[], "", {
    index: number;
    mintB: _solana_web3_js.PublicKey;
    tradeFeeRate: BN;
    epoch: BN;
    curveType: number;
    migrateFee: BN;
    maxShareFeeRate: BN;
    minSupplyA: BN;
    maxLockRate: BN;
    minSellRateA: BN;
    minMigrateRateA: BN;
    minFundRaisingB: BN;
    protocolFeeOwner: _solana_web3_js.PublicKey;
    migrateFeeOwner: _solana_web3_js.PublicKey;
    migrateToAmmWallet: _solana_web3_js.PublicKey;
    migrateToCpmmWallet: _solana_web3_js.PublicKey;
}>;
declare const VestingSchedule: Structure<BN, "", {
    startTime: BN;
    totalLockedAmount: BN;
    cliffPeriod: BN;
    unlockPeriod: BN;
    totalAllocatedShare: BN;
}>;
declare const LaunchpadPool: Structure<number | BN | number[] | _solana_web3_js.PublicKey | {
    startTime: BN;
    totalLockedAmount: BN;
    cliffPeriod: BN;
    unlockPeriod: BN;
    totalAllocatedShare: BN;
}, "", {
    creator: _solana_web3_js.PublicKey;
    bump: number;
    status: number;
    mintA: _solana_web3_js.PublicKey;
    mintB: _solana_web3_js.PublicKey;
    vaultA: _solana_web3_js.PublicKey;
    vaultB: _solana_web3_js.PublicKey;
    mintDecimalsA: number;
    mintDecimalsB: number;
    supply: BN;
    configId: _solana_web3_js.PublicKey;
    epoch: BN;
    protocolFee: BN;
    migrateFee: BN;
    migrateType: number;
    totalSellA: BN;
    virtualA: BN;
    virtualB: BN;
    realA: BN;
    realB: BN;
    totalFundRaisingB: BN;
    platformFee: BN;
    vestingSchedule: {
        startTime: BN;
        totalLockedAmount: BN;
        cliffPeriod: BN;
        unlockPeriod: BN;
        totalAllocatedShare: BN;
    };
    platformId: _solana_web3_js.PublicKey;
    mintProgramFlag: number;
    cpmmCreatorFeeOn: number;
}>;
declare const LaunchpadVesting: Structure<BN | _solana_web3_js.PublicKey | BN[], "", {
    poolId: _solana_web3_js.PublicKey;
    epoch: BN;
    claimedAmount: BN;
    beneficiary: _solana_web3_js.PublicKey;
    tokenShareAmount: BN;
}>;
declare const BondingCurveParam: Structure<number | BN, "", {
    supply: BN;
    totalLockedAmount: BN;
    cliffPeriod: BN;
    unlockPeriod: BN;
    migrateType: number;
    totalSellA: BN;
    totalFundRaisingB: BN;
    migrateCpmmFeeOn: number;
}>;
declare const PlatformCurveParam: Structure<number | BN | _solana_web3_js.PublicKey | BN[] | {
    supply: BN;
    totalLockedAmount: BN;
    cliffPeriod: BN;
    unlockPeriod: BN;
    migrateType: number;
    totalSellA: BN;
    totalFundRaisingB: BN;
    migrateCpmmFeeOn: number;
}, "", {
    index: number;
    configId: _solana_web3_js.PublicKey;
    epoch: BN;
    bondingCurveParam: {
        supply: BN;
        totalLockedAmount: BN;
        cliffPeriod: BN;
        unlockPeriod: BN;
        migrateType: number;
        totalSellA: BN;
        totalFundRaisingB: BN;
        migrateCpmmFeeOn: number;
    };
}>;
declare const PlatformConfig: Structure<BN | number[] | _solana_web3_js.PublicKey | {
    index: number;
    configId: _solana_web3_js.PublicKey;
    epoch: BN;
    bondingCurveParam: {
        supply: BN;
        totalLockedAmount: BN;
        cliffPeriod: BN;
        unlockPeriod: BN;
        migrateType: number;
        totalSellA: BN;
        totalFundRaisingB: BN;
        migrateCpmmFeeOn: number;
    };
}[], "", {
    name: number[];
    feeRate: BN;
    epoch: BN;
    creatorFeeRate: BN;
    platformClaimFeeWallet: _solana_web3_js.PublicKey;
    platformLockNftWallet: _solana_web3_js.PublicKey;
    platformScale: BN;
    creatorScale: BN;
    burnScale: BN;
    web: number[];
    img: number[];
    cpConfigId: _solana_web3_js.PublicKey;
    transferFeeExtensionAuth: _solana_web3_js.PublicKey;
    platformCurve: {
        index: number;
        configId: _solana_web3_js.PublicKey;
        epoch: BN;
        bondingCurveParam: {
            supply: BN;
            totalLockedAmount: BN;
            cliffPeriod: BN;
            unlockPeriod: BN;
            migrateType: number;
            totalSellA: BN;
            totalFundRaisingB: BN;
            migrateCpmmFeeOn: number;
        };
    }[];
}>;

export { BondingCurveParam, LaunchpadConfig, LaunchpadPool, LaunchpadVesting, PlatformConfig, PlatformCurveParam, VestingSchedule };
