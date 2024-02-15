var urls = ['https://pbs.twimg.com/media/EyeWGE1XEAUhu1D.jpg', 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/thumbs/1666110641_60-mykaleidoscope-ru-p-plachushchii-kot-instagram-67.jpg', 'https://i.pinimg.com/736x/2d/21/ee/2d21eec9a8833c88d336b692372c6bcf.jpg', 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/thumbs/1666173274_60-mykaleidoscope-ru-p-zloi-milii-kotik-pinterest-61.jpg']
var counter = 0;

var btn_yes = document.getElementById('yes');
var img = document.getElementById('image');
var btn_no = document.getElementById('no');
var text = document.getElementById('text')
btn_no.addEventListener('click', press_no);
btn_yes.addEventListener('click', press_yes);

function press_no() {
    counter++;
    console.log(0)
    switch(counter) {
        case 1:
            img.src = urls[0];
            btn_yes.style.fontSize = '25px'
            btn_yes.style.width = '80px';
            btn_yes.style.height = '40px';
            btn_no.innerHTML = 'Are you sure?';
            break;
        case 2:
            img.src = urls[1];
            btn_yes.style.fontSize = '35px'
            btn_yes.style.width = '85px';
            btn_no.style.width = '85px';
            btn_yes.style.height = '45px';
            btn_no.innerHTML = 'pookie pls';
            break;
        case 3:
            img.src = urls[2];
            btn_yes.style.fontSize = '45px'
            btn_yes.style.width = '95px';
            btn_no.style.width = '100px';
            btn_yes.style.height = '55px';
            btn_no.innerHTML = "Don't do this to me :(";
            break;
        case 4:
            img.src = urls[3];
            btn_yes.style.fontSize = '55px'
            btn_yes.style.width = '105px';
            btn_no.style.width = '100px';
            btn_yes.style.height = '70px';
            btn_no.innerHTML = "You're breaking my heart";
            break;
    }
}

function press_yes() {
    img.src = 'https://sun9-75.userapi.com/impf/c858228/v858228025/b0c35/J9ldFzSF31g.jpg?size=750x751&quality=96&sign=f78b18f2af503de0f0391c263402f77c&c_uniq_tag=2Kv-J9-1ISl2J7C2DPEipUXdqF0vUYF2F_k5RIwUolk&type=album';
    text.innerHTML = 'Yayyy!!! :3';
    btn_no.style.display = 'none';
    btn_yes.style.display = 'none';
}
