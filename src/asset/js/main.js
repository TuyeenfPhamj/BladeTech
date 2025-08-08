

//Component
// import { setupAccountDropdown , setupDropDownBottomHeader, changeLOGO } from '../../../component/Header/Header.js';
// if (document.getElementById('account_wrapper')) {
//   setupAccountDropdown();
// }
// if (document.getElementById('bot_header_dropdown_wrapper')) {
//   setupDropDownBottomHeader();
// }
// window.addEventListener("resize", changeLOGO);

// console.log("changeLOGO called")


// export async function loadComponent(id, htmlPath, jsPath) {
//   const container = document.getElementById(id);
//   const html = await fetch(htmlPath).then(res => res.text());
//   container.innerHTML = html;

//   if (jsPath) {
//     const module = await import(jsPath);
//     if (typeof module.default === 'function') {
//       module.default(); // gọi hàm setup chính
//     }
//   }
// }

export async function loadComponent(id, htmlPath, jsPath) {
  const container = document.getElementById(id);
  const htmlText = await fetch(htmlPath).then(res => res.text());

  // Tạo một document ảo để phân tích cú pháp HTML
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlText, 'text/html');

  // Lấy nội dung bên trong thẻ <body>
  const bodyContent = doc.body.innerHTML;

  // Gắn nội dung vào container
  container.innerHTML = bodyContent;

  // Nạp script nếu có
  if (jsPath) {
    const module = await import(jsPath);
    if (typeof module.default === 'function') {
      module.default();
    }
  }
}

