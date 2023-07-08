let image = document.querySelectorAll('img');

image.forEach((e) => {
    e.addEventListener('click', ()=>{
        const altText = e.alt;
        alert(`You clicked on ${altText}`);
    })
})

const primaryNav = document.querySelector('.primary-navigation');
const toggleButton = document.querySelector('.mobile-toggle');
const navList = document.querySelectorAll('a')
toggleButton.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    const expanded = toggleButton.getAttribute('data-expanded');

    if(visibility === 'false') {
        primaryNav.setAttribute('data-visible', true)
        toggleButton.setAttribute('aria-expanded',true);
       
        
    } else if(visibility === 'true') {
       primaryNav.setAttribute('data-visible', false);
        toggleButton.setAttribute('aria-expanded', false)
    
    }

   
})
//  navList.forEach((link) => {
//     link.addEventListener('click',()=> {
//         primaryNav.style.transition = '10s ease-in-out'
//     })
//  })