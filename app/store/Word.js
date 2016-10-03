Ext.define('App.store.Word', {
    extend: 'Ext.data.Store',
    alias: 'store.Word',
    model: 'App.model.Word',
    autoLoad: true,
    pageSize: 30
});
