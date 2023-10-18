import { graphql, useLazyLoadQuery } from "react-relay";
import { MatchQuery } from "./__generated__/MatchQuery.graphql";
import { MatchListItem } from "./components/MatchListItem";

const query = graphql`
  query MatchQuery($matchId: ID!) {
    match(id: $matchId) {
      ...MatchListItem
    }
  }
`;

export function Match({ matchId }: { matchId: string }) {
  const data = useLazyLoadQuery<MatchQuery>(query, { matchId });

  return (
    <div>
      {data.match && <MatchListItem match={data.match} onClick={() => {}} />}
    </div>
  );
}
