modules.define('widgets', ['i-bem-dom', 'jquery'], function(provide, bemDom, $) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                this.vk = this._elem({ elem: 'item', modName: 'type', modVal: 'vk' });
                this.instagram = this._elem({ elem: 'item', modName: 'type', modVal: 'instagram' });
                this.width = $('body').width();
                this.vkWidth = 320;

                this.vk && VK.Widgets.Group("vk_groups", {mode: 4, width: this.vkWidth, height: "377"}, 140905188);
            }
        }
    }
}));

});
