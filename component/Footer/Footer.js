let mode = window.innerWidth >= 1024 ? "pc" : "small";
let mobileClickHandler = null; // lưu function click cho mobile

function toggleFooterDropDown() {
    if (window.innerWidth < 1024) {
        const footer_item_label = document.querySelectorAll(".footer_item_label");

        // tạo 1 function handler duy nhất để có thể remove
        mobileClickHandler = function () {
            const footerItem = this.closest(".footer_items");
            footerItem.classList.toggle("active");
        };

        footer_item_label.forEach(label => {
            label.addEventListener('mousedown', mobileClickHandler);
        });
    }
}

function removeMobileEvents() {
    const footer_item_label = document.querySelectorAll(".footer_item_label");
    if (mobileClickHandler) {
        footer_item_label.forEach(label => {
            label.removeEventListener('mousedown', mobileClickHandler);
        });
        mobileClickHandler = null; // xoá tham chiếu
    }
}

function showDropDownOnPc() {
    const footer_items = document.querySelectorAll(".footer_items");
    footer_items.forEach(item => {
        item.classList.add("active");
    });
}

function resetDropDown() {
    document.querySelectorAll('.footer_items').forEach(i => {
        i.classList.remove('active');
    });
}

export default function setupFooter() {
    console.log("Đang setup footer...");

    requestAnimationFrame(() => {
        if (mode === "pc") {
            showDropDownOnPc();
        } else {
            toggleFooterDropDown();
        }

        window.addEventListener("resize", () => {
            const newMode = window.innerWidth >= 1024 ? "pc" : "small";

            if (mode !== newMode) {
                mode = newMode;

                if (mode === "pc") {
                    removeMobileEvents();  
                    resetDropDown();
                    showDropDownOnPc();
                } else {
                    resetDropDown();
                    toggleFooterDropDown();
                }
            }
        });
    });
}
