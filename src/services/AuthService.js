import { v4 as uuid } from "uuid";
import { users } from "../database/models";
import Queries from "./Queries";
import HashPassword from "../helpers/HashPassword";

class AuthService {
  /**
   * New account creation method
   * @static
   * @param {object} req  request object
   * @memberof AuthService
   * @returns {object} data
   */
  static async signup(req) {
    const { username, email, password } = req.body;
    const hashedPassword = HashPassword.hashPassword(password);
    const newUserObject = {
      id: uuid(),
      username,
      email,
      password: hashedPassword
    };
    const newUser = await Queries.create(users, newUserObject);
    return newUser;
  }

  


}
export default AuthService;
