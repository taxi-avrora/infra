modules.define('input', (provide, Input) => {
  provide(Input.declMod({ modName: 'type', modVal: 'phone' }, {
    onSetMod: {
      js: {
        inited() {
          this._elem('control').domElem.mask('+7 (999) 999-99-99', {
            autoclear: false,
          });
        },
      },
    },

    getVal() {
      const val = this._elem('control').domElem.val();
      return val.replace(/\+7|[\s-()]/g, '');
    },
  }));
});
