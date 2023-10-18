/**
 * @generated SignedSource<<6a75dd8a1dc6e76ba9e2602e3bf81e89>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MatchListItem$data = {
  readonly expectedStartTime: any;
  readonly location: {
    readonly name: string;
  };
  readonly " $fragmentType": "MatchListItem";
};
export type MatchListItem$key = {
  readonly " $data"?: MatchListItem$data;
  readonly " $fragmentSpreads": FragmentRefs<"MatchListItem">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MatchListItem",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "expectedStartTime",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Location",
      "kind": "LinkedField",
      "name": "location",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Match",
  "abstractKey": null
};

(node as any).hash = "bebbd75eb19e83087bd8c3a9d0ab8521";

export default node;
