const orderModal = document.getElementById("orderModal");

document.getElementById("heroOrderBtn").onclick = () =>
  orderModal.classList.remove("hidden");

document.getElementById("orderClose").onclick = () =>
  orderModal.classList.add("hidden");

document.getElementById("heroMenuBtn").onclick = () =>
  document.getElementById("menu").scrollIntoView({behavior:"smooth"});

window.onclick = e => {
  if (e.target === orderModal) orderModal.classList.add("hidden");
};