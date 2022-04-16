import React, { Component } from 'react';
import Search from '../components/SearchBox';
export default class FoodBox extends Component {
    constructor() {
        super();
        this.state = { 
          snacks:[
            {name:"Chocolate", cal:"208", img:"https://spng.pngfind.com/pngs/s/53-533995_chocolate-bar-top-view-hd-png-download.png"},
            {name:"Pizza", cal:"266", img:"https://png.pngtree.com/png-clipart/20201209/original/pngtree-cheese-pizza-png-image_5615607.jpg"},
            {name:"Orange", cal:"47",img:"https://png.pngtree.com/png-vector/20210513/ourmid/pngtree-orange-delicious-png-image_3279412.jpg"},
            {name:"Mango", cal:"60", img:"https://purepng.com/public/uploads/large/purepng.com-mangomangofruithalvedfrontalfullsweetfresh-481521564634qp959.png"},
            {name:"Milkshake", cal:"112", img:"https://png.pngitem.com/pimgs/s/126-1267420_milkshake-png-transparent-file-milkshake-png-png-download.png"},
            {name:"Noodles", cal:"138", img:"https://www.pngall.com/wp-content/uploads/5/Chinese-Noodles-PNG-Download-Image.png"},
            {name:"Banana", cal:"89", img:"https://www.pngall.com/wp-content/uploads/2016/04/Banana-Free-Download-PNG.png"},
            {name:"Grapes", cal:"67", img:"https://www.freepnglogos.com/uploads/grapes-png/grapes-dimidwa-12.png"}
          ]
         }
    }
 render() { 
  return ( 
  <Search snacks={this.state.snacks}/>
  );
 }
}