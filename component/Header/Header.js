// const account_wrapper = document.getElementById('account_wrapper');
// const account_dropdown = document.getElementById('account_dropdown');

// document.addEventListener('click', (e) => {
//   if (account_wrapper.contains(e.target)) {
//     account_wrapper.classList.toggle('show');
//   } else {
//     account_wrapper.classList.remove('show');
//   }
// });


// account_dropdown.addEventListener('click', (e) => {
//   e.stopPropagation();
// });



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