import { NextResponse } from "next/server";
import { db } from "@/db";

export async function GET() {
  const matches = await db.selectFrom("matches").selectAll().execute();

  return NextResponse.json(matches);
}
