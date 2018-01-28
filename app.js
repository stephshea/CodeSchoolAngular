(function() {
    //wrap entire application in a closure
    
    var app = angular.module('rentals', [ ]);
//rentals is application name, array will hold dependencies

    app.controller('RentalsController', function() {
        //controllers used define app's behavior by defining functions and values
this.products = cars;
//must now be products not product
    });
    
var cars = [
{
    name: 'Hillary',
    type: 'econ',
    description: 'ummmmm...',
    images: "https://i.pinimg.com/originals/8a/42/cb/8a42cb45d69d7c5bf56e2fd8574566f6.jpg",
    price: 25,
    canRent: true,
    noneAvailable: false
},

{
    name: 'VanGo',
    type: 'midsize',
    description: 'impressive',
   images: 'https://www.huronvalleyarts.org/1/257/ImageLib/320_1_vanGoghVan1(1).jpg',
   price: 35,
    canRent: true,
    noneAvailable: false
},

{
    name: 'Flames',
    type: 'luxury',
    description: 'on fire',
    images: 'https://s-media-cache-ak0.pinimg.com/originals/fc/2f/9b/fc2f9bdca8277c22d842dcd0fab84a3e.jpg',
    price: 50,
    canRent: true,
    noneAvailable: false
}

];
})();