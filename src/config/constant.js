const os = require("os");
import { name, version, engines } from "../../package.json";

// 系统user文件夹
const home = process.cwd();

// user agent
export const ua = `${name}-${version}`;

/**
 * 文件夹定义
 * @type {Object}
 */
export const dirs = {
    home,
    download: `${home}`,
    rc: `${home}`,
    tmp: os.tmpdir(),
    metalsmith: "metalsmith"
};

/**
 * 版本
 * @type {Object}
 */
export const versions = {
    node: process.version.substr(1),
    nodeEngines: engines.node,
    [name]: version
};
