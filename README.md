# Mondrian Wallet

<p align="center">
<img src="https://res.cloudinary.com/droqoz7lg/image/upload/q_90/dpr_2.0/c_fill,g_auto,h_320,w_320/f_auto/v1/company/c799spbjvkawb0gozyna?_a=BATAUVAA0" width="300" alt="it's aaaahhhhtt">
<br/>

# Contest Details

### Prize Pool

- High - 100xp
- Medium - 20xp
- Low - 2xp

- Starts: May 09, 2024 Noon UTC
- Ends: May 16, 2024 Noon UTC

### Stats

- nSLOC: 89
- Complexity Scope: 82

### Disclaimer

_This code was created for Codehawks as the first flight. It is made with bugs and flaws on purpose._
_Don't use any part of this code without reviewing it and audit it._

_This is your opportunity to learn about account abstraction!_

# Table of Contents

- [Mondrian Wallet](#mondrian-wallet)
- [Contest Details](#contest-details)
    - [Prize Pool](#prize-pool)
    - [Stats](#stats)
    - [Disclaimer](#disclaimer)
- [Table of Contents](#table-of-contents)
- [About](#about)
  - [What is account abstraction?](#what-is-account-abstraction)
  - [What account abstraction methods are supported in Mondrian Wallet?](#what-account-abstraction-methods-are-supported-in-mondrian-wallet)
  - [The NFT](#the-nft)
- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Testing](#testing)
- [Audit Scope Details](#audit-scope-details)
  - [Compatibilities](#compatibilities)
- [Roles](#roles)
- [Known Issues](#known-issues)


# About

Our team loves account abstraction, and abstract art, so we decided to combine them!

Users who create an account abstraction wallet with `MondrianWallet` will get a cool account abstraction wallet, with a random [Mondrian](https://en.wikipedia.org/wiki/Piet_Mondrian) art painting!

## What is account abstraction?

Account abstraction (EIP-4337) essentailly allows wallets to sign transactions with _*anything*_ instead of just a private key. 

You can see a diagram of what this looks like below. 

<p align="center">
<img src="https://res.cloudinary.com/droqoz7lg/image/upload/q_90/dpr_2.0/c_fill,g_auto,h_320,w_320/f_auto/v1/company/rareomb6vvaq12ravllt?_a=BATAUVAA0" width="500" alt="account abstraction">
<br/>

We do not use the `Paymaster` or `Aggregator` in our Mondrian Wallet.


## What account abstraction methods are supported in Mondrian Wallet?

For our wallet, a user can execute transactions by one of two methods:

1. A direct call from the Mondrian Wallet Owner, via the `execute` function
2. A `UserOp` from a user who has a signed transaction from the Mondrian Wallet Owner via the `handleOps` function in the `EntryPoint` contract.

To learn more about how this works, you can read the [EIP-4337](https://eips.ethereum.org/EIPS/eip-4337) documentation.

## The NFT

You'll see the `tokenURI` function returns one of 4 random Mondrian art paintings. Each should have equal distribution and be random. 

# Getting Started 

## Requirements 

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
- [Nodejs](https://nodejs.org/en/)
  - You'll know you've installed nodejs right if you can run:
    - `node --version` and get an ouput like: `vx.x.x`
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) instead of `npm`
  - You'll know you've installed yarn right if you can run:
    - `yarn --version` and get an output like: `x.x.x`
    - You might need to install it with `npm`

## Installation 


1. Clone the repository and compile contracts
```bash 
git clone https://github.com/cyfrin/2024-05-Mondrian-Wallet
cd 2024-05-Mondrian-Wallet
yarn 
yarn compile
```


## Testing

```
yarn test
```

# Audit Scope Details

- In Scope:

```
./contracts/
└── MondrianWallet.sol
```

## Compatibilities

- Solc Version: `0.8.24`
- Chain(s) to deploy contract to:
  - Ethereum
  - zkSync
- Deployer address (who will be deploying the contract):
  - 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045

# Roles

Onwer - The one who can execute transactions by directly calling the `execute` function.

# Known Issues

- None

