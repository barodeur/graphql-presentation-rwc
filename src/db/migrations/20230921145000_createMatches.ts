import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>) {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`.execute(db);

  await db.schema
    .createTable("matches")
    .addColumn("id", "uuid", (col) =>
      col.primaryKey().defaultTo(sql`uuid_generate_v4()`),
    )
    .addColumn("expectedStartTime", "timestamp", (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<any>) {
  await db.schema.dropTable("matches").execute();
  await sql`DROP EXTENSION IF EXISTS "uuid-ossp"`.execute(db);
}
