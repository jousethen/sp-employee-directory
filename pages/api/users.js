import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  const { searchString } = req.query
  console.log(searchString)

  let users;
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
        ],
      },
    })
  }
  else {
    users = await prisma.user.findMany()
  }
  res.json(users)
}
