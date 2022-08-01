const jwt = require("jsonwebtoken");

const createToken = (people, expiresIn) => {
  const token = jwt.sign(
    { people_id: people.people_id, email: people.email },
    "bbmp",
    {
      expiresIn: expiresIn,
    }
  );
  return token;
};

module.exports = createToken;
