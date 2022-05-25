let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    let form = document.getElementById('form').value;
    let result = document.getElementById('result');
    let sliceWord = form.slice(0, 7);

    if (form == sliceWord) {
        result.innerHTML = `Your name successfully entered [ ${form} ]`;
    } else {
        result.innerHTML = `Sorry, Your name charecters bigger than 6 [ ${form} ]`;
    }
})