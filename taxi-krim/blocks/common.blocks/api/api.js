modules.define(
    'api', ['jquery'],
    function(provide, $) {
        var csrf = null,
            user = null,
            url = '/api/';

        provide({
            // GET-запрос
            get(method, data) {
                return this._query(method, data, 'GET');
            },

            // POST-запрос
            post(method, data) {
                return this._query(method, data, 'POST');
            },

            // DELETE-запрос
            delete(method, data) {
                return this._query(method, data, 'DELETE');
            },

            // Запрос на сервер
            _query(method, data = {}, type) {
                // Формируем адрес
                var _url = url + method.replace('.', '/');

                // Добавляем csrf к запросу
                data._csrf = csrf;

                return $.ajax({
                    url: _url,
                    data: data,
                    dataType: 'JSON',
                    type: type || 'POST',
                    cache: false
                });
            },

            setCsrf(data) {
                csrf = data;
            },

            getCsrf() {
                return csrf;
            },

            setUser(data) {
                user = data;
            },

            getUser() {
                return user;
            }
        });

    });
