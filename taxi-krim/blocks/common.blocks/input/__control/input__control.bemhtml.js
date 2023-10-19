block('input').elem('control')(
    tag()('input'),

    addAttrs()(function() {
        var input = this._input,
            attrs = {
                id: input.id,
                name: input.name,
                value: input.val,
                maxlength: input.maxLength,
                tabindex: input.tabIndex,
                placeholder: input.placeholder,
                readonly: input.readonly
            };

        input.autocomplete === false && (attrs.autocomplete = 'off');
        this.mods.disabled && (attrs.disabled = 'disabled');

        return attrs;
    })
);
