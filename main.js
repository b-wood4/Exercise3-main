console.log('hello')

function buttonClick(button){
    $('#button'+button).addClass('active-btn')
    $('#hat').addClass('panda-hat'+button)
    for (let i = 1; i < 6; i++) {
        if(i != button){
            $('#hat').removeClass('panda-hat'+i)
            $('#button'+i).removeClass('active-btn')
        }
    }
     document.getElementById('hat').src = 'images/hat'+button+'.png';
}
