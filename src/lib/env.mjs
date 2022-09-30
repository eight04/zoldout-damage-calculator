/* eslint-env browser */
const match = location.pathname.match(/([^/.]*)(\.html)?$/);
export const currentPage = !match[1] || match[1] === "index" ? "sword" : match[1];
