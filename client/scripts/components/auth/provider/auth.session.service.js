'use strict';

angular.module('membershipApp')
    .factory('AuthServerProvider', function loginService($http, $cookieStore) {
        return {
            login: function(credentials) {
                return $http.post('/auth/local', {
                  email: credentials.email,
                  password: credentials.password
                }).
                success(function(data) {
                  $cookieStore.put('token', data.token);
                  return data;
                });
            },
            logout: function() {
                $cookieStore.remove('token');
            },
            getToken: function () {
                var token = $cookieStore.get('token');
                return token;
            },
            hasValidToken: function () {
                var token = this.getToken();
                return !!token;
            }
        };
    });
