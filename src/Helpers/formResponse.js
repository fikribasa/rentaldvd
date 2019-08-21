module.exports = {
  success: (res, status, result) => {
    const formResponse = {
      status,
      result
    };
    res.json(formResponse);
  }
};
