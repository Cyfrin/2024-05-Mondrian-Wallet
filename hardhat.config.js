require("@matterlabs/hardhat-zksync-deploy")
require("@matterlabs/hardhat-zksync-solc")
require("@nomicfoundation/hardhat-toolbox")
require("@nomicfoundation/hardhat-ignition-ethers")
const { vars } = require("hardhat/config")

const PRIVATE_KEY = vars.get("PRIVATE_KEY", "")
const ZKSYNC_RPC_URL = vars.get("MAINNET_RPC_URL", "")
const MAINNET_RPC_URL = vars.get("ZKSYNC_RPC_URL", "")

module.exports = {
    solidity: "0.8.24",
    zksolc: {
        version: "latest",
        settings: {
            isSystem: true,
        },
    },
    networks: {
        hardhat: {
            chainId: 1337,
        },
        ethMainnet: {
            url: MAINNET_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 1
        },
        zkSyncMainnet: {
            url: ZKSYNC_RPC_URL,
            zksync: true,
            accounts: [PRIVATE_KEY],
            chainId: 324
        },
    },
    solidity: {
        version: "0.8.24",
    },
}