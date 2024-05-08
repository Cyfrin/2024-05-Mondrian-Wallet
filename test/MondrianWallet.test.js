const { assert, expect } = require("chai")
const { network, deployments, ethers, ignition } = require("hardhat")
const MondrianModule = require("../ignition/modules/MondrianModule")
const MockERC20 = require("../ignition/modules/MockERC20")


describe("MondrianWallet", function () {
    let mondrianWallet
    let erc20
    beforeEach(async () => {
        const mondrianWalletDeployment = await ignition.deploy(MondrianModule)
        const erc20Deployment = await ignition.deploy(MockERC20)
        mondrianWallet = mondrianWalletDeployment.mondrianWallet
        erc20 = erc20Deployment.erc20
    })

    it("Deployment is setup correctly", async function () {
        assert(mondrianWallet.getEntryPoint() != 0)
    })

    it("can execute commands from the owner", async function () {
        const walletOwner = await mondrianWallet.owner()
        const dest = await erc20.getAddress()
        const value = 0
        const functionData = "0x1249c58b" // cast sig "mint()"

        await network.provider.request({
            method: "hardhat_impersonateAccount",
            params: [walletOwner],
        })
        await mondrianWallet.execute(dest, value, functionData)

        assert.equal(await erc20.balanceOf(await mondrianWallet.getAddress()), await erc20.AMOUNT())
    })
})

