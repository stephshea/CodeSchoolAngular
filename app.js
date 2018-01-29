(function() {
    //wrap entire application in a closure
    
    var app = angular.module('rentals', []);
    
//rentals is application name, array will hold dependencies
 app.controller('RentalsController', function() {
        //controllers used define app's behavior by defining functions and values
this.products = cars;
//must now be products not product
    });
      app.controller('myCtrl', ['$scope', function($scope) {
    
    $scope.rentCar = function() {
      if (this.product.available != 0) {
          this.product.booked++; 
        //   return this.product.available;
      }
    //   else if(this.product.available === 0){
    //     return "none";
    //   }
    }
    
  }]);
// app.controller("AvailableController", function(){
    // this.carsavailable = cars.available;
//   function rentCar(){
      
//       for(var i=0; i >0; i++) {
//   this.product.available = this.product.available--;
//   return this.product.available;
//   }
//   }

// function rentCar(){
//       for(var i=0; i >0; i++) {
//   this.product.booked++;
   
//   }return this.product.available;
// }

// function rentCar(){
//   console.log("click rent");   
//   this.product.booked = this.product.booked++;
//   console.log(this.product.booked);
//   return this.product.booked;
// }
  var available; 
var cars = [
{
    name: 'Hillary',
    type: 'econ',
    description: 'ummmmm...',
    images: "https://i.pinimg.com/originals/8a/42/cb/8a42cb45d69d7c5bf56e2fd8574566f6.jpg",
    price: 25,
    available: 100,
    booked: 90,
    howmany: function() {
        available = this.available-this.booked;
        if(available >0) {
        
        console.log(available);
        return available;
    }
    else if(available <= 0){
        this.noneAvailable = true;
        console.log(this.noneAvailable);
    //  return "Sorry none available :(";
    }
    },
    canRent: true,
    noneAvailable: false
},

{
    name: 'VanGo',
    type: 'van',
    description: 'impressive',
   images: 'https://www.huronvalleyarts.org/1/257/ImageLib/320_1_vanGoghVan1(1).jpg',
   price: 35,
   available: 150,
   booked: 143,
    howmany: function() {
        available = this.available-this.booked;
        if(available >0) {
        
        console.log(available);
        return available;
    }
    else if(available <= 0){
        this.noneAvailable = true;
        console.log(this.noneAvailable);
     return "Sorry none available :(";
    }
    },
    canRent: true,
    noneAvailable: false
},

{
    name: 'Flames',
    type: 'fancy',
    description: 'on fire',
    images: 'https://s-media-cache-ak0.pinimg.com/originals/fc/2f/9b/fc2f9bdca8277c22d842dcd0fab84a3e.jpg',
    price: 50,
    available: 100,
    booked: 96,
    howmany: function() {
        available = this.available-this.booked;
        if(available >0) {
        
        console.log(available);
        return available;
    }
    else if(available <= 0){
        this.noneAvailable = true;
        console.log(this.noneAvailable);
     return "Sorry none available :(";
    }
    },
    canRent: true,
    noneAvailable: false
}

];
})();