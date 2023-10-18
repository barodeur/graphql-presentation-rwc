import DataLoader from "dataloader";
import { Kysely } from "kysely";
import { Database } from "@/db/db";

export function createLoaders(db: Kysely<Database>) {
  return {
    matches: new DataLoader(async (ids: readonly string[]) => {
      const locations = await db
        .selectFrom("locations")
        .selectAll("locations")
        .where("id", "in", ids)
        .execute();

      return ids.map((id) => locations.find((location) => location.id === id));
    }),
  };
}
