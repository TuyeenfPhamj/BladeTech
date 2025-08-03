const account_wrapper = document.getElementById('account_wrapper');
const account_dropdown = document.getElementById('account_dropdown');

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
