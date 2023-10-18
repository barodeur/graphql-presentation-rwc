import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } },
) {
  const match = await db
    .selectFrom("matches")
    .selectAll()
    .where("id", "=", params.id)
    .executeTakeFirstOrThrow();

  return NextResponse.json(match);
}
