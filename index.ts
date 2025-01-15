import { autoConnect } from "stepmania-lights";
import { Document, parse } from "@bgotink/kdl";
import { toJson } from "@bgotink/kdl/json";
import type { BunFile } from "bun";

const cfgPath: string = "./config.kdl";
const cfgFile: BunFile = Bun.file(cfgPath);
const cfgText: string = await cfgFile.text();
const config: Document = parse(cfgText);



