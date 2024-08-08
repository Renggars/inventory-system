const faker = require("faker");
const prisma = require("../../prisma");
const { v4 } = require("uuid");

const userOne = {
  id: v4(),
  name: faker.name.findName(),
  email: faker.internet.email().toLowerCase(),
  password,
  role: "user",
  isEmailVerified: false,
};

const userTwo = {
  id: v4(),
  name: faker.name.findName(),
  email: faker.internet.email().toLowerCase(),
  password,
  role: "user",
  isEmailVerified: false,
};

const admin = {
  id: v4(),
  name: faker.name.findName(),
  email: faker.internet.email().toLowerCase(),
  password,
  role: "admin",
  isEmailVerified: false,
};

const newUser = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: "Password1",
};

const insertUsers = async (users) => {
  users = users.map((user) => ({ ...user, password: hashedPassword }));
  await prisma.user.createMany({
    data: users,
    skipDuplicates: true,
  });
};

module.exports = {
  userOne,
  userTwo,
  admin,
  newUser,
  insertUsers,
};