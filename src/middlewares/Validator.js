import { check, query, validationResult } from "express-validator";
import Response from "../helpers/Response";
import HttpStatus from "http-status-codes";

/**
 * @export
 * @class Validator
 */
class Validator {
  /**
   * Validate input
   * @static
   * @returns {object} error description OR return next middleware
   */
  static validateInput = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessage = errors.errors.map((err) => err.msg);
      return Response.errorMessage(res, errorMessage, HttpStatus.BAD_REQUEST);
    }
    return next();
  };
  /**
   * Validate consumer new account input
   * @static
   * @returns {object} errors
   */
  static signupRules() {
    return [
      check("username", "username name should be valid").trim().isString(),
      check("email", "email should be valid").trim().isEmail(),
      check(
        "password",
        "A valid password should have a character, number, UPPER CASE letter and a lower case letter and should be longer than 8"
      )
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i"),
    ];
  }

  /**
   * Validate input
   * @static
   * @returns {object} errors
   */
  static loginRules() {
    return [
      check("email", "email should be valid").trim().isEmail(),
      check("password", "Password should be valid").isString(),
    ];
  }

  /**
   * Validate input
   * @static
   * @returns {object} errors
   */
  static dmRules() {
    return [
      check("receiverId", "Receiver Id should be provided").trim().isString(),
      check("message", "Message should be valid").isString(),
    ];
  }
}

export default Validator;
