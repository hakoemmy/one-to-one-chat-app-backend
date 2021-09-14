import httpStatus from "http-status";
import AuthService from "../services/AuthService";
import Response from "../helpers/Response";
import TokenAuthenticator from "../helpers/TokenAuthenticator";
import HashPassword from "../helpers/HashPassword";

/**
 * Auth controller
 */
class AuthController {

  /**
   * @param {object} req
   * @param {object} res
   * @returns {object} function to create new account for the provider
   */
  static async signup(req, res) {
    const newUser = await AuthService.signup(req);
    const { password, ...data } = newUser.dataValues;
    const token = TokenAuthenticator.tokenGenerator(data);
    data.token = token;
    Response.successMessage(
      res,
      "Account created successfully!",
      { token },
      httpStatus.CREATED
    );
  }

    /**
   * User can be able to log in
   * @description POST /api/auth/signin
   * @static
   * @param {object} req request object
   * @param {object} res response object
   * @returns {object} data
   */
  static async login(req, res) {
    const { result } = req;

    const { password: pwd, ...data } = result.dataValues;
    const token = TokenAuthenticator.signToken(data);
    return Response.successMessage(
      res,
      "Logged in successfully",
      { token },
      httpStatus.OK
    );
  }
}

export default AuthController;
