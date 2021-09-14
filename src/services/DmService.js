import { v4 as uuid } from "uuid";
import { dms } from "../database/models";
import Queries from "./Queries";

class DmService {
  /**
   * New DM creation method
   * @static
   * @param {object} req  request object
   * @memberof DmService
   * @returns {object} data
   */
  static async createNewDm(req) {
    const { user: { id }} = req;
    const { receiverId, message } = req.body;
    const newDmObject = {
      id: uuid(),
      creatorId: id,
      senderId: id,
      receiverId,
      message
    };
    const newDm = await Queries.create(dms, newDmObject);
    return newDm;
  }

  


}
export default DmService;
