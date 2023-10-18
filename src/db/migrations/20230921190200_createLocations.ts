import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>) {
  await db.schema
    .createTable("locations")
    .addColumn("id", "uuid", (col) =>
      col.primaryKey().defaultTo(sql`uuid_generate_v4()`),
    )
    .addColumn("name", "text", (col) => col.notNull())
    .execute();

  await db.schema
    .alterTable("matches")
    .addColumn("location_id", "uuid", (col) => col.references("locations.id"))
    .execute();
}

export async function down(db: Kysely<any>) {
  await db.schema.alterTable("matches").dropColumn("location_id").execute();
  await db.schema.dropTable("locations").execute();
}
