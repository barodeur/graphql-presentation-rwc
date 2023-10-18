import { join } from "path";
import { connectionPlugin, makeSchema } from "nexus";
import * as types from "./types";

export const schema = makeSchema({
  types,
  nonNullDefaults: {
    input: true,
    output: true,
  },
  outputs: {
    schema: join(__dirname, "../../schema.graphql"),
  },
  plugins: [connectionPlugin()],
  sourceTypes: {
    debug: true,
    modules: [
      {
        module: join(__dirname, "..", "db", "db.ts"),
        alias: "db",
      },
    ],
  },
});
