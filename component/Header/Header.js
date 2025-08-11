

//dropdown của account trên tablet và mobile
function setupAccountDropdown() {
  const account_wrapper = document.getElementById('account_wrapper');
  const account_dropdown = document.getElementById('account_dropdown');

  if (!account_wrapper || !account_dropdown) return;

  document.addEventListener('mousedown', (e) => {
    if (account_wrapper.contains(e.target)) {
      account_wrapper.classList.toggle('show');
    } else {
      account_wrapper.classList.remove('show');
    }
  });

  // Ngăn dropdown bị ẩn khi click vào chính nó
  account_dropdown.addEventListener('mousedown', (e) => {
    e.stopPropagation();
  });
};



// dropdown của các lựa chọn header khi màn hình tablet hoặc mobile
function setupDropDownBottomHeader() {
  const bot_header_dropdown_wrapper = document.getElementById('bot_header_dropdown_wrapper');
  const bot_header_dropdown = document.getElementById('bot_header_dropdown');

  if (!bot_header_dropdown_wrapper || !bot_header_dropdown) return;

  document.addEventListener('mousedown', (e) => {
    if (bot_header_dropdown_wrapper.contains(e.target)) {
      bot_header_dropdown_wrapper.classList.toggle('show');
    } else {
      bot_header_dropdown_wrapper.classList.remove('show');
    }
  });

  // Ngăn dropdown bị ẩn khi click vào chính nó
  bot_header_dropdown.addEventListener('mousedown', (e) => {
    e.stopPropagation();
  });
}




// đổi logo khi màn to
function changeLOGO() {
  const logo = document.getElementById("logo");
  if (!logo) return;

  if (window.innerWidth >= 1024) {
    logo.src = "../../src/photo/logo/big-logo.png";
  } else {
    logo.src = "../../src/photo/logo/logo.png";
  }
}

function toggleGutterOnXL(){
  const target = document.getElementById("bottom_header");
  if(window.innerWidth >= 1450){
    target.classList.remove("no-gutters");
  }
  else{
    target.classList.add("no-gutters");
  }
}


export default function setupHeader() {
  console.log("Đang setup header...");
  //requestAnimationFrame() là API của trình duyệt dùng để trì hoãn việc thực hiện một đoạn mã JavaScript cho đến khi trình duyệt chuẩn bị vẽ khung tiếp theo
  //Khi sử dụng tức, là muốn chạy hàm này khi chuẩn bị vẽ frame kế tiếp (lúc này DOM đã chạy xong) 
  requestAnimationFrame(() => {
    setupAccountDropdown();
    setupDropDownBottomHeader();
    changeLOGO();
    toggleGutterOnXL();
    window.addEventListener("resize", changeLOGO);
    window.addEventListener("resize", toggleGutterOnXL);
  })
  
}
