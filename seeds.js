var mongoose 	= require('mongoose'),
	Campground 	= require('./models/campground'),
	Comment 	= require('./models/comment');

var data = [
	{
		name: 'Cloud\'s Rest',
		image: 'https://media-cdn.tripadvisor.com/media/photo-s/01/9b/7e/aa/spruce-lake-rv-resort.jpg',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	},
	{
		name: 'Desert Mesa',
		image: 'https://media-cdn.tripadvisor.com/media/photo-s/01/31/10/36/mary-s-lake-campground.jpg',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	},
	{
		name: 'Cloud\'s Rest',
		image: 'http://www.estesparkinformation.com/wp-content/uploads/estes-park-campground-at-marys-lake.jpg',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	}
]

function seedDB() {
	// Remove all campgrounds
	Campground.remove({}, function(err) {
		if (err) {
			console.log(err);
		}
		console.log('Removed Campgrounds');

		// Add a few campgrounds
		data.forEach(function(seed) {
			Campground.create(seed, function(err, campground) {
				if (err) {
					console.log(err);
				} else {
					console.log('Added a campground');
					// Create a comment
					Comment.create({
						text: 'This place is great, but I wish there was internet',
						author: 'Homer'
					}, function(err, comment) {
						if (err) {
							console.log(err);
						} else {
							campground.comments.push(comment);
							campground.save();
							console.log('Created new comment');
						}
					});
				}
			});
		});
	});

	// Add a few comments
}
module.exports = seedDB;
