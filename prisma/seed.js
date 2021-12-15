const { PrismaClient } = require('@prisma/client')
const request = require('request');
const prisma = new PrismaClient()

const titles = ["Novice", "Assistant", "Senior", "Lead", "Manager", "Non-Worker", "Support", "Imposter"]
const locations = ["New York", "Chicago", "California"]
const departments = [{ name: "Pizza Crafters" }, { name: "Pizza Mages" }, { name: "Pizza Knights" }, { name: "Pizza Rogues" }, { name: "IT" }]


function doRequest() {
  return new Promise(function (resolve, reject) {

    request('https://randomuser.me/api/?results=30&seed=employees&inc=name,email,dob,picture&nat=US', { json: true }, (err, res, body) => {
      if (err) { return console.log(err); }
      userData = body.results.map((r) => {
        return ({
          name: r.name.first + ' ' + r.name.last,
          email: r.email,
          title: titles[Math.floor(Math.random() * 7)],
          location: locations[Math.floor(Math.random() * 2)],
          age: r.dob.age,
          picture: r.picture.medium,
          departmentId: Math.floor(Math.random() * 3) + 1
        })
      });
      resolve(userData);
    });



  })
}

async function main() {
  console.log(`Start seeding ...`)

  //Seed Department First
  for (const d of departments) {
    const department = await prisma.department.create({
      data: d,
    })
    console.log(`Created department with id: ${department.id}`)
  }

  let userData = await doRequest();

  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })