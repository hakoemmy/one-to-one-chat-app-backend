/**
 * @exports
 * @class TimeConverter
 */
class TimeConverter {
  /**
   * @static
   * @param {object} res response object
   * @param {string} message a specific message
   * @param {array} data array or object
   * @param {integer} status status code
   * @returns {object} object
   */

  static getDateData(theDate, theTime) {
    let dateParts = theDate.split("-");
    let timeParts = theTime.split(":");
    let theDay = dateParts[2];
    let theMonth = dateParts[1];
    let theYear = dateParts[0];
    let theHours = timeParts[0];
    let theMinutes = timeParts[1];
    let dateTimeObject = new Date(
      theYear,
      theMonth,
      theDay,
      theHours,
      theMinutes,
      0
    );
    let dateTimeObjectMillis = dateTimeObject.getTime();
    let dateTimeObjectMinutes = dateTimeObjectMillis / (1000 * 60);
    return dateTimeObjectMinutes;
  }
  static convertToMinutes(theStartDate, theStartTime, theEndDate, theEndTime) {
    const startMinutes = this.getDateData(theStartDate, theStartTime);
    const endMinutes = this.getDateData(theEndDate, theEndTime);
    const timeDiff = endMinutes - startMinutes; 

    return timeDiff;
  }
}

export default TimeConverter;
