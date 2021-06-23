var elOpenModal = document.querySelector('.question__link');
var elModal = document.querySelector('.js-modal');
var elModalClose = document.querySelector('.close')

elOpenModal.addEventListener('click', function (){
  elModal.classList.add('modal-open');
});

elModalClose.addEventListener('click', function (){
  elModal.classList.remove('modal-open');
});


var elsQa = document.querySelectorAll('.faq__item');
var elsQAToggler = document.querySelectorAll('.faq__btn');

elsQAToggler.forEach(function (toggler){
  toggler.addEventListener('click', function () {
 
    toggler.closest('.faq__item').classList.toggle('qa--active');
    // console.log("motto");
  });
});