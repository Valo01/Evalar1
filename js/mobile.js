let i=0;

function toggleMenu() {
    i++;
    const button = document.getElementById('btn-menu')
    const menu = document.getElementById('list-menu')
    button.classList.toggle('active')
    menu.classList.toggle('active')
    const btn1 = document.getElementById('button1')
    btn1.textContent = "ПОДПИСАТЬСЯ"; 
    console.log(i);
    if(i % 2 === 0){
        btn1.textContent = "ПОДПИСАТЬСЯ НА НОВОСТИ"; 
    }
}
