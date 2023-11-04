import { getAllUsers, signup, getUserById, updateUser, deleteUser, login } from "../controllers/user-controller";
import express from express;

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.post('/signup',signup);
userRouter.get('/:id',getUserById);
userRouter.put('/id',updateUser);
userRouter.delete('/id',deleteUser);
userRouter.delete('/login',login);

export default userRouter;