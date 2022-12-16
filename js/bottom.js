const test = document.getElementById('homeber01');
const test2 = document.getElementById('hoverTest01');

test.addEventListener('mouseover', () =>{
    test2.style.display = 'block'
},false);

test.addEventListener('mouseleave', () => {
    test2.style.display = 'block';
}, false);

test2.addEventListener('mouseleave', () =>{
    test2.style.display = 'none';
});