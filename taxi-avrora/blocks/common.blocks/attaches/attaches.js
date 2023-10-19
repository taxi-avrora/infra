modules.define(
    'attaches', ['i-bem-dom', 'BEMHTML'],
    function(provide, bemDom, bemHtml) {
        var Block = bemDom.declBlock(this.name, {
            onSetMod: {
                js: {
                    inited: function() {
                        this.files = [];

                        this._domEvents(this._elem('control'))
                            .on('change', this._onChange);
                    }
                }
            },

            _onChange(event) {
                var _files = event.target.files;

                // Добавляем файлов не больше чем указано
                for (var i = 0; i < this.params.count; i++) {
                    var file = _files[i];

                    file && this.files.push(file);
                }

                this._showAllPreviews();
            },

            // Показать превью всех загруженных файлов
            _showAllPreviews() {
                // Очищаем
                bemDom.destruct(this._elem('files').domElem, true);

                for (var i = 0; i < this.files.length; i++) {
                    var file = this.files[i];

                    // Проверяем кол-во файлов
                    this._checkCountFiles();

                    // Если картинка
                    if (file.type.match('image.*')) {
                        var FR = new FileReader();

                        FR.onload = this._onLoadFile(file);

                        FR.readAsDataURL(file);
                    } else {
                        this._showFileIcon(file);
                    }
                }
            },

            _onLoadFile(file) {
                var _this = this;
                return function(e) {
                    _this._showPreview(file.name, e.target.result);
                };
            },

            // Показать иконку файла
            _showFileIcon(file) {
                var ext = file.name.split('.').pop(),
                    previewFile = bemHtml.apply({
                        block: 'attaches',
                        elem: 'preview',
                        name: file.name,
                        content: `.${ext}`
                    });

                bemDom.append(this._elem('files').domElem, previewFile);

                this._initPreviews();
            },

            // Показать превью
            _showPreview(name, data) {
                var image = bemHtml.apply({
                    block: 'attaches',
                    elem: 'preview',
                    name: name,
                    content: {
                        block: 'image',
                        url: data,
                    }
                });

                bemDom.append(this._elem('files').domElem, image);

                this._initPreviews();
            },

            //
            _initPreviews() {
                this._events(this._elems('preview'))
                    .on('remove', (event, data) => {
                        this._removeFile(data.name);
                        this._checkCountFiles();
                    });
            },

            // Удалить файл
            _removeFile(name) {
                this.files.map((file, i) => {
                    if (file.name === name) {
                        this.files.splice(i, 1);
                    }
                    return true;
                });
            },

            // Проверить кол-во файлов
            _checkCountFiles() {
                var flag = this.files.length < this.params.count;

                flag && this._elem('label').delMod('hidden');
                !flag && this._elem('label').setMod('hidden');
            },

            // Возвращает все файлы
            getFiles() {
                return this.files;
            },

            // Возвращает имя контрола
            getName() {
                return this._elem('control').domElem.attr('name');
            }
        });

        provide(Block);
    }
);
