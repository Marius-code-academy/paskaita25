// https://golden-whispering-show.glitch.me
// document.getElementById('add-product-navigation').addEventListener('click', () => {
//   window.location.replace('./addProduct.html');
// });
const container = document.getElementById('container');

function deleteProductFromHtml(id) {
  const cards = document.getElementsByClassName('card');
  for (let i = 0; i < cards.length; i += 1) {
    if (cards[i].lastChild.dataset.id === id) {
      container.removeChild(cards[i]);
    }
  }
}

async function deleteProduct(event) {
  event.preventDefault();
  const { id } = event.target.dataset;

  try {
    const res = await fetch(`https://golden-whispering-show.glitch.me/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      deleteProductFromHtml(id);
      console.log('all good');
    } else {
      console.log('not all good');
    }
  } catch (error) {
    console.log(error);
  }
}

function generateProductHtml(product) {
  const card = document.createElement('div');
  const img = document.createElement('img');
  const title = document.createElement('p');
  const price = document.createElement('p');
  const deleteButton = document.createElement('button');

  img.src = product.image;
  title.innerText = product.title;
  price.innerText = `$${product.price}`;
  deleteButton.dataset.id = product.id;
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', deleteProduct);

  card.classList.add('card');

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(price);
  card.appendChild(deleteButton);

  container.appendChild(card);
}

async function getProducts() {
  const res = await fetch('https://golden-whispering-show.glitch.me');
  const resJson = await res.json();
  resJson.forEach((product) => {
    generateProductHtml(product);
  });
}

getProducts();
