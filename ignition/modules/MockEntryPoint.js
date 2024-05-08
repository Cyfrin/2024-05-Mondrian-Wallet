const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules")

const MockEntryPoint = buildModule("MockEntryPoint", (m) => {
    const mockEntryPoint = m.contract("MockEntryPoint")
    return { mockEntryPoint }
})

module.exports = MockEntryPoint