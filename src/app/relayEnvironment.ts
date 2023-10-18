import {
  Store,
  RecordSource,
  Environment,
  Network,
  Observable,
} from "relay-runtime";

function fetchFunction(params: any, variables: any) {
  const response = fetch("http://localhost:3000/api/graphql", {
    method: "POST",
    headers: [["Content-Type", "application/json"]],
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });

  return Observable.from(response.then((data) => data.json()));
}

function createEnvironment() {
  const network = Network.create(fetchFunction);
  const store = new Store(new RecordSource());
  return new Environment({ store, network });
}

export const relayEnvironment = createEnvironment();
