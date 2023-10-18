"use client";

import { Suspense, useState } from "react";

import { RelayEnvironmentProvider, useLazyLoadQuery } from "react-relay";
import { graphql } from "@/app/graphql";
import { relayEnvironment } from "./relayEnvironment";
import { pageQuery } from "./__generated__/pageQuery.graphql";
import { MatchListItem } from "./components/MatchListItem";
import { Match } from "./Match";

const query = graphql`
  query pageQuery {
    matches {
      id
      ...MatchListItem
    }
  }
`;

export function MatchList({
  onMatchClick,
}: {
  onMatchClick: (id: string) => unknown;
}) {
  const data = useLazyLoadQuery<pageQuery>(query, {});

  return (
    <ul>
      {data.matches.map((match) => (
        <MatchListItem
          key={match.id}
          match={match}
          onClick={() => onMatchClick(match.id)}
        />
      ))}
    </ul>
  );
}

export default function Home() {
  const [matchId, setMatchId] = useState<string | null>(null);

  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <h1>Match list</h1>
      <Suspense fallback={"Chargement..."}>
        <MatchList onMatchClick={setMatchId} />
      </Suspense>
      <hr />
      <Suspense fallback={"chargement des détails"}>
        {matchId !== null && <Match key={matchId} matchId={matchId} />}
      </Suspense>
    </RelayEnvironmentProvider>
  );
}
