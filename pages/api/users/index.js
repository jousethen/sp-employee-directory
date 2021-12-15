import prisma from '../../../lib/prisma'

// POST /api/user
// Required fields in body: user object 
export default async function handle(req, res) {
  const { user } = req.body
  const result = await prisma.post.create({
    data: {
      user
    },
  })
  res.json(result)
}