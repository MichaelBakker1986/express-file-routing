import type { File, Route } from "./types";
/**
 * @param directory The directory path to walk recursively
 * @param tree
 *
 * @returns An array of all nested files in the specified directory
 */
export declare const walkTree: (directory: string, tree?: string[]) => File[];
/**
 * @param files
 *
 * @returns
 */
export declare const generateRoutes: (files: File[]) => Promise<Route[]>;
