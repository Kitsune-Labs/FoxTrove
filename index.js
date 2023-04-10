// \?width=320&crop=smart&auto=webp&v=enabled&(s=[0-9a-f]{40})
// \?width=640&crop=smart&auto=webp&v=enabled&(s=[0-9a-f]{40})

const foxes = require("./foxes.json");

module.exports = {
	foxAmount: function() {
		return {
			Images: foxes.images.length
		}
	},
	getFox: function() {
		return foxes.images[Math.floor(Math.random() * foxes.images.length)];
	}
}