window.http = new function() {

  var HTTP_SUCCESS_CODE = 200;

  this.post = function(url, payload, headers) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.onload = function() {
        if (xhr.status === HTTP_SUCCESS_CODE) {
          resolve(xhr);
        } else {
          reject(xhr.status);
        }
      };
      xhr.onerror = function() {
        reject(xhr.status);
      };
      xhr.open("POST", url);
      if (headers) {
        for (var key in headers) {
          if (headers.hasOwnProperty(key)) {
            xhr.setRequestHeader(key, headers[key]);
          }
        }
      }
      xhr.send(payload);
    });
  };

  this.get = function(url, responseType, timeout) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.onload = function() {
        if (xhr.status === HTTP_SUCCESS_CODE) {
          resolve(xhr);
        } else {
          reject(xhr.status);
        }
      };
      xhr.onerror = function() {
        reject(xhr.status);
      };
      xhr.open("GET", url);
      if (responseType) {
        xhr.responseType = responseType;
      }
      if (timeout) {
        xhr.timeout = timeout;
      }
      xhr.send();
    });
  };

};