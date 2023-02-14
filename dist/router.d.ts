import type { Express, Router } from "express";
import type { Options } from "./types";
type ExpressLike = Express | Router;
/**
 * Attach routes to an Express app or router instance
 *
 * ```ts
 * createRouter(app)
 * ```
 *
 * @param app An express app or router instance
 * @param options An options object (optional)
 */
declare const createRouter: <T extends ExpressLike = ExpressLike>(app: T, options?: Options) => Promise<T>;
export default createRouter;
