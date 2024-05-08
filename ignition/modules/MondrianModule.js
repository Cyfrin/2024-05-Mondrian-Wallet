const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules")
const { networkConfig } = require("../../helper-config")
const { network } = require("hardhat")
const { MockEntryPoint } = require("./MockEntryPoint.js")

const MondrianModule = buildModule("MondrianModule", (m) => {
    const chainId = network.config.chainId

    let entryPointAddress
    if (chainId == 1337) {
        console.log("Deploying MockEntryPoint")
        ignition.deploy(MockEntryPoint).then((mockEntryPoint) => {
            entryPointAddress = mockEntryPoint.address
        })
    }
    entryPointAddress = entryPointAddress || m.getParameter("entryPointAddress", networkConfig[chainId].entryPoint)
    const mondrianWallet = m.contract("MondrianWallet", [entryPointAddress])
    return { mondrianWallet }
})

module.exports = MondrianModule