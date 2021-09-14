import httpStatus from "http-status";
import DmService from "../services/DmService";
import Response from "../helpers/Response";

/**
 * DmController
 */
class DmController {

  /**
   * @param {object} req
   * @param {object} res
   * @returns {object} function to create new dm
   */
  static async createDm(req, res) {
    const newDM = await DmService.createNewDm(req);
    Response.successMessage(
      res,
      "DM created successfully!",
      newDM,
      httpStatus.CREATED
    );
  }
}

export default DmController;
