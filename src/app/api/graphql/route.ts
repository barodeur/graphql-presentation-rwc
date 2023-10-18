import { NextRequest, NextResponse } from "next/server";
import { graphql } from "graphql";
import { schema } from "@/graphql";
import { db } from "@/db";
import { createLoaders } from "@/graphql/createLoaders";

export async function POST(req: NextRequest) {
  const { query, variables } = await req.json();

  const res = await graphql({
    schema,
    source: query,
    variableValues: variables,
    contextValue: {
      db,
      loaders: createLoaders(db),
    },
  });

  return NextResponse.json(res);
}
