// fetch('https://hn.algolia.com/api/v1/search?query=react&tags=story')
// .then(function(response) {
//   return response.blob();
// })
// .then(function(myBlob) {
//   var objectURL = URL.createObjectURL(myBlob);
//   // myImage.src = objectURL;
// });

fetch('https://hn.algolia.com/api/v1/search?query=react&tags=story', {
	method: 'get'
}).then(function(response) {
	console.log(response);
}).catch(function(err) {
	console.log(err);
});
