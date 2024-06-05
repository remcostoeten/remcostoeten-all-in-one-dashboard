import { eq, sql } from "drizzle-orm";
import { NextResponse } from "next/server";
import { db } from "@/libs/DB";
import { logger } from "@/libs/Logger";
import { taskSchema } from "@/models/Schema";
import {
  DeleteTaskValidation,
  EditTaskValidation,
  TaskValidation,
} from "@/validations/TaskValidation";

function isErrorWithMessage(error: unknown): error is Error {
  return typeof error === 'object' && error !== null && 'message' in error;
}

export const POST = async (request: Request) => {
  const json = await request.json();
  console.log("Received data:", json);
  const parse = TaskValidation.safeParse(json);

  if (!parse.success) {
    console.log("Validation failed:", parse.error.format());
    return NextResponse.json(parse.error.format(), { status: 422 });
  }

  try {
    const task = await db
      .insert(taskSchema)
      .values({
        ...parse.data,
        completed: 0,
        createdAt: sql`(strftime('%s', 'now'))`,
        updatedAt: sql`(strftime('%s', 'now'))`,
      })
      .returning();

    logger.info("A new task has been created");
      
    return NextResponse.json({
      id: task[0]?.id,
    });
  } catch (error) {
    logger.error(error, "An error occurred while creating a task");
    return NextResponse.json({}, { status: 500 });
    // if (isErrorWithMessage(error) && error.message === "Unauthorized") {
    //   logger.error("Unauthorized access attempt", error);
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }
    // logger.error(error, "An error occurred while creating a task");
    // return NextResponse.json({}, { status: 500 });
  }
};

export const PUT = async (request: Request) => {
  const json = await request.json();
  const parse = EditTaskValidation.safeParse(json);

  if (!parse.success) {
    return NextResponse.json(parse.error.format(), { status: 422 });
  }

  try {
    await db
      .update(taskSchema)
      .set({
        ...parse.data,
        completed: parse.data.completed ? 1 : 0, // Convert boolean to integer
        updatedAt: sql`(strftime('%s', 'now'))`,
      })
      .where(eq(taskSchema.id, parse.data.id))
      .run();

    logger.info("A task entry has been updated");

    return NextResponse.json({});
  } catch (error) {
    if (isErrorWithMessage(error) && error.message === "Unauthorized") {
      logger.error("Unauthorized access attempt", error);
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    logger.error(error, "An error occurred while updating a task");
    return NextResponse.json({}, { status: 500 });
  }
};

export const DELETE = async (request: Request) => {
  const json = await request.json();
  const parse = DeleteTaskValidation.safeParse(json);

  if (!parse.success) {
    return NextResponse.json(parse.error.format(), { status: 422 });
  }

  try {
    await db.delete(taskSchema).where(eq(taskSchema.id, parse.data.id)).run();

    logger.info("A task entry has been deleted");

    return NextResponse.json({});
  } catch (error) {
    if (isErrorWithMessage(error) && error.message === "Unauthorized") {
      logger.error("Unauthorized access attempt", error);
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    logger.error(error, "An error occurred while deleting a task");
    return NextResponse.json({}, { status: 500 });
  }
};