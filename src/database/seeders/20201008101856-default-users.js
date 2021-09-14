import { v4 as uuid } from "uuid";
import HashPassword from "../../helpers/HashPassword";

export default {
  up: queryInterface =>
    queryInterface.bulkInsert('users', [
      {
        id: uuid(),
        username: 'user1',
        email: 'user1@mail.com',
        password: HashPassword.hashPassword('user1'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuid(),
        username: 'user2',
        email: 'user2@mail.com',
        password: HashPassword.hashPassword('user2'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]),
  down: queryInterface => queryInterface.bulkDelete('users', null, {})
};
