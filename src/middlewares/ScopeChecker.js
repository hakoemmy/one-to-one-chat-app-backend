import Response from "../helpers/Response";
import HttpStatus from "http-status-codes";
import moment from 'moment';
import {
  users,
  categories,
  membership_plans,
  brands,
  catalogs,
  items,
  purchases,
  coupons,
  payment_methods,
  catalog_types
} from "../database/models";
import TokenAuthenticator from "../helpers/TokenAuthenticator";

/**
 * Checking if account already exists in the database
 * @static
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Function} next next function
 * @returns {Object} returns an error message if an email account has been already taken
 */
export const accountExist = async (req, res, next) => {
  const { email } = req.body;
  const user = await users.findOne({ where: { email } });
  if (user) {
    return Response.errorMessage(
      res,
      "Email address already exists",
      HttpStatus.CONFLICT
    );
  }
  next();
};

/**
 * reset user existance middleware
 * @static
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Function} next next function
 * @returns {Object} returns an error response error exists in the required
 */
export const userExist = async (req, res, next) => {
  const { email } = req.body;
  const user = await users.findOne({ where: { email } });
  if (!user) {
    return Response.errorMessage(
      res,
      "User with this email does not exist",
      HttpStatus.NOT_FOUND
    );
  }
  req.user = user;
  next();
};
