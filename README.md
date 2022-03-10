# Storage API
## The API
This API makes it easier to edit, save, and delete cookies and local storage items.
### Initialization
    let storageAPI = new storageAPI();
#### Cookie Functions
##### Set Cookie
Will create/edit cookie with specified name

    storageAPI.setCookie(name, value, length, path, relativeTime);
- name
    - The name of the cookie
    - Type: String
    - Default: null
- value
    - The value of the cookie
    - Type: String
    - Default: null
- length
    - When the cookie will expire
    - In milliseconds
    - Type: Number
    - Default: 113529600000 ms (1 yr)
- path
    - Where the cookie will be acessable
    - Type: String
- relativeTime
    - Whether length is relative to the current time or set to UNIX time.
##### Get Cookie
Will get the value of cookie with specified name.

    storageAPI.getCookie(name);
- name
    - The name of the cookie
    - Type: String
    - Default: null
##### Cookie Exists
Will get whether the cookie with specified name exists.

    storageAPI.isCookie(name);
- name
    - The name of the cookie
    - Type: String
    - Default: null
##### Remove Cookie
Will remove the cookie with specified name.

    storageAPI.remCookie(name);
- name
    - The name of the cookie
#### LocalStorage Functions
##### Set Local Storage Item
Will create/edit a local storage item with specified name.

    storageAPI.setStorage(name, value);
- name
    - The name of the local storage item
    - Type: String
    - Default: null
- value
    - The value of the local storage item
    - Type: String
    - Default: null
##### Get Local Storage Item
Will get the value of local storage item with specified name.

    storageAPI.getStorage(name);
- name
    - The name of the local storage item
    - Type: String
    - Default: null
##### Local Storage Item Exists
Will get whether the local storage item with specified name exists.

    storageAPI.isStorage(name);
- name
    - The name of the local storage item
    - Type: String
    - Default: null
##### Remove Local Storage Item
Will remove the local storage item with specified name.

    storageAPI.remStorage(name);
- name
    - The name of the local storage item
    - Type: String
    - Default: null
