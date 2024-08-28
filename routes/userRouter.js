import express from "express";
import { getAllAuthors, getMyProfile, login, logout, register, subscribeNewsletter } from "../controllers/userController.js";
import { isAuthenticated, isAuthorized } from "../middlewares/auth.js"

  const router = express.Router();

  router.post("/register", register);
  router.post("/login", login);
  router.get("/logout", isAuthenticated, logout);
  router.get("/mypro", isAuthenticated, getMyProfile);
  router.get("/authors", getAllAuthors);
  router.post("/subscribe", subscribeNewsletter);





  export default router;