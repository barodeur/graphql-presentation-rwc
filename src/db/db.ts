import { CamelCasePlugin, Kysely, PostgresDialect, Selectable } from "kysely";
import { Pool } from "pg";
import { LocationsTable } from "./tables/locations";
import { MatchesTable } from "./tables/matches";
import { PlayersTable } from "./tables/players";
import { TeamsTable } from "./tables/teams";

export interface Database {
  matches: MatchesTable;
  locations: LocationsTable;
  teams: TeamsTable;
  players: PlayersTable;
}

const dialect = new PostgresDialect({
  pool: new Pool({
    connectionString: "postgres://postgres:postgres@127.0.0.1:5432/rwc_dev",
  }),
});

export const db = new Kysely<Database>({
  dialect,
  plugins: [new CamelCasePlugin()],
  log(event) {
    if (event.level === "query") {
      console.log(event.query.sql, event.query.parameters);
    }
  },
});

export type Match = Selectable<MatchesTable>;
