exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'optimy',
      age: 22,
      email: 'optimizion@gmail.com'
    })
  }
}