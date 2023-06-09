---
###### tags: `bufficorn`
---

# Bufficorn DAO App Docs

## Proposals

Description of various types of proposals implemented for Bufficorn DAO [App](https://bison-narwhal.vercel.app/).

<!--
Some proposals have `As Is` and `Potential Enhancements` headings to explain current functionality and inspire ways to increase automation or add features.
-->

## Notes

Previous proposals will not contain updates.

### Modal

![new-proposal](https://github.com/0xBootleggers/bufficorn/assets/522182/10f92e63-27b1-4f34-816e-d8f7ddf80151)

### Initiate Vote

Proposal for DAO voting signal. No transactions are executed.

- title: "Initiate Vote"
- subtitle: "Signal Proposal"
- description: "Ratify vote with an on-chain signal."

![initiate-form](https://github.com/0xBootleggers/bufficorn/assets/522182/98fa1420-7efe-4e97-ba44-05f68ec56713)

![initiate-list](https://github.com/0xBootleggers/bufficorn/assets/522182/3ea576c5-c4c6-4340-aef8-c6f2c0ecc477)

![initiate-details](https://github.com/0xBootleggers/bufficorn/assets/522182/199e82c1-7f6d-44d3-bd0b-1ba317c8a9f6)

### Fund Company

Proposal transfers ERC-20 tokens from DAO treasury.

- title: 'Fund Company'
- subtitle: 'Funding Proposal'
- description: 'Send ERC-20 tokens from the Treasury.'

![fund-form](https://github.com/0xBootleggers/bufficorn/assets/522182/baee8fe6-f00a-440e-9b38-e88871a8f4d1)

![fund-list](https://github.com/0xBootleggers/bufficorn/assets/522182/da23bbbe-51e9-464f-b68c-ab36324d5871)

![fund-details](https://github.com/0xBootleggers/bufficorn/assets/522182/35cac0e8-bddd-430d-b58e-df6d242e92ac)

### Become Partner

Proposal issues voting and/or non-voting tokens from the DAO. This proposal allows new partners to add themselves to the DAO by requesting voting or non-voting tokens in exchange for ERC-20 tribute tokens.

- title: 'Become Partner',
- subtitle: 'Partner Proposal'
- description: 'Request BVSTK or BVSTK-LOOT tokens in exchange for ERC-20 tokens.'

![become-form](https://github.com/0xBootleggers/bufficorn/assets/522182/d875038c-706c-4d14-abb2-f56c4b483c20)

![become-list](https://github.com/0xBootleggers/bufficorn/assets/522182/94cc8cf9-4ff9-4aba-889f-0b6f0b9c90e9)

![become-details](https://github.com/0xBootleggers/bufficorn/assets/522182/cad4473c-f304-4dd0-b9ce-9ffcb952ef98)

### Add Partner

Proposal issues voting and/or non-voting tokens from the DAO. This proposal is for internal operations adding partners that provided funds outside of the propsal process.

- title: 'Add Partner',
- subtitle: 'Partner Proposal',
- description: 'Send BVSTK or BVSTK-LOOT tokens.',

![add-form](https://github.com/0xBootleggers/bufficorn/assets/522182/ad5e559b-ab7f-4383-a150-f791cb216a7c)

![add-list](https://github.com/0xBootleggers/bufficorn/assets/522182/e5feaafe-17fc-49e5-b1b7-b8f3ad901d24)

![add-details](https://github.com/0xBootleggers/bufficorn/assets/522182/ddfcc3b0-e18f-440f-b246-090e5bea149d)

## Potential Enhancements

Additional design and functional enhancements are possible on a project basis or monthly retainer for bug fixes and change requests.

### Custom Branding

This app uses the [@daohaus/ui](https://www.npmjs.com/package/@daohaus/ui) component library and remains visually consistent with the current version of the [DAOhaus Admin](https://admin.daohaus.club/) app. It is possible to brand this app to the styles and user expereince of Bufficorn Ventures.

### Adding Safes

Right now all proposals are related to Treasury. Could improve operations by have seperate safes for various functions.

### Adding Forms

We have implemented the basic forms required for onboarding partners and funding companies. Could increase transparency of operations by adding additional proposals to other common tasks in the DAO or summon other sub-daos for operations and marketing functions. Proposals to the Bufficorn Ventures DAO would then only be needed for providing the budget to those functions.

### Safe App

[Create](https://docs.safe.global/learn/safe-apps/get-started) and release an official BV DAO App available natively within Gnosis Safe.

#### Roles

It is possible to add some interesting features and flows only visible to people with certain roles. For this app we have hidden content from users who are not members of the DAO. Getting more granualar with what is visible and tailoring expereinces for different roles would provides a unique experience.

#### Charmverse Integrations

It is possible to explore adding integrations with the [Charmverse API](https://app.charmverse.io/api-docs) to help consolidate Bufficorn Ventures tools into a central location.

#### [DocuSign Connect](https://developers.docusign.com/platform/webhooks/connect/)

It is possible to implement a webhook service enabling updates when specific triggering events occur in the DocuSign eSignature workflows.

#### Companies Page

It is possible to add a page to the DAO with information related to and features designed for portfolio companies.

#### Platform for Investment DAOs

Combining Bufficorn Ventures network and experience with venture DAOs with DAOhaus v3 technology presents an opportunity for building a platform tailored to investor use cases. Creating an application designed for investment communities is an exciting application of this technology.

#### ETHDenver CRM

The Bootleggers team has also built a custom Web3 CRM for RaidGuild. It would be possible to cusomize this technology to build a CRM for ETHDenver.
