const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

let info;

window.onload = setTimeout(async function (){
    await fetch('/src/data.json')
        .then(response => response.json())
        .then(response => {
            info = response;
        }
    );
    document.body.className="";
    $('#page-content').css({'display': 'flex'})
    setTimeout(function(){
        $('body').css({'overflow': 'auto'})
    }, 1000);
},1000);

window.onload = setTimeout(function(){
    $('.brand-name').css({'height': '20vh'});
    $('.brand-name h1').css({'font-size': '30px'});
    $('.brand-name p').css({'font-size': '10px'});
    $('.scroll-pointer').css({'opacity': '0'});
    setTimeout(function(){
        $('.scroll-pointer').css({'display': 'none'});
    }, 500);

    document.querySelector('.contact-info .contact-num').innerHTML = `${info.contact_num}`;
    document.querySelector('.contact-info .email').innerHTML = `${info.email}`;
    document.querySelector('.socials a.instagram').setAttribute('href', `${info.instagram}`);
    document.querySelector('.socials a.facebook').setAttribute('href', `${info.facebook}`);
    document.querySelector('.socials a.twitter').setAttribute('href', `${info.twitter}`);
},1500);

function goToByScroll(id){
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top-(0.2*vh)},
        'slow');
}

let section = document.querySelectorAll('#page-content div');
let lists = document.querySelectorAll('.nav-bar ul li');
function activeLink(li) {
    if (li.classList.contains('active')) return;
    lists.forEach((item) => item.classList.remove('active'));
    li.classList.add('active');
}
lists.forEach((item) =>
    item.addEventListener('click', function(){
        activeLink(this);
    }));

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            if (document.querySelector(`[href='#${id}']`) != null){
                const target = document.querySelector(`[href='#${id}']`).parentElement;
                activeLink(target);
            }
        }
    })
};