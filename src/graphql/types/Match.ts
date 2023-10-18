import { inputObjectType, list, nullable, objectType, queryField } from "nexus";
import DataLoader from "dataloader";
import { SelectQueryBuilder } from "kysely";
import { db } from "@/db";
import { Database } from "@/db/db";
import { Context } from "../context";
import { resolveLocationssWhereInputType } from "./Location";

export const Match = objectType({
  name: "Match",
  definition(t) {
    t.field("id", { type: "ID" });
    t.field("expectedStartTime", { type: "DateTime" });
    t.field("location", {
      type: "Location",
      complexity: 10,
      resolve({ locationId }, _, ctx: Context) {
        return ctx.loaders.matches.load(locationId);
      },
    });
  },
});

export const MatchWhereInput = inputObjectType({
  name: "MatchWhereInput",
  definition(t) {
    t.field("location", { type: "LocationWhereInput" });
  },
});

function resolveMatchesWhereInputType<T>(
  query: SelectQueryBuilder<Database, "matches", T>,
  where: any,
) {}

export const matchesQueryField = queryField("matches", {
  type: list("Match"),
  args: {
    where: nullable("MatchWhereInput"),
  },
  async resolve(_: unknown, { where }: { where: any }, ctx: Context) {
    let matchesQuery = resolveMatchesWhereInputType(
      ctx.db.selectFrom("matches").selectAll("matches").limit(10),
      where,
    );

    if (where.location) {
      matchesQuery = matchesQuery.where(
        "locationId",
        "=",
        resolveLocationssWhereInputType(
          db.selectFrom("locations").select("id"),
          where.location,
        ),
      );
    }

    return matches.execute();
  },
});

export const matchQueryField = queryField("match", {
  type: nullable("Match"),
  args: {
    id: "ID",
  },
  async resolve(_: unknown, { id }: { id: string }, ctx: Context) {
    const match = await ctx.db
      .selectFrom("matches")
      .selectAll("matches")
      .where("id", "=", id)
      .limit(1)
      .executeTakeFirst();

    return match;
  },
});
