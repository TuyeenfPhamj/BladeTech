


//dropdown của account trên tablet và mobile
export function setupAccountDropdown() {
  const account_wrapper = document.getElementById('account_wrapper');
  const account_dropdown = document.getElementById('account_dropdown');

  if (!account_wrapper || !account_dropdown) return;

  document.addEventListener('click', (e) => {
    if (account_wrapper.contains(e.target)) {
      account_wrapper.classList.toggle('show');
    } else {
      account_wrapper.classList.remove('show');
    }
  });

  // Ngăn dropdown bị ẩn khi click vào chính nó
  account_dropdown.addEventListener('click', (e) => {
    e.stopPropagation();
  });
};



// dropdown của các lựa chọn header khi màn hình tablet hoặc mobile
export function setupDropDownBottomHeader() {
  const bot_header_dropdown_wrapper = document.getElementById('bot_header_dropdown_wrapper');
  const bot_header_dropdown = document.getElementById('bot_header_dropdown');

  if (!bot_header_dropdown_wrapper || !bot_header_dropdown) return;

  document.addEventListener('click', (e) => {
    if (bot_header_dropdown_wrapper.contains(e.target)) {
      bot_header_dropdown_wrapper.classList.toggle('show');
    } else {
      bot_header_dropdown_wrapper.classList.remove('show');
    }
  });

  // Ngăn dropdown bị ẩn khi click vào chính nó
  bot_header_dropdown.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}




// đổi logo khi màn to
export function changeLOGO() {
  if (window.matchMedia("(min-width: 1024px)").matches) {
    document.getElementById("logo").src = "../../src/photo/logo/big-logo.png";

  } else {
    document.getElementById("logo").src = "../../src/photo/logo/logo.png";
  }
}
console.log("changeLOGO called")
