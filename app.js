window.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const app = document.getElementById("app");

  const tg = window.Telegram.WebApp;
  tg.expand();

  // Симуляция загрузки (например, 2 сек)
  setTimeout(() => {
    loader.style.display = "none";
    app.style.display = "block";
    tg.ready();
  }, 2000);
});
