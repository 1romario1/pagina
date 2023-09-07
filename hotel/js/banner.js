var contenedor= $('#caja');
var siguiente= $('#btn-adelante');
var anterior= $('#btn-atras');

$('#caja .section-caja:last').insertBefore('#caja .section-caja:first');

contenedor.css('margin-left','-',+ 100+'%');


function derecha(){
    contenedor.animate({
        marginLeft:'-'+120+'%'
    },700, function(){
        $('#caja .section-caja:first').insertAfter('#caja .section-caja:last');

    }   
    );

}

function izquierda(){
    contenedor.animate({
        marginLeft:0
    },700, function(){
        $('#caja .section-caja:last').insertBefore('#caja .section-caja:');
        contenedor.css('margin-left','-'+100+'%');
    }   
    );

}

function automatico(){
    interval=setInterval(function(){
        derecha();
    },5000);
}

siguiente.on('click',function(){
    derecha();
    clearInterval(interval);
    automatico();
});

anterior.on('click',function(){
    izquierda();
    clearInterval(interval);
    automatico();
});