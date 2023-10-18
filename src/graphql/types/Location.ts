import { inputObjectType, objectType } from "nexus";
import { SelectQueryBuilder } from "kysely";
import { Database } from "@/db/db";

export function resolveLocationssWhereInputType<T>(
  query: SelectQueryBuilder<Database, "locations", T>,
  where: any,
) {}

export const MatchWhereInput = inputObjectType({
  name: "MatchWhereInput",
  definition(t) {
    t.field("id", { type: "IDFilterType" });
  },
});

type MatchWhereInputType = {
  id: IDFIlterType;
};

export const Location = objectType({
  name: "Location",
  definition(t) {
    t.field("id", { type: "ID" });
    t.field("name", { type: "String" });
  },
});
