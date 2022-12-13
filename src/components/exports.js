/**
 * The index.js file is used to re-export from our separate files, that way rather than write:
 *
 * import Feature from './components/Feature';
 *
 * we can write:
 *
 * import { Feature } from './components';
 *
 * since index.js is assumed as part of the import when you specify a folder
 */



export { default as Posts } from "./posts";
export { default as Nav } from "./nav";
export { default as Home } from "./home";
export { default as LogIn} from "./logIn";