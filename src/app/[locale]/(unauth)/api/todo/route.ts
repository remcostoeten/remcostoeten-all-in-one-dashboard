import { eq, sql } from "drizzle-orm";
import { NextResponse } from "next/server";
import { db } from "@/libs/DB";
import { logger } from "@/libs/Logger";
import {
  CompleteTodoValidation,
  DeleteTodoValidation,
  EditTodoValidation,
  TodoValidation,
} from "@/validations/TodoValidation";
import { todoSchema } from "@/core/db-models";

export const POST = async (request: Request) => {
  const json = await request.json();
  const parse = TodoValidation.safeParse(json);

  if (!parse.success) {
    return NextResponse.json(parse.error.format(), { status: 422 });
  }

  try {
    const todo = await db.insert(todoSchema).values(parse.data).returning();

    logger.info("A new todo has been created");

    return NextResponse.json({
      id: todo[0]?.id,
    });
  } catch (error) {
    logger.error(error, "An error occurred while creating a todo");

    return NextResponse.json({}, { status: 500 });
  }
};

export const PUT = async (request: Request) => {
  const json = await request.json();
  const parse = EditTodoValidation.safeParse(json);

  if (!parse.success) {
    return NextResponse.json(parse.error.format(), { status: 422 });
  }

  try {
    await db
      .update(todoSchema)
      .set({
        ...parse.data,
        completed: parse.data.completed ? 1 : 0, // convert boolean to number
        updatedAt: sql`(strftime('%s', 'now'))`,
      })
      .where(eq(todoSchema.id, parse.data.id))
      .run();

    logger.info("A todo has been updated");

    return NextResponse.json({});
  } catch (error) {
    logger.error(error, "An error occurred while updating a todo");

    return NextResponse.json({}, { status: 500 });
  }
};

export const DELETE = async (request: Request) => {
  const json = await request.json();
  const parse = DeleteTodoValidation.safeParse(json);

  if (!parse.success) {
    return NextResponse.json(parse.error.format(), { status: 422 });
  }

  try {
    await db.delete(todoSchema).where(eq(todoSchema.id, parse.data.id)).run();

    logger.info("A todo has been deleted");
    console.log("A todo has been deleted");

    return NextResponse.json({});
  } catch (error) {
    logger.error(error, "An error occurred while deleting a todo");

    return NextResponse.json({}, { status: 500 });
  }
};

export const PATCH = async (request: Request) => {
  const json = await request.json();
  const parse = CompleteTodoValidation.safeParse(json);

  if (!parse.success) {
    return NextResponse.json(parse.error.format(), { status: 422 });
  }

  try {
    await db
      .update(todoSchema)
      .set({
        completed: 1,
        updatedAt: sql`(strftime('%s', 'now'))`,
      })
      .where(eq(todoSchema.id, parse.data.id))
      .run();

    logger.info("A todo has been marked as completed");

    return NextResponse.json({});
  } catch (error) {
    logger.error(error, "An error occurred while marking a todo as completed");

    return NextResponse.json({}, { status: 500 });
  }
};
