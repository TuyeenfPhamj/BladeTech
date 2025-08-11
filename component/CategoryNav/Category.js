export function toggleSidebar() {
  const sidebarComponent = document.getElementById("category");
  if (sidebarComponent) {
    sidebarComponent.classList.toggle("active");
  }
}

export function closeSidebar() {
  const sidebarComponent = document.getElementById("category");
  if (sidebarComponent) {
    sidebarComponent.classList.remove("active");
  }
}





export default function setupCategoryNavbar() {
  const component = document.getElementById("category");
  const overlay = component.querySelector(".overlay");

  // Đóng khi click overlay
  overlay.addEventListener("click", () => {
    component.classList.remove("active");
  });
}
