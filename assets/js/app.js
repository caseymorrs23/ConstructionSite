
const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');
if (burger) {
  burger.addEventListener('click', () => {
    const isOpen = menu.style.display === 'flex';
    menu.style.display = isOpen ? 'none' : 'flex';
  });
}
function validateContact(e){
  const fields = ['name','phone','email','message'];
  for (const id of fields){
    if(!document.getElementById(id).value.trim()){
      alert('Please fill out all fields before submitting.');
      e.preventDefault(); return false;
    }
  }
  return true;
}
