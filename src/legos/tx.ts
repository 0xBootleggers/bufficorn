import { POSTER_TAGS } from "@daohaus/utils";
import { buildMultiCallTX } from "@daohaus/tx-builder";
import { APP_CONTRACT } from "./contract";

export enum ProposalTypeIds {
  Signal = "SIGNAL",
  IssueSharesLoot = "ISSUE",
  AddShaman = "ADD_SHAMAN",
  TransferErc20 = "TRANSFER_ERC20",
  TransferNetworkToken = "TRANSFER_NETWORK_TOKEN",
  UpdateGovSettings = "UPDATE_GOV_SETTINGS",
  UpdateTokenSettings = "TOKEN_SETTINGS",
  TokensForShares = "TOKENS_FOR_SHARES",
  GuildKick = "GUILDKICK",
  WalletConnect = "WALLETCONNECT",
  InitVote = "INIT_VOTE",
}

export const APP_TX = {
  INIT_VOTE: buildMultiCallTX({
    id: "INIT_VOTE",
    JSONDetails: {
      type: "JSONDetails",
      jsonSchema: {
        title: `.formValues.title`,
        description: `.formValues.description`,
        contentURI: `.formValues.link`,
        contentURIType: { type: "static", value: "url" },
        proposalType: { type: "static", value: ProposalTypeIds.InitVote },
      },
    },
    actions: [
      {
        contract: APP_CONTRACT.POSTER,
        method: "post",
        args: [
          {
            type: "JSONDetails",
            jsonSchema: {
              title: `.formValues.title`,
              description: `.formValues.description`,
              contentURI: `.formValues.link`,
              contentURIType: { type: "static", value: "url" },
              proposalType: { type: "static", value: ProposalTypeIds.InitVote },
            },
          },
          { type: "static", value: POSTER_TAGS.signalProposal },
        ],
      },
    ],
  }),
};
