---
title: Web 3
layout: business_line
header:
  image: "/uploads/web3-00.jpg?v=1"
  texts:
  - For over 15 years, the concept of Web 3.0 has been on the horizon, and now, at
    last, this visionary digital realm has come to life as Web3, also known as the
    Decentralized Web. Empowered by groundbreaking blockchain technology, Web3 has
    reached its definitive form, marking the latest milestone in the evolution of
    the internet,
  - As stated by Tim Berners-Lee, the inventor of the web, Web3 embodies a decentralized
    landscape, granting individuals control over their data and the freedom to decide
    how it is shared. At the heart of this transformative era, blockchain serves as
    the bedrock, ensuring secure and transparent tracking of all economic and financial
    activities..
introduction:
  title: Web3 in SkillBill
  texts:
  - Discover below our web3 experience, unlocking the potential of decentralized technologies.
    Step into the future with us as we navigate the boundless possibilities of blockchain
    and decentralized applications.
---

Skillbill heavily invests in upgrading internal skills and has long been involved in development in WEB3 technologies. The company has gained experience developing with:

- **SMART CONTRACT**
- **NFT (ERC-721)**
- **SFT (ERC-1155)**
- **EVM (Ethereum virtual machine)**
- **Metamask wallet**
- **ERC-20 token**

and with other tools for DAPP development such as **OpenZeppelin**, **Moralis**, **Alchemy**, **Hardhat** and so on.
Experience comes from two separate projects :

### NFT-provisioning

NFT-provisioning is a system for authoring, selling and exchanging Non Fungible Token (NFT) or Semi Fungible Token (SFT) on blockchain.
Some features of the product:
- Users can purchase NFTs even without having their own Wallet.
- TOKENs are compatible with external stores such as OpenSea and Rarible, ensuring their value even outside the original platform
- The portal is integrated with the **UniswapV3** exchange protocol to convert ETH with other ERC-20 coins on the fly
 
Within the blockchain, NFTs or SFTs are implemented through Smart-Contract (SC). The authoring part, done in JavaScript, allows the creation of metadata that is uploaded to IPFS, a decentralized file system with the property of immutability of uploaded data.
 
Blockchain interaction is triggered only when there is a need to interact with the user's wallet, essentially at the purchase stage, while the creation and sale of NFT/SFTs are performed on the backend side in **Kotlin**.
 
The wallet that bears the cost of using the blockchain, and the account used to create the token, are managed internally from the backend to the application, allowing the associated account to be shared with all users who can access the authoring part.
This allows for the user to not necessarily own a personal wallet, but to make use of any shared one. When purchasing the token, payment will be made to the latter wallet.

The sales part was based on the Wyvern protocol: an open source specification also adopted by the OpenSea platform. This protocol, which consists of several SCs, makes it possible to perform in a single atomic operation:
- verification
- purchase validity
- token ownership transactions
- payment in the indicated currency

In this case, we again made use of an opensea-js library for the javascript part, while for the kotlin part, a similar flow was recreated manually.
Currently, payment can be made in Ethereum or in a custom currency that follows the ERC-20 specification.

### Fanplanet

Fanplanet is a new platform-as-a-service that enables the purchase and enjoyment of digital and physical goods and services. It does this by using innovative technologies that leverage the benefits of Web3, such as **NFTs**. Holding a given NFT will allow one to own unique, collectible digital content that grants exclusive access to content, both digital and physical.
 
Fanplanet allows artists and content creators to receive funding directly from their fans without any OTT platform as intermediary, maximizing revenue and brand control.

In the past, the true value of a media was related to the scarcity of the object in numbers; a limited-edition record, a bootleg, or an autographed photo was highly coveted by fans. The shift to digital, with particular reference to audio and video streaming services made it impossible to create limited products for fans, at least until the arrival of NFTs.

Fanplanet goes beyond the concept of collecting, using rare digital items to unlock rare experiences. For example, one can view an exclusive video, get a digital fan ticket, or attend an exclusive concert in person. The platform enables many possibilities that can be determined by the marketing strategy and business plan of those who use the platform for their business.

## Contact us

If you are interested write to [info@skillbill.it](mailto:info@skillbill.it) for a private demo

