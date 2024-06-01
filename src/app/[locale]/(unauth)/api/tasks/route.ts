import { eq, sql } from 'drizzle-orm';
import { NextResponse } from 'next/server';

import { db } from '@/libs/DB';
import { logger } from '@/libs/Logger';
import { taskSchema } from '@/models/Schema';
import { DeleteTaskValidation, EditTaskValidation, TaskValidation } from '@/validations/TaskValidation';

export const POST = async (request: Request) => {
  const json = await request.json();
  const parse = TaskValidation.safeParse(json);

  if (!parse.success) {
    return NextResponse.json(parse.error.format(), { status: 422 });
  }

  try {
    const task = await db
      .insert(taskSchema)
      .values({
        ...parse.data,
        completed: parse.data.completed ? 1 : 0, // Convert boolean to integer
      })
      .returning();

    logger.info('A new task has been created');

    return NextResponse.json({
      id: task[0]?.id,
    });
  } catch (error) {
    logger.error(error, 'An error occurred while creating a task');

    return NextResponse.json({}, { status: 500 });
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

    logger.info('A task entry has been updated');

    return NextResponse.json({});
  } catch (error) {
    logger.error(error, 'An error occurred while updating a task');

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
    await db
      .delete(taskSchema)
      .where(eq(taskSchema.id, parse.data.id))
      .run();

    logger.info('A task entry has been deleted');

    return NextResponse.json({});
  } catch (error) {
    logger.error(error, 'An error occurred while deleting a task');

    return NextResponse.json({}, { status: 500 });
  }
};