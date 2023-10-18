/**
 * @generated SignedSource<<1477d66ebe20ac7ac23a7786a54eb6f2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MatchQuery$variables = {
  matchId: string;
};
export type MatchQuery$data = {
  readonly match: {
    readonly " $fragmentSpreads": FragmentRefs<"MatchListItem">;
  } | null;
};
export type MatchQuery = {
  response: MatchQuery$data;
  variables: MatchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "matchId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "matchId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MatchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Match",
        "kind": "LinkedField",
        "name": "match",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MatchListItem"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MatchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Match",
        "kind": "LinkedField",
        "name": "match",
        "plural": false,
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
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "68cd3f0bb8259cb2e8bae590adce62c6",
    "id": null,
    "metadata": {},
    "name": "MatchQuery",
    "operationKind": "query",
    "text": "query MatchQuery(\n  $matchId: ID!\n) {\n  match(id: $matchId) {\n    ...MatchListItem\n    id\n  }\n}\n\nfragment MatchListItem on Match {\n  expectedStartTime\n  location {\n    name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "221f1b529f07663d359c36a0b162b300";

export default node;
