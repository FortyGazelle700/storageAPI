class storageAPI {
	
	// Funcion on new storageAPI().
	constructor() {}
	
	// Will create/edit cookie with specified name.
	setCookie(name = null, value = null, ms = 0, path = '', relativeTime = true) {
		if (name == null) {console.error('cookieAPI: set() name cannot be null.');return false;}
		if (value == null) {console.error('cookieAPI: set() value cannot be null.');return false;}
		if (typeof name != 'string') {console.error('cookieAPI: set() name must be a string.');return false;}
		if (typeof value != 'string') {console.error('cookieAPI: set() value must be a string.');return false;}
		if (typeof ms != 'number') {console.error('cookieAPI: set() ms must be a number.');return false;}
		if (ms <= 0) {console.error('cookieAPI: set() ms cannot be less than 0.');return false;}
		const date = new Date();
		if (relativeTime) {
			date.setTime(date.getTime() + ms);
		} else {
			date.setTime(ms);
		}
		let expires = `expires=${date.toUTCString()}`;
		document.cookie = `${name}=${value};${expires};path=${path}"`;
		return true;
	}
	
	// Will get the value of cookie with specified name.
	getCookie(name = null) {
		if (name == null) {console.error('cookieAPI: get() name cannot be null.');return false;}
		if (typeof name != 'string') {console.error('cookieAPI: get() name must be a string.');return false;}
		let searchName = name + "=";
		let cookieList = document.cookie.split(';');
		let retVal = null;
		cookieList.forEach(cookie => {
			let newCookie = cookie.trim();
			if (newCookie.indexOf(name) == 0) {
				retVal = newCookie.substr(newCookie.indexOf('=')+1, newCookie.length);
			}
		});
		return retVal;
	}
	
	// Will get whether the cookie with specified name exists.
	isCookie(name = null) {
		if (name == null) {console.error('cookieAPI: get() name cannot be null.');return false;}
		if (typeof name != 'string') {console.error('cookieAPI: get() name must be a string.');return false;}
		return (this.getCookie(name) != null) ? true : false;
	}
	
	// Will remove the cookie with specified name.
	remCookie(name = null) {
		document.cookie = `${name}=deleting;max-age=0`;  
	}
	
	// Will create/edit a local storage item with specified name.
	setStorage(name = null, value = null) {
		if (name == null) {console.error('cookieAPI: set() name cannot be null.');return false;}
		if (value == null) {console.error('cookieAPI: set() value cannot be null.');return false;}
		if (typeof name != 'string') {console.error('cookieAPI: set() name must be a string.');return false;}
		if (typeof value != 'string') {console.error('cookieAPI: set() value must be a string.');return false;}
		
		localStorage.setItem(name, value);
	}
	
	// Will get the local storage item with specified name.
	getStorage(name = null) {
		return localStorage.getItem(name);
	}
	
	// Will get whether a local storage item exists with that name.
	isStorage(name = null) {
		return (localStorage.getItem(name) != null) ? true : false;
	}
	
	// Will delete the local storage item with specified name.
	remStorage(name = null) {
		localStorage.removeItem(name);
	}
}
