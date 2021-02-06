import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  return res.json({ ok: "ok" });
});

export = router;
