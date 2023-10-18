import { db } from "@/db";
import { createLoaders } from "./createLoaders";

export interface Context {
  db: typeof db;
  loaders: ReturnType<typeof createLoaders>;
}
