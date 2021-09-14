import { users } from "../database/models";
import Queries from "../services/Queries";
import TokenAuthenticator from "../helpers/TokenAuthenticator";
import Response from "../helpers/Response";
import HttpStatus from "http-status-codes";

const isUserExist = async (req, res, next) => {
  try {
    const token =
      req.header("x-auth-token") ||
      req.params["x-auth-token"] ||
      req.params["token"] ||
      req.query["token"];
    if (!token) {
      return Response.errorMessage(
        res,
        "No token found!",
        HttpStatus.NOT_FOUND
      );
    }
    const payload = TokenAuthenticator.decodeToken(token);
    const { name } = payload;
    if (name === "JsonWebTokenError") {
      return Response.errorMessage(
        res,
        "Unauthorized, invalid token",
        HttpStatus.UNAUTHORIZED
      );
    }

    if (name === "TokenExpiredError") {
      return Response.errorMessage(
        res,
        "Unauthorized access, your session has expired. Kindly login again.",
        HttpStatus.UNAUTHORIZED
      );
    }

    const validUser = await Queries.findOne(users, {
      where: {
        id: payload.id,
      },
    });
    if (!validUser) {
      return Response.errorMessage(
        res,
        "You' re not authorized! Please create an account with us.",
        HttpStatus.UNAUTHORIZED
      );
    }
    req.user = validUser.dataValues;
    req.token = token;
    next();
  } catch (error) {
    return Response.errorMessage(
      res,
      "Your request couldn\'t go through. Please logout and login again. Incase it persists, please reachout to us for help.",
      HttpStatus.INTERNAL_SERVER_ERROR
    );
  }
};
export default isUserExist;
