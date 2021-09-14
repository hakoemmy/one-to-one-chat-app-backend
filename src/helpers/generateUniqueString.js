/**
   * Reusable method to generate Unique string
   * @returns {string} Unique string basing on the timestamp of the machine
   */
  const generateUniqueString = () => {
    let timestamp = String(new Date().getTime());
    let someNumbers = 0;
    let output = '';

   for (someNumbers = 0; someNumbers < timestamp.length; someNumbers += 2) {
      output  += Number(timestamp.substr(someNumbers, 2)).toString(36);
    }

    return (output);
  };
  export default generateUniqueString;