import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  const users = await prisma.user.findMany()
  res.json(users)
}
