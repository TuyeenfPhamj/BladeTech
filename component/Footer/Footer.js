
// function toggleFooterDropDown(){
//     const footer_item_label = document.querySelectorAll(".footer_item_label");
//     if(window.innerWidth < 1024){
//         // footer_item_label.forEach(label => {
//         //     const item = this.parentElement;
//         //     const content = item.querySelector('.footer_dropdown');

//         //     const isActive = item.classList.contains('active');

//         //     // Đóng tất cả
//         //     document.querySelectorAll('.footer_items').forEach(i => {
//         //         i.classList.remove('active');
//         //         i.querySelector('.content').style.maxHeight = null;
//         //     });

//         //     // Nếu chưa mở thì mở
//         //     if (!isActive) {
//         //         item.classList.add('active');
//         //         content.style.maxHeight = content.scrollHeight + 'px';
//         //     }
//         // })
//     }
// }


function toggleFooterDropDown(){
    if(window.innerWidth < 1024){

        const footer_item_label = document.querySelectorAll(".footer_item_label");
        footer_item_label.forEach(label => {
            label.addEventListener('mousedown', function () {
                const footerItem = this.closest(".footer_items");
                footerItem.classList.toggle("active");
                console.log(footerItem);
            })
        })
    }
}

function showDropDownOnPc(){
    if(window.innerWidth >= 1024){
        const footer_items = document.querySelectorAll(".footer_items");
        footer_items.forEach(item => {
            item.classList.add("active");
        })
    }
}

function resetDropDown(){
    if(window.innerWidth < 1024){
            document.querySelectorAll('.footer_items').forEach(i => {
            i.classList.remove('active');
        });
    }
}

export default function setupFooter() {
  console.log("Đang setup footer...");
  //requestAnimationFrame() là API của trình duyệt dùng để trì hoãn việc thực hiện một đoạn mã JavaScript cho đến khi trình duyệt chuẩn bị vẽ khung tiếp theo
  //Khi sử dụng tức, là muốn chạy hàm này khi chuẩn bị vẽ frame kế tiếp (lúc này DOM đã chạy xong) 
  requestAnimationFrame(() => {
    resetDropDown();
    toggleFooterDropDown();
    showDropDownOnPc();
    window.addEventListener("resize", toggleFooterDropDown);
    window.addEventListener("resize", showDropDownOnPc);
  })
  
}
