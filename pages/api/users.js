import prisma from '../../lib/prisma'

// GET api/users
// GET api/users?searchString=[searchString]
export default async function handle(req, res) {
  const { searchString } = req.query
  let users;
  // Determine if there is a searchString. If there is not, bring back all users
  if (searchString) {
    users = await prisma.user.findMany({
      where: {
        OR: [
          {
            title: { contains: searchString },
          },
          {
            location: { contains: searchString },
          },
          {
            department: { name: { contains: searchString } },
          },
          {
            name: { contains: searchString },
          },
        ],
      },
      include: {
        department: true
      }
    })
  }
  else {
    users = await prisma.user.findMany({
      include: {
        department: true
      }
    })
  }
  res.json(users)
}


