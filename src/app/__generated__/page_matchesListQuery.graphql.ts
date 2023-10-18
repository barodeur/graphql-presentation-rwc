/**
 * @generated SignedSource<<171e25a8e079f05bff9906ff2bd16f36>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type page_matchesListQuery$variables = {};
export type page_matchesListQuery$data = {
  readonly matches: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"MatchListItem_match">;
  }>;
};
export type page_matchesListQuery = {
  response: page_matchesListQuery$data;
  variables: page_matchesListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "page_matchesListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Match",
        "kind": "LinkedField",
        "name": "matches",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MatchListItem_match"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "page_matchesListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Match",
        "kind": "LinkedField",
        "name": "matches",
        "plural": true,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d9e2467b3ef14679079d915ea5084a9c",
    "id": null,
    "metadata": {},
    "name": "page_matchesListQuery",
    "operationKind": "query",
    "text": "query page_matchesListQuery {\n  matches {\n    id\n    ...MatchListItem_match\n  }\n}\n\nfragment MatchListItem_match on Match {\n  id\n}\n"
  }
};
})();

(node as any).hash = "6244dd9e37390d60e5debe1db578bbee";

export default node;
