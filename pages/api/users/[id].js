import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
  const userId = req.query.id

  if (req.method === 'GET') {
    handleGET(userId, res)
  } else if (req.method === 'DELETE') {
    // handleDELETE(userId, res)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/user/:id
async function handleGET(userId, res) {
  const user = await prisma.user.findUnique({
    where: { id: Number(userId) }
  })
  res.json(user)
}
