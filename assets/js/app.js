
const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');
if (burger) {
  burger.addEventListener('click', () => {
    const isOpen = menu.style.display === 'flex';
    menu.style.display = isOpen ? 'none' : 'flex';
  });
}

function validateContact(e){
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if(!name || !phone || !email || !message){
    alert('Please fill out all fields before submitting.');
    e.preventDefault();
    return false;
  }
  return true;
}
