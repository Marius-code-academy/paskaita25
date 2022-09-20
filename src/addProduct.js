async function postNewProduct() {
  const imageUrl = document.getElementById('image').value;
  const title = document.getElementById('title').value;
  const price = document.getElementById('price').value;

  const body = JSON.stringify({
    image: imageUrl,
    price,
    title,
  });

  try {
    const res = await fetch('https://golden-whispering-show.glitch.me', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    });
    if (res.ok) {
      alert('Success');
      window.location.href = './index.html';
    } else {
      alert('Not success');
    }
  } catch (error) {
    console.log(error);
  }
}

document.querySelector('button').addEventListener('click', postNewProduct);
