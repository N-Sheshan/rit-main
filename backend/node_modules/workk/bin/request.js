import axios from "axios";
import * as cheerio from "cheerio";
import { betterAsync } from "./utils.js";

/**
 * 获取工作时间信息
 * @return {Promise}
 */
export const getWorkHourData = async () => {
  const url = "https://cn.bing.com/search?q=%E6%97%A5%E5%8E%86";
  const [err, res] = await betterAsync(axios.get(url));
  if (err || res.status !== 200 || !res.data) return Promise.reject({ msg: "请求失败", err, res });
  const $ = cheerio.load(res.data);
  const els = $(".rcld_cell[data-isfocusedmonth=true]");
  const holiday = [];
  const supwork = [];
  const weekend = [];
  els.each(function () {
    const el = $(this);
    const cell = el.children(".rcld_innercell");
    const data = el.data();
    if (cell.hasClass("rcld_holiday")) holiday.push(data.day);
    else if (cell.hasClass("rcld_work")) supwork.push(data.day);
    // 未知错误
    // else if (cell.children(".rcld_cellce").hasClass(".rcld_cellhh")) weekend.push(data.day);
    else if ([0, 6].includes(new Date(data.date).getDay())) weekend.push(data.day);
  });
  const batchSuffix = (list, suffix = "号") => list.map(i => `${i}${suffix}`).join();
  const workday = els.length - holiday.length - weekend.length;
  return {
    workday: `${workday}天`,
    total: `${workday * 8}h`,
    holiday: batchSuffix(holiday),
    supwork: batchSuffix(supwork),
    weekend: batchSuffix(weekend)
  };
};
