/**
 * @generated SignedSource<<a35e7344e2c74a857822ecbf1968507c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type MatchDetailsQuery$variables = {
  id: string;
};
export type MatchDetailsQuery$data = {
  readonly match: {
    readonly id: string;
  };
};
export type MatchDetailsQuery = {
  response: MatchDetailsQuery$data;
  variables: MatchDetailsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Match",
    "kind": "LinkedField",
    "name": "match",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MatchDetailsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MatchDetailsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "45ea6013c3af3578edc65478929f0bf7",
    "id": null,
    "metadata": {},
    "name": "MatchDetailsQuery",
    "operationKind": "query",
    "text": "query MatchDetailsQuery(\n  $id: ID!\n) {\n  match(id: $id) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "759e96a2ae9af922f66f43d5ecd64cb5";

export default node;
