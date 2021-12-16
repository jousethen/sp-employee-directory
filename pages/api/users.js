import prisma from '../../lib/prisma'

// GET api/users
// GET api/users?searchString=[searchString]
export default async function handle(req, res) {
  console.log(res)
  const { searchString } = req.query
  if (req.method === 'GET') {
    handleGET(searchString, res)
  } else if (req.method === 'POST') {
    handlePOST(res)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/users/:id
async function handleGET(searchString, res) {
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

// POST /api/users
//Body has to a user object
async function handlePOST(res) {
  const { user } = req.body
  const result = await prisma.user.create({
    data: {
      user
    },
  })
  res.json(result)
}


