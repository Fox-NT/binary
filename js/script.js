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
        tabs.forEach(item => {
            item.classList.remove('active_tab');
        });
        tabs[0].classList.add('active_tab');
        content.forEach(item => {
            item.classList.add('show');
            item.classList.remove('hide');
        });
    }

    hideContent();
    showAllContent();
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

    const formFeedback = document.querySelector('.form'),
          tabBlock = document.querySelector('.portfolio .container'),
          tabWeb = tabBlock.querySelector('.web .portfolio_row'),
          all = tabBlock.querySelector('.all .portfolio_row'),
          tabApps = tabBlock.querySelector('.apps .portfolio_row'),
          tabOthers = tabBlock.querySelector('.others .portfolio_row');
    const messageProcess = {
          loading: "Данные отправляются...",
          ready: 'Данные отправлены. Спасибо, мы с Вами свяжемся!',
          fail: 'Произошла ошибка...'
    };

    const urlImg = 'https://source.unsplash.com/random/',
          row = 5;
    
    function getRandom() {
        return Math.floor(Math.random() * 2000);
    }

    function getRandomSize() {
        return `${getRandom()}x${getRandom()}`;
    }

    

for(let i = 0; i < row * 2; i++) {
        const itemTab = document.createElement('div');
        itemTab.classList.add('row_item');
        itemTab.innerHTML = `<img src=${urlImg}${getRandomSize()} alt=''>`;
        console.log(getRandom);
        console.log(getRandomSize);
        console.log(itemTab);
        console.log(`<img src=${urlImg}${getRandomSize()} alt=''>`);
    all.append(itemTab);
}


    const formImg = document.querySelector('[data-img]');

    function createItemTab(img, alt, parrent) {
        const itemTab = document.createElement('div');
        itemTab.classList.add('row_item');
        itemTab.innerHTML = `<img src=${img} alt='${alt}'>`;
        parrent.append(itemTab);
    }

    class ItemCard {
        constructor(img, alt, parrent) {
            this.img = img;
            this.alt = alt;
            this.parrent = parrent;
        }
        push() {
            createItemTab(this.img, this.alt, this.parrent);
        }
    }
    const getCard = async (url) => {
        const res = await fetch(url);
        if(!res.ok) {
            throw Error('Error, try latter, pls');
        }
        return res.json();
    };
    const reload = () => {
        document.location.reload();
    };

    getCard('http://localhost:3000/card')
    .then(data => {
        data.forEach(({img, imgalt, catdata}) => {
            if(catdata == 'Web') {
                new ItemCard(img, imgalt, tabWeb).push();
            } else if (catdata == 'Apps') {
                new ItemCard(img, imgalt, tabApps).push();
            } else if (catdata == 'Others') {
                new ItemCard(img, imgalt, tabOthers).push();
            }
        });
    })
    .finally();

    const postRequest = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: data
        });
        return await res.json();
    };

    const btnport = document.querySelector('[data-imgbtn]'),
          btncontact = document.querySelector('.contact_btn');
    btnport.addEventListener('click', () => {
        postData(formImg, 'http://localhost:3000/card');
        reload();
    });
    btncontact.addEventListener('click', postData(formFeedback, 'http://localhost:3000/message'));
    
    function postData(form, req) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const statusMessage = document.createElement('div');
            statusMessage.innerHTML = messageProcess.loading;
            form.append(statusMessage);

            const formData = new FormData(form),
            t = Object.fromEntries(formData.entries()),
            sendRequest = JSON.stringify(t);
                postRequest(req, sendRequest)
                .then(data => {
                    console.log(data);
                    statusMessage.innerHTML = "";
                    statusMessage.innerHTML = messageProcess.ready;
                })
                .catch(() => {
                    statusMessage.innerHTML = messageProcess.fail;
                })
                .finally(() => {
                    form.reset();
                });
            // if (t.catdata === 'Web') {
            //     b('http://localhost:3000/web');
            // } else if (t.catdata === 'Apps') {
            //     b('http://localhost:3000/apps');
            // } else if (t.catdata === 'Others') {
            //     b('http://localhost:3000/others');
            // } else {
            //     b('http://localhost:3000/requests');
            // }
        });
    }
});