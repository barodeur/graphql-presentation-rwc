import { graphql, useFragment } from "@/app/graphql";
import { MatchListItem$key } from "./__generated__/MatchListItem.graphql";

const fragments = {
  match: graphql`
    fragment MatchListItem on Match {
      expectedStartTime
      location {
        name
      }
    }
  `,
};

export function MatchListItem({
  match,
  onClick,
}: {
  match: MatchListItem$key;
  onClick: () => unknown;
}) {
  const data = useFragment(fragments.match, match);

  return (
    <button onClick={onClick}>
      {new Date(data.expectedStartTime).toLocaleString()} - {data.location.name}
    </button>
  );
}
