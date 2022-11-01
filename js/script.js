var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");
const shareButton = document.querySelector('.share-button');
const shareDialog = document.querySelector('.share-dialog');
const closeButton = document.querySelector('.close-button');

hamburger.addEventListener("click", function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
});



shareButton.addEventListener('click', event => {
  if (navigator.share) { 
   navigator.share({
      title: 'With pride and joy, I cordially invite you to share a special day in my life as i am given a name on 10th November at 10AM',
      url: 'https://maps.app.goo.gl/KUUTWYXDGRAs6qyZ8'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
    } else {
        shareDialog.classList.add('is-open');
    }
});

closeButton.addEventListener('click', event => {
  shareDialog.classList.remove('is-open');
});