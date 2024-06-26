// var default_text = inputTxt.value;
function change_text() {
  var inputTxt = document.querySelector('#projectfonts-text');
  default_text = inputTxt.value;
  console.log(default_text);
  var Script = document.createElement('script');
  Script.setAttribute('src', 'https://cdn.thenitesharya.com/fonts-generator/embedgen-min.js?ver=2');
  document.head.appendChild(Script);
  console.dir(document.head);
  setTimeout(() => {
    Script.remove();
    console.dir(document.head);
    copy = document.querySelector('style');
    console.log(copy);
    copy.remove();
  }, 500);
  // src = 'https://cdn.thenitesharya.com/fonts-generator/embedgen-min.js?ver=2';
}
