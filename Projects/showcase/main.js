const products = [
  {
    id: 1,
    title: "Lenovo Yoga",
    price: 3000,
  },
  {
    id: 2,
    title: "Acer Aspire",
    price: 2000,
  },
  {
    id: 3,
    title: "Dell Vostro",
    price: 2500,
  },
];
// лучше не мутировать через push, а создавать как здесь новый массив
let order = [];

function addToBasket(productId) {
  if (order.find((el) => el.id === productId))
    return alert("Товар уже в корзине");

  const product = products.find((item) => item.id === productId);
  order = [...order, product];

  // эти строки не трогаем они отвечают за перерисовку страницы
  renderCart();
  rerenderTotalPrice();
}

function removeFromBasket(productId) {
  order = order.filter((item) => item.id !== productId);

  // эти строки не трогаем они отвечают за перерисовку страницы
  renderCart();
  rerenderTotalPrice();
}

function rerenderTotalPrice() {
  const totalPrice = order.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  //не менять эту строку
  document.getElementById("total").innerText = totalPrice;
}

//Этот метод остается без изменений
function renderCart() {
  const cart = document.getElementById("basket-items");

  cart.innerHTML = "";
  order.forEach((item) => {
    const el = document.createElement("li");
    el.innerText = item.title;
    el.onclick = () => removeFromBasket(item.id);
    cart.appendChild(el);
  });
}
