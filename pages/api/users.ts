
import type { NextApiRequest, NextApiResponse } from 'next'
import { authOptions } from './auth/[...nextauth]'
import { unstable_getServerSession } from "next-auth/next"
import prisma from "../../lib/prismadb"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const session = await unstable_getServerSession(req, res, authOptions)
  if (!session) {
    res.status(401).json({ message: "You must be logged in." });
    return;
  }

  const list = await prisma.user.findMany();

  res.status(200).json(list)
}
