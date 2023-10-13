let title = document.getElementsByClassName('title')[0]
let turn = 'X';
let squares =[];

function winner(){

    for(i=1;i<10;i++){
        squares[i]=document.getElementById('item'+i).innerHTML;
    }
    console.log(squares)
    if(squares[1]==squares[2] && squares[2]==squares[3] && squares[1]!=''){
        title.innerHTML=(`${squares[1]} winner`)
        document.getElementById('item1').style.background='#000';
        document.getElementById('item2').style.background='#000';
        document.getElementById('item3').style.background='#000';
        setInterval(function(){title.innerHTML +='.'},1000)
        setTimeout(function(){location.reload()},4000)
    }
    else if(squares[4]==squares[5] && squares[5]==squares[6] && squares[6]!=''){
        title.innerHTML=(`${squares[4]} winner`)
        document.getElementById('item4').style.background='#000';
        document.getElementById('item5').style.background='#000';
        document.getElementById('item6').style.background='#000';
        console.log('dsadadas')

        setInterval(function(){title.innerHTML +='.'},1000)
        setTimeout(function(){location.reload()},4000)
    }
    else if(squares[7]==squares[8] && squares[8]==squares[9] && squares[9]!=''){
        title.innerHTML=(`${squares[7]} winner`)
        document.getElementById('item7').style.background='#000';
        document.getElementById('item8').style.background='#000';
        document.getElementById('item9').style.background='#000';
        console.log('dsadadas')

        setInterval(function(){title.innerHTML +='.'},1000)
        setTimeout(function(){location.reload()},4000)
    }
    else if(squares[1]==squares[4] && squares[4]==squares[7] && squares[1]!=''){
        title.innerHTML=(`${squares[1]} winner`)
        document.getElementById('item1').style.background='#000';
        document.getElementById('item4').style.background='#000';
        document.getElementById('item7').style.background='#000';

        setInterval(function(){title.innerHTML +='.'},1000)
        setTimeout(function(){location.reload()},4000)
    }
    else if(squares[2]==squares[5] && squares[5]==squares[8] && squares[2]!=''){
        title.innerHTML=(`${squares[2]} winner`)
        document.getElementById('item2').style.background='#000';
        document.getElementById('item5').style.background='#000';   
        document.getElementById('item8').style.background='#000';

        setInterval(function(){title.innerHTML +='.'},1000)
        setTimeout(function(){location.reload()},4000)
    }
    else if(squares[3]==squares[6] && squares[6]==squares[9] && squares[9]!=''){
        title.innerHTML=(`${squares[3]} winner`)
        document.getElementById('item3').style.background='#000';
        document.getElementById('item6').style.background='#000';
        document.getElementById('item9').style.background='#000';

        setInterval(function(){title.innerHTML +='.'},1000)
        setTimeout(function(){location.reload()},4000)
    }
    else if(squares[1]==squares[5] && squares[5]==squares[9] && squares[1]!=''){
        title.innerHTML=(`${squares[1]} winner`)
        document.getElementById('item1').style.background='#000';
        document.getElementById('item5').style.background='#000';
        document.getElementById('item9').style.background='#000';

        setInterval(function(){title.innerHTML +='.'},1000)
        setTimeout(function(){location.reload()},4000)
    }
    else if(squares[3]==squares[5] && squares[5]==squares[7] && squares[7]!=''){
        title.innerHTML=(`${squares[3]} winner`)
        document.getElementById('item3').style.background='#000';
        document.getElementById('item5').style.background='#000';
        document.getElementById('item7').style.background='#000';
        setInterval(function(){title.innerHTML +='.'},1000)
        setTimeout(function(){location.reload()},4000)
    }   
    else if(squares[1]){

    } 

}

function game(id){

    let element = document.getElementById(id);
    if(turn ==='X' && element.innerHTML == ''){
        element.innerHTML='X';
        turn='O'
        title.innerHTML='O'
    } 
    else if(turn=='O' &&  element.innerHTML == ''){
        element.innerHTML='O'
        turn='X'
        title.innerHTML='X'
    }
    winner()

}