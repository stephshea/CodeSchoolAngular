(function() {
	//wrap entire application in a closure
	var app = angular.module('rentals', []);
	//rentals is application name, array will hold dependencies
	app.controller('RentalsController', function() {
		//controllers used define app's behavior by defining functions and values
		this.products = cars;
		//added multiple cars so must now be products not product
	});
	app.controller('myCtrl', ['$scope', function($scope) {
		$scope.rentCar = function() {
			if (this.product.available != 0) {
				this.product.booked++;
			}
		}
	}]);
	var available;
	var cars = [{
		name: 'Hillary',
		type: 'Economy',
		description: 'ummmmm...',
		images: "https://i.pinimg.com/originals/8a/42/cb/8a42cb45d69d7c5bf56e2fd8574566f6.jpg",
		price: 25,
		available: 100,
		booked: 90,
		howmany: function() {
			available = this.available - this.booked;
			if (available > 0) {
				console.log(available);
				return available;
			} else if (available <= 0) {
				this.noneAvailable = true;
				console.log(this.noneAvailable);
				//  return "Sorry none available :(";
			}
		},
		canRent: true,
		noneAvailable: false
	}, {
		name: 'VanGo',
		type: 'Van',
		description: 'impressionable',
		images: 'https://www.huronvalleyarts.org/1/257/ImageLib/320_1_vanGoghVan1(1).jpg',
		price: 35,
		available: 150,
		booked: 143,
		howmany: function() {
			available = this.available - this.booked;
			if (available > 0) {
				console.log(available);
				return available;
			} else if (available <= 0) {
				this.noneAvailable = true;
				console.log(this.noneAvailable);
			}
		},
		canRent: true,
		noneAvailable: false
	}, {
		name: 'Flames',
		type: 'fancy',
		description: 'on fire',
		images: 'https://s-media-cache-ak0.pinimg.com/originals/fc/2f/9b/fc2f9bdca8277c22d842dcd0fab84a3e.jpg',
		price: 50,
		available: 100,
		booked: 96,
		howmany: function() {
			available = this.available - this.booked;
			if (available > 0) {
				console.log(available);
				return available;
			} else if (available <= 0) {
				this.noneAvailable = true;
				console.log(this.noneAvailable);
			}
		},
		canRent: true,
		noneAvailable: false
	}];
})();