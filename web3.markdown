---
title: Web 3 - Skillbill
description: Skillbill is actively involved in new application on Blockchain technologies.
layout: page
---

{% include image.html url="/uploads/web3-00.jpg?v=1" height="580"  alt="web3" %}

Photo by: Jernej Furman

## Intro

For more than 15 years we have been hearing about Web 3.0, but only recently this new virtual space has finally taken its final form; The technology has gone further, thanks mainly to blockchain, taken its final form and today takes the name Web3, or Decentralized Web.
 
Internet founder Tim Berners Lee said, Web3 is the latest step in the evolution of the Web. It will be a decentralized Web, where people will have control over their own data and can decide how to share it. Blockchain will be the core of this new web, allowing all economic and financial movements to be safely and reliably tracked.


## WEB3 in Skillbill

Skillbill heavily invests in upgrading internal skills and has long been involved in development in WEB3 technologies. The company has gained experience developing with:

- **SMART CONTRACT**
- **NFT (ERC-721)**
- **SFT (ERC-1155)**
- **EVM (Ethereum virtual machine)**
- **Metamask wallet**
- **RC20 token**

and with other tools for DAPP development as **OpenZepeling**, **Moralis**, **Alchemy**, **HardHat** and so on.
Experience comes from two separate projects :

### NFT-provisioning

NFT-provisioning is a system for authoring, selling and exchanging Non Fungible Token (NFT) or Semi Fungible Token (SFT) on blockchain.
Some features of the product:
- Users can purchase NFTs even without having their own Wallet.
- TOKENs are compatible with external stores such as OpenSea and Rarible, ensuring their value even outside the original platform
- The portal is integrated with the **UniswapV3** exchange protocol to convert ETH with other RC20 coins on the fly
 
Within the blockchain, NFTs or SFTs are implemented through Smart-Contract (SC). The authoring part, done in javascript, allows the creation of metadata that are uploaded to IPFS, a decentralized file system with the property of immodifiability of uploaded data.
 
Blockchain interaction is triggered only when there is a need to interact with the user's wallet, essentially at the purchase stage, while the creation and sale of NFT/SFTs are performed on the backend side in **Kotlin**.
 
The wallet to which the cost of using the blockchain is discharged, and then the account used to create the token, is managed internally from the backend to the application, allowing the associated account to be shared, with all users who can access the authoring part.
This allows for the user to not necessarily own a personal wallet, but to make use of any shared one. When purchasing the token, payment will be made to the latter wallet.

The sales part was based on the Wyvern protocol: an open source specification also adopted by the OpenSea platform. This protocol, which consists of several SCs, makes it possible to perform in a single atomic operation:
- verification
- purchase validity
- token ownership transactions
- payment in the indicated currency

In this case, we again made use of an opensea-js library for the javascript part, while for the kotlin part, a similar flow was recreated manually.
Currently, payment can be made in Etherium or in a custom currency that follows the ERC-20 specification.

### Fanplanet

Fanplanet is a new as-a-service platform that enables the purchase and enjoyment of digital and analog goods and services. It does this by using innovative technologies that enable it to leverage the benefits of Web3, such as **NFTs**. Having a given NFT token will allow one to own unique, collectible digital content that will give exclusive access to content, both digital and analog.
 
Fanplanet allows artists and content creators to receive funding directly from their fans without the mediation of any OTT platform, maximizing revenues and brand control.

In the past, the true value of a media was related to the scarcity of the object in numbers; a limited-edition record, a bootleg, or an autographed photo was highly coveted by fans. The shift to digital, with particular reference to audio and video streaming services made it impossible to create limited products for fans, at least until the arrival of NFTs.

Fanplanet is beyond the concept of collecting, using rare digital items to have rare experiences, for example, one can view an exclusive video, get a digital fan ticket, but also attend an exclusive concert in attendance; the platform allows many possibilities that can be decided by the marketing strategy and business plan of those who use the platform for their business.

## Contact us

If you are interested write to <info@skillbill.it> for a private demo

