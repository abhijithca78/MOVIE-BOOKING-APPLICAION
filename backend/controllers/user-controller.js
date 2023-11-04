import User from "../models/User";

export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = User.Users.find();
  } catch (err) {
    return next(err);
  }
  if (!users) {
    return res.status(500).json({ message: "unexpexted error occured" });
  }
  return res.status(200).json({ users });
};
