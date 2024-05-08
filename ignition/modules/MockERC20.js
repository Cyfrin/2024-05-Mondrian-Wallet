const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules")

const MockERC20 = buildModule("MockERC20", (m) => {
    const erc20 = m.contract("MockERC20")
    return { erc20 }
})

module.exports = MockERC20