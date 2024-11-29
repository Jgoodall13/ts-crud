import { Router, Request, Response } from "express";

const router = Router();

router.get("/hello", (req: Request, res: Response) => {
  res.send("Hello from the /hello route!");
});

export default router;
