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
        // if (menu.classList.contains('sub-show')) {
        //     menu.classList.add('sub-hide');
        //     menu.classList.remove('sub-show');
        //     menuBtn.classList.remove('menu_a_active');
        // } else {
        //     menu.classList.add('sub-show');
        //     menu.classList.remove('sub-hide');
        //     menuBtn.classList.add('menu_a_active');
        // }
    // });
    });

    const nameInput = document.querySelector('.input_text'),
          emailInput = document.querySelector('.input_email'),
          messageInput = document.querySelector('.input_message'),
          sendFormInput = document.querySelector('.contact_btn');

    // const obj = {
    //     name: '',
    //     email: '',
    //     message: ''
    // };
    const obj = {
        Users: [
            {
        name: '',
        email: '',
        message: ''
            }
        ]
    };
    
    let i = 0;
        sendFormInput.addEventListener('click', (e) => {
            e.preventDefault();
            let nameUser = nameInput.value;
            let emailUser = emailInput.value;
            let messageUser = messageInput.value;

            obj.Users[i] = {
                name: nameUser,
                email: emailUser,
                message: messageUser
            };
            
            console.log(`Имя пользователя: ${obj.Users[i].name};`);
            console.log(`E-mail пользователя: ${obj.Users[i].email};`);
            console.log(`Сообщение пользователя: ${obj.Users[i].message};`);
            console.log(obj);
            i++;
    //   obj.Users.forEach((item) => {
    //     console.log(`Имя пользователя: ${item.name};`);
    //     console.log(`E-mail пользователя: ${item.email};`);
    //     console.log(`Сообщение пользователя: ${item.message};`);
    // });  
            
        });

    const razdel = document.querySelectorAll('.razdel');

    function test() {
        razdel.forEach(item => {
            item.classList.toggle('opacity_none');
        });
    }
    setInterval(test, 1000);
        test();


        const deadtime = '2021-02-26';

        function getTimeResistance(endtime) {
            const t = Date.parse(endtime) - new Date();

            const days = Math.floor(t / (1000 * 60 * 60 * 24)),
                  hourse = Math.floor((t / (1000 * 60 * 60) % 24)),
                  minutes = Math.floor((t / (1000 * 60) % 60)),
                  seconds = Math.floor(((t / 1000) % 60));

            return {
                'total:': t,
                'days': days,
                'hourse': hourse,
                'minutes': minutes,
                'seconds': seconds
            };

        }

        function setClock(selector, endtime) {
            const timer = document.querySelector(selector),
                  days = timer.querySelector('.days'),
                  hourse = timer.querySelector('.hourse'),
                  minutes = timer.querySelector('.minutes'),
                  seconds = timer.querySelector('.seconds'),
                  timeInterval = setInterval(updateClock, 1000);
                  updateClock();

            function updateClock() {
                const time = getTimeResistance(endtime);
                days.innerHTML = addZero(time.days);
                hourse.innerHTML = addZero(time.hourse);
                minutes.innerHTML = addZero(time.minutes);
                seconds.innerHTML = addZero(time.seconds);

                if (time.total <= 0) {
                    clearInterval(timeInterval);
                }
            }
        }

        function addZero(num) {
            if (num >= 0 && num < 10) {
                return `0${num}`;
            } else {
                return num;
            }
        }

    // setClock('.timer_wrapper', deadtime);


        const arrowDown = document.querySelector('.arrow_bottom'),
              about = document.querySelector(".about"),
              buttonUp = document.querySelector('.btn_up'),
              contact = document.querySelector('.contact');
        // let s = window.pageYOffset;
        window.addEventListener('scroll', () => {
            console.log(window.pageYOffset);
            if (window.pageYOffset >= 1000) {
                buttonUp.classList.add('btn_up_show');
            } else {
                buttonUp.classList.remove('btn_up_show');
            }
        });

        buttonUp.addEventListener('click', () => {
            // window.scrollTo(0, 0);
            document.documentElement.scrollIntoView({block: 'start', behavior: 'smooth'});
        });

        arrowDown.addEventListener('click', () => {
            about.scrollIntoView({block: 'start', behavior: 'smooth'});
            // window.scrollTo(0, 1000);
        });

        window.addEventListener('resize', () => {
            console.log(`Высота окна: ${document.documentElement.clientHeight}`);
            console.log(`Ширина окна: ${document.documentElement.clientWidth}`);
        });



        const modal = document.querySelector('.modal_container'),
              modalOpen = document.querySelector('.read_more'),
              modalSignInTab = document.querySelector('.modal_sign-in'),
              modalNewAccountTab = document.querySelector('.modal_new-account'),
              modalSignIn = document.querySelector('.modal_body_sign-in'),
              modalNewAccount = document.querySelector('.modal_body_new-account'),
              modalClose = document.querySelectorAll('.modal_cancel');


    function openModal() {
        modal.classList.add('modal_show');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('modal_show');
        document.body.style.overflow = '';
    }

    modalOpen.addEventListener('click', openModal);

    modalClose.forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal();
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if( e.code === "Escape" && modal.classList.contains('modal_show')) {
            closeModal();
        }
    });

    modalNewAccountTab.addEventListener('click', () => {
        modalSignInTab.classList.remove('current_modal_tab');
        modalNewAccountTab.classList.add('current_modal_tab');
        modalSignIn.style.display = "none";
        modalNewAccount.style.display = "flex";
    });

    modalSignInTab.addEventListener('click', () => {
        modalNewAccountTab.classList.remove('current_modal_tab');
        modalSignInTab.classList.add('current_modal_tab');
        modalNewAccount.style.display = "none";
        modalSignIn.style.display = "flex";
    });
        





});