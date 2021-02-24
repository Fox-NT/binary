"use strict" 

document.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.portfolio_tab'),
          content = document.querySelectorAll('.portfolio_block'),
          parentContent = document.querySelector('.portfolio_tabs');

    function hideContent() {
        content.forEach(item => {
            item.classList.remove('show');
            item.classList.add('hide');
        });
        tabs.forEach(item => {
            item.classList.remove('active_tab');
        });
    }

    function showContent(i = 0) {
        tabs[i].classList.add('active_tab');
        content[i].classList.add('show');
        content[i].classList.remove('hide');
    }

    
    function showAllContent() {
        tabs[0].classList.add('active_tab');
        content.forEach(item => {
            item.classList.add('show');
            item.classList.remove('hide');
        });
    }

    hideContent();
    showContent();

    parentContent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('portfolio_tab')) {
            tabs.forEach((item, i) => {
                if (i == 0) {
                    showAllContent();
                } else if (target == item) {
                    hideContent();
                    showContent(i);
                }
            });
        }
    });

    const menuBtn = document.querySelector('.menu-link'),
          menu = document.querySelector('.sub-menu-list');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('sub-show');
        menuBtn.classList.toggle('menu_a_active');
    //     if (menu.classList.contains('sub-hide')) {
    //         menu.classList.add('sub-show');
    //         menu.classList.remove('sub-hide');
    //     } else {
    //         menu.classList.add('sub-hide');
    //         menu.classList.remove('sub-show');
    //     }
    // });
    });
});

