import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { jobHireValidationSchema } from 'validationSchema/job-hires';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getJobHires();
    case 'POST':
      return createJobHire();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getJobHires() {
    const data = await prisma.job_hire
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'job_hire'));
    return res.status(200).json(data);
  }

  async function createJobHire() {
    await jobHireValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.blog?.length > 0) {
      const create_blog = body.blog;
      body.blog = {
        create: create_blog,
      };
    } else {
      delete body.blog;
    }
    if (body?.project?.length > 0) {
      const create_project = body.project;
      body.project = {
        create: create_project,
      };
    } else {
      delete body.project;
    }
    const data = await prisma.job_hire.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
