import { scalarType } from "nexus";

export const DateTime = scalarType({
  name: "DateTime",
  asNexusMethod: "dateTime",
  description: "Date custom scalar type",
  parseValue(value) {
    return new Date(String(value));
  },
  serialize(value) {
    return (value as Date).toISOString();
  },
});
