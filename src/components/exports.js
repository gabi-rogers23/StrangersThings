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

export { default as Nav } from "./nav";
export { default as ListPosts } from "./listPosts";
export { default as Post } from "./post";
export { default as Home } from "./home";
export { default as LogIn } from "./logIn";
export { default as Feature } from "./feature";
export { default as Register } from "./register";
export { default as Profile } from "./profile";
export { default as NewPostForm } from "./newPostForm";
export { default as Messages } from "./messages";
