let log = new Log(document.querySelector('.log'));

let char = new knight('Berforan');
let monster = new kobold();


 const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log

 );

 stage.start();