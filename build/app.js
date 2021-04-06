"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.get("/", (req, res) => { res.send("hello world"); });
app.post("/", (req, res) => {
    const name = req.body.name;
    res.send(`Hello ${name}`);
});
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Hello app listening at http://localhost:${port}`));
