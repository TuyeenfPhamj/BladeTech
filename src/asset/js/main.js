

//Component
import { setupAccountDropdown , setupDropDownBottomHeader, changeLOGO } from '../../../component/Header/Header.js';
if (document.getElementById('account_wrapper')) {
  setupAccountDropdown();
}
if (document.getElementById('bot_header_dropdown_wrapper')) {
  setupDropDownBottomHeader();
}
window.addEventListener("resize", changeLOGO);

console.log("changeLOGO called")


// export async function loadComponent(id, htmlPath, jsPath) {
//   const container = document.getElementById(id);
//   const html = await fetch(htmlPath).then(res => res.text());
//   container.innerHTML = html;

//   if (jsPath) {
//     const module = await import(jsPath);
//     if (typeof module.setupHeader === 'function') {
//       module.setupHeader();
//     }
//   }
// }


