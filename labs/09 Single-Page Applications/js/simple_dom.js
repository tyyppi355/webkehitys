//console.log('page loaded');

console.log(document);


document.querySelector('#userForm input[type="email"]').onkeyup = function() {
	console.log('updating email');
	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p').innerHTML = email;
};

document.querySelector('#userForm input[type="text"]').onkeyup = function() {
	console.log('save');
	// get a DOM object representing a form field.
	var name = document.querySelector('#userForm input[type="text"]');
	var email = document.querySelector('#userForm input[type="email"]');
	console.log(name);
	console.log(email);

	document.querySelector('#summary h1').innerHTML = name.value;
	document.querySelector('#summary #yks').innerHTML = email.value;


	var data = document.querySelectorAll('#userForm input');
	console.log(data);
	var paragraphs = document.querySelectorAll('#summary #yks #kaks');
	console.log('found '+paragraphs.length+' p tags');

}

document.querySelector('#userForm input[type="password"]').onkeyup = function() {
	var password = document.querySelector('#userForm input[type="password"]');
	document.querySelector('#summary #kaks').innerHTML = password.value;
}