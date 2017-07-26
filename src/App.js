import React, { Component } from 'react';

import './App.css';


function Figure(props){
    return(
      <button className="square" onClick={ props.onClick }> { props.value } </button>
    );

}


var array = [];
for(let i = 0; i<9; i++)
{
  array.push(<Figure />);
}


function Board(props){
    return(
  
           <div onClick={props.onClick } className = 'board'>
            {
              array.map(function(el, index){
                return <Figure key = {index}/>
              })
          
          }
            
        </div>
    )

}



class Game extends React.Component{
   constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.tryAgain = this.tryAgain.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
    this.nullState = this.nullState.bind(this);
    this.state = {
      hod: 0,
      winner: false
    }
  }

  handleClick(event){
    var hod = this.state.hod;
    if(event.target.innerHTML !== 'X' && event.target.innerHTML !== '0')
    {
          if( hod % 2 === 0)
          { event.target.style.color = '#545454';
            event.target.innerHTML = 'X';
            ++hod;
          }
          else {
            event.target.style.color = '#fff';
            event.target.innerHTML = '0';
            ++hod;
             

          }
    }
    
    this.checkWinner();

    this.setState({
      hod: hod
    })
  }


  nullState(){
    this.setState({
      hod: 0,
      winner: false
    })
  }

  checkWinner(){
        var all = document.getElementsByClassName('square');
				if(all[0].innerHTML === 'X' && all[1].innerHTML === 'X' && all[2].innerHTML === 'X'
         && !this.state.winner)
				{
            this.setState({winner: 'X'});
          	for(let i = 0;i<3;i++)
            all[i].style.background = '#C4C4C4';
           
            setTimeout( () => {
              document.querySelector('.x-win').classList.add('visible');
               for(let i = 0;i<9;i++){
                 //this.tryAgain();
						    all[i].innerHTML = '';
                all[i].style.background = '#14BDAC';
                 this.nullState();
               }
            }, 1000);
			
				   
				}
				if(all[3].innerHTML === 'X' && all[4].innerHTML === 'X' && all[5].innerHTML === 'X'
        && !this.state.winner)
				{ this.setState({winner: 'X'});
			  	for(let i = 3;i<6;i++)
            all[i].style.background = '#C4C4C4';
            setTimeout( () => {
              document.querySelector('.x-win').classList.add('visible');
               for(let i = 0;i<9;i++){
                 //this.tryAgain();
						    all[i].innerHTML = '';
                all[i].style.background = '#14BDAC';
                this.nullState();
               }
            }, 1000);
				}
				if(all[6].innerHTML === 'X' && all[7].innerHTML === 'X' && all[8].innerHTML === 'X'
          && !this.state.winner)
				{ this.setState({winner: 'X'});
					for(let i = 6;i<9;i++)
            all[i].style.background = '#C4C4C4';
            setTimeout( () => {
              document.querySelector('.x-win').classList.add('visible');
               for(let i = 0;i<9;i++){
                 //this.tryAgain();
						    all[i].innerHTML = '';
                all[i].style.background = '#14BDAC';
                this.nullState();
               }
            }, 1000);
				}
				if(all[0].innerHTML === 'X' && all[4].innerHTML === 'X' && all[8].innerHTML === 'X'
          && !this.state.winner)
				{
					for(let i = 0;i<9;i+=4)
            all[i].style.background = '#C4C4C4';
            setTimeout( () => {
               document.querySelector('.x-win').classList.add('visible');
               for(let i = 0;i<9;i++){
                 //this.tryAgain();
						    all[i].innerHTML = '';
                all[i].style.background = '#14BDAC';
                this.nullState();
               }
            }, 1000);
				}
        	if(all[2].innerHTML === 'X' && all[4].innerHTML === 'X' && all[6].innerHTML === 'X'
            && !this.state.winner)
				{ this.setState({winner: 'X'});
				for(let i = 2;i<7;i+=2)
            all[i].style.background = '#C4C4C4';
            setTimeout( () => {
            //  alert("Победили крестики!");
             document.querySelector('.x-win').classList.add('visible');
               for(let i = 0;i<9;i++){
                 //this.tryAgain();
						    all[i].innerHTML = '';
                all[i].style.background = '#14BDAC';
                this.nullState();
               }
            }, 1000);
				}

        if(all[0].innerHTML === 'X' && all[3].innerHTML === 'X' && all[6].innerHTML === 'X'
          && !this.state.winner)
				{ this.setState({winner: 'X'});
          	for(let i = 0;i<7;i+=3)
            all[i].style.background = '#C4C4C4';
           
            setTimeout( () => {
              document.querySelector('.x-win').classList.add('visible');
               for(let i = 0;i<9;i++){
                 //this.tryAgain();
						    all[i].innerHTML = '';
                all[i].style.background = '#14BDAC';
                 this.nullState();
               }
            }, 1000);
				}
        if(all[1].innerHTML === 'X' && all[4].innerHTML === 'X' && all[7].innerHTML === 'X'
          && !this.state.winner)
				{   this.setState({winner: 'X'});
          	for(let i = 1;i<8;i+=3)
            all[i].style.background = '#C4C4C4';
           
            setTimeout( () => {
              document.querySelector('.x-win').classList.add('visible');
               for(let i = 0;i<9;i++){
                 //this.tryAgain();
						    all[i].innerHTML = '';
                all[i].style.background = '#14BDAC';
                 this.nullState();
               }
            }, 1000);
				}

        if(all[2].innerHTML === 'X' && all[5].innerHTML === 'X' && all[8].innerHTML === 'X'
          && !this.state.winner)
				{   this.setState({winner: 'X'});
          	for(let i = 2;i<9;i+=3)
            all[i].style.background = '#C4C4C4';
           
            setTimeout( () => {
              document.querySelector('.x-win').classList.add('visible');
               for(let i = 0;i<9;i++){
                 //this.tryAgain();
						    all[i].innerHTML = '';
                all[i].style.background = '#14BDAC';
                 this.nullState();
               }
            }, 1000);
			
				   
				}

				if(all[0].innerHTML === '0' && all[1].innerHTML === '0' && all[2].innerHTML === '0'
          && !this.state.winner)
				{   this.setState({winner: '0'});
					for(let i = 0;i<3;i++)
            all[i].style.background = '#C4C4C4';
            setTimeout( () => {
                document.querySelector('.o-win').classList.add('visible');
             // alert("Победили нолики!");
               for(let i = 0;i<9;i++){
                // this.tryAgain();
						    all[i].innerHTML = '';
                all[i].style.background = '#14BDAC';
                this.nullState();
               }
            }, 1000);
				}
				if(all[3].innerHTML === '0' && all[4].innerHTML === '0' && all[5].innerHTML === '0'
        && !this.state.winner)
				{ 
          this.setState({winner: '0'})
				for(let i = 3;i<6;i++)
            all[i].style.background = '#C4C4C4';
            setTimeout( () => {
              document.querySelector('.o-win').classList.add('visible');
              //alert("Победили нолики!");
               for(let i = 0;i<9;i++){
                 //this.tryAgain();
						    all[i].innerHTML = '';
                all[i].style.background = '#14BDAC';
                this.nullState();
               }
            }, 1000);
				}
				if(all[6].innerHTML === '0' && all[7].innerHTML === '0' && all[8].innerHTML === '0'
          && !this.state.winner)
				{ this.setState({winner: '0'});
				for(let i = 6;i<9;i++)
            all[i].style.background = '#C4C4C4';
            setTimeout( () => {
              document.querySelector('.o-win').classList.add('visible');
             // alert("Победили нолики!");
               for(let i = 0;i<9;i++){
                // this.tryAgain();
						    all[i].innerHTML = '';
                all[i].style.background = '#14BDAC';
                this.nullState();
               }
            }, 1000);
				}
				if(all[0].innerHTML === '0' && all[4].innerHTML === '0' && all[8].innerHTML === '0'
          && !this.state.winner)
				{ this.setState({winner: '0'});
					for(let i = 0;i<9;i+=4)
            all[i].style.background = '#C4C4C4';
            setTimeout( () => {
              //alert("Победили нолики!");
              document.querySelector('.o-win').classList.add('visible');
               for(let i = 0;i<9;i++){
                // this.tryAgain();
						    all[i].innerHTML = '';
                all[i].style.background = '#14BDAC';
                this.nullState();
               }
            }, 1000);
				}
        	if(all[2].innerHTML === '0' && all[4].innerHTML === '0' && all[6].innerHTML === '0'
            && !this.state.winner)
				{ this.setState({winner: '0'});
					for(let i = 2;i<7;i+=2)
            all[i].style.background = '#C4C4C4';
            setTimeout( () => {
              document.querySelector('.o-win').classList.add('visible');
              //alert("Победили нолики!");
               for(let i = 0;i<9;i++){
                 //this.tryAgain();
						    all[i].innerHTML = '';
                all[i].style.background = '#14BDAC';
                this.nullState();
               }
            }, 1000);
				}
        if(all[0].innerHTML === '0' && all[3].innerHTML === '0' && all[6].innerHTML === '0'
          && !this.state.winner)
				{ this.setState({winner: '0'});
					for(let i = 0;i<7;i+=3)
            all[i].style.background = '#C4C4C4';
            setTimeout( () => {
              document.querySelector('.o-win').classList.add('visible');
              //alert("Победили нолики!");
               for(let i = 0;i<9;i++){
                 //this.tryAgain();
						    all[i].innerHTML = '';
                all[i].style.background = '#14BDAC';
                this.nullState();
               }
            }, 1000);
				}
        if(all[1].innerHTML === '0' && all[4].innerHTML === '0' && all[7].innerHTML === '0'
          && !this.state.winner)
				{ this.setState({winner: '0'});
					for(let i = 1;i<8;i+=3)
            all[i].style.background = '#C4C4C4';
            setTimeout( () => {
              document.querySelector('.o-win').classList.add('visible');
              //alert("Победили нолики!");
               for(let i = 0;i<9;i++){
                 //this.tryAgain();
						    all[i].innerHTML = '';
                all[i].style.background = '#14BDAC';
                this.nullState();
               }
            }, 1000);
				}
        if(all[2].innerHTML === '0' && all[5].innerHTML === '0' && all[8].innerHTML === '0'
          && !this.state.winner)
				{
          this.setState({winner: '0'});
					for(let i = 2;i<9;i+=3)
            all[i].style.background = '#C4C4C4';
            setTimeout( () => {
              document.querySelector('.o-win').classList.add('visible');
              //alert("Победили нолики!");
               for(let i = 0;i<9;i++){
                 //this.tryAgain();
						    all[i].innerHTML = '';
                all[i].style.background = '#14BDAC';
                this.nullState();
               }
            }, 1000);
				}			
  }

  tryAgain() {
    var all = document.getElementsByClassName('square');
    for(let i = 0;i<9;i++)
		all[i].innerHTML = '';
    this.nullState();
    document.querySelector('.o-win').classList.remove('visible');
    document.querySelector('.x-win').classList.remove('visible');
  }


  render(){

    return(
      <div className="game">
      
        <Board onClick = {this.handleClick}/>
        <div className="o-win">
          <h1 className = "o-winner">Победитель!</h1>
          </div>
           <div className="x-win">
          <h1 className = "x-winner">Победитель!</h1>
          </div>
        <button onClick = {this.tryAgain} className = "again">Try again</button> 
        

      </div>
      
    )
  }
}




export default Game;