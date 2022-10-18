import jwt from "jsonwebtoken";

const createToken = (people: any, expiresIn: string | number) => {
  const token = jwt.sign(
    { people_id: people.people_id, email: people.email },
    "token_secret",
    {
      expiresIn: expiresIn,
    }
  );
  return token;
};

export default createToken;
