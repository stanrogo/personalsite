
class NavBar{

    constructor(){

        const toggleNav = document.getElementsByClassName('js-toggleNav')[0];
        toggleNav.addEventListener('click', () => {
            const navLinks = document.getElementsByClassName('js-navLinks')[0];

            if(navLinks.classList.contains('is-collapsed')){

                navLinks.classList.remove('is-collapsed');
            }
            else{

                navLinks.classList.add('is-collapsed');
            }
        });
    }
}

export default NavBar;


