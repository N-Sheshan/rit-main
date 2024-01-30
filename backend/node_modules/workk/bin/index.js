#! /usr/bin/env node
import print from "./print.js";
import { betterAsync } from "./utils.js";
import { workhour } from "./template.js";
import { getWorkHourData } from "./request.js";

const [err, res] = await betterAsync(getWorkHourData());

if (err) {
  process.stdout.write("ERROR ==> \n");
  process.stdout.write(JSON.stringify(err));
} else {
  print(workhour, res);
}
