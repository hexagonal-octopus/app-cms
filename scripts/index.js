const targetElement = document.querySelector('.dropup');
const triggerDropup = document.querySelector('.js-dropdown');

function showDropup(target) {
   target.classList.add('active');
   setTimeout(function () {
      target.classList.add('in');
   }, 20);
}

function hideDropup(target) {
   target.classList.remove('in');

   window.addEventListener('transitionend', function shrinkElement(e) {
      // console.log(e.propertyName);
      if (e.propertyName !== 'opacity') return;

      target.classList.remove('active');

      if (target.classList.contains('in')) {
         target.classList.remove('in');
      }

      window.removeEventListener('transitionend', shrinkElement, false);
   }, false);
}

function clickHandler(event) {
   // click outside triggered element
   if (!targetElement.contains(event.target)) {
      hideDropup(targetElement);
      return false;
   }

   console.log('I\'m contains event target');
}


document.addEventListener('click', clickHandler);

triggerDropup.addEventListener('click', function (event) {
   var parent = this.parentElement;

   if (parent.classList.contains('active') || parent.classList.contains('in')) {
      // hideDropup(parent);
      return false;
   }

   showDropup(parent);
});