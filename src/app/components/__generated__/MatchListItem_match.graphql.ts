/**
 * @generated SignedSource<<0aeb553fdcf17f63a9e7cbfe4e3a2478>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MatchListItem_match$data = {
  readonly id: string;
  readonly " $fragmentType": "MatchListItem_match";
};
export type MatchListItem_match$key = {
  readonly " $data"?: MatchListItem_match$data;
  readonly " $fragmentSpreads": FragmentRefs<"MatchListItem_match">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MatchListItem_match",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Match",
  "abstractKey": null
};

(node as any).hash = "86a685523b1477d7ddda08dbf8d8260c";

export default node;
