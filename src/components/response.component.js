
module.exports = {

  async errorValidation(error, callback) {
    const messagesError = [];
    error.details.forEach((value) => {
      messagesError.push(value.message);
    });
    console.error(error);
    const result = JSON.stringify(
      {
        payload: {
          message: "Error de validación",
          details: messagesError
        }
      }, null, 2);

    callback(null, {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: result
    });
  },

  async success(data, callback) {
    const result = JSON.stringify({
      payload: {
        data
      }
    }, null, 2);

    callback(null, {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: result
    });
  },

  async response(data, status, callback) {
    const result = JSON.stringify({
      payload: {
        data
      }
    }, null, 2);

    callback(null, {
      statusCode: status,
      headers: { 'Content-Type': 'application/json' },
      body: result
    });
  },
}
