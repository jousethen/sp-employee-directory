import prisma from '../../../lib/prisma'

// POST /api/users/create
// Required fields in body: user object 
export default async function handle(req, res) {
  const user = req.body
  const result = await prisma.user.create({
    data: {
      name: user.name,
      email: user.email,
      title: user.title,
      location: user.location,
      age: parseInt(user.age),
      departmentId: user.departmentId
    },
  })
  res.json(result)
}