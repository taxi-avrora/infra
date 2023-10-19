modules.define(
    "form",
    ["i-bem-dom", "input", "button", "attaches", "api", "jquery"],
    function (provide, bemDom, Input, Button, Attaches, Api, $) {
        var Form = bemDom.declBlock(this.name, {
            onSetMod: {
                js: {
                    inited() {
                        this.isAjax = this.hasMod("ajax");
                        this.submitButton = this.findChildBlock({
                            block: Button,
                            modName: "type",
                            modVal: "submit",
                        });
                        this.attaches = this.findChildBlocks(Attaches);
                        this.csrf = Api.getCsrf();
                        this.contentType = false;
                        this.processData = false;

                        // Отправка формы AJAX
                        this.isAjax &&
                            this._domEvents().on("submit", this._beforeSubmit);

                        // Очистка формы
                        this._elem("reset") &&
                            this._domEvents(this._elem("reset")).on(
                                "click",
                                this.reset
                            );
                    },
                },

                status: {
                    loaded: function () {
                        this._showLoad();
                    },

                    "": function () {
                        this._hideLoad();
                    },
                },
            },

            // Показать сообщение формы
            showMessage: function (type, content) {
                type = type || "warning";

                this._elem("message").setMod("visible").setMod("type", type);

                this._elem("message").domElem.html(content);
            },

            // Скрыть сообщение формы
            hideMessage: function () {
                this._elem("message").delMod("visible");
            },

            // Выделить ошибочные поля
            highlightFields: function (names) {
                if (!names) return false;

                (names || []).map((name) => {
                    var inputs = this.findChildBlocks(Input);
                    return (inputs || []).map((input) => {
                        return (
                            input.domElem.attr("name") === name &&
                            input.setMod("error")
                        );
                    });
                });
            },

            // Показать прелоадер
            _showLoad: function () {
                this.submitButton && this.submitButton.setMod("loaded");
            },

            // Скрыть прелоадер
            _hideLoad: function () {
                this.submitButton && this.submitButton.delMod("loaded");
            },

            // Перед отправкой
            _beforeSubmit: function (event) {
                event.preventDefault();

                // Запрет повторной отправки
                if (this.hasMod("status", "loaded")) return false;

                // Если в форме есть файлы, то формируем данные
                var data;
                if (this.attaches.size() > 0) {
                    data = new FormData();

                    // Добавляем все файлы
                    this.attaches.map((attach) => {
                        var files = attach.getFiles(),
                            name = attach.getName();

                        for (var i = 0; i < files.length; i++) {
                            data.append(name, files[i]);
                        }

                        return false;
                    });

                    // Добавляем все данные
                    var vals = this._getVals();
                    for (var name in vals) {
                        data.append(name, vals[name]);
                    }
                } else {
                    var method = this.domElem.attr("method");

                    data = this._getVals();
                    this.contentType = "application/json;charset=UTF-8";

                    if (method === "POST") {
                        data = JSON.stringify(data);
                    }

                    if (method === "GET") {
                        this.processData = true;
                    }
                }

                // Скрываем сообщение
                this.hideMessage();

                this._onSubmit(data);
            },

            // Отправка
            _onSubmit: function (data) {
                this.setMod("status", "loaded");

                var action = this.domElem.attr("action"),
                    method = this.domElem.attr("method");

                data._csrf = this.csrf;

                $.ajax({
                    url: `${action}?_csrf=${this.csrf}`,
                    method: method,
                    data: data,
                    cache: false,
                    contentType: this.contentType,
                    processData: this.processData,
                    success: this._onResponse.bind(this),
                    error: this._onError.bind(this),
                });
            },

            // Ответ формы
            _onResponse: function (data) {
                this.delMod("status");

                switch (data.status) {
                    case "success":
                        data.message &&
                            this.showMessage("success", data.message);

                        this._emit("success", data);
                        break;

                    case "error":
                        data.message &&
                            this.showMessage("warning", data.message);
                        data.fields && this.highlightFields(data.fields);

                        this._emit("error", data);
                        break;
                }

                this._emit("response", data);
            },

            // Ошибка
            _onError: function (err) {
                console.error(err);
                this._emit("error", err);
            },

            // Получить объект значений всех полей
            _getVals: function () {
                var data = this.domElem.serializeArray(),
                    res = {};

                data.map((item) => {
                    if (typeof res[item.name] === "undefined")
                        res[item.name] = [];
                    return res[item.name].push(item.value);
                });

                for (const name in res) {
                    if (res[name].length < 2) res[name] = res[name][0];
                }

                return res;
            },

            // Очистить форму
            reset() {
                this.domElem.trigger("reset");

                this.attaches.map((attach) => {
                    return attach._clear();
                });
            },
        });

        provide(Form);
    }
);
