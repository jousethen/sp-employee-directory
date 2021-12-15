import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  const { searchString } = req.query
  console.log(searchString)
  const users = await prisma.user.findMany({
    where: {
      OR: [
        {
          title: { contains: searchString },
        },
        {
          location: { contains: searchString },
        },
      ],
    },
  })
  res.json(users)
}
