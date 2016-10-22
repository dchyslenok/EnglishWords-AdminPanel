Ext.define('App.store.Word', {
    extend: 'Ext.data.Store',
    alias: 'store.Word',
    model: 'App.model.Word',
    autoLoad: true,
    remoteFilter : true,
    pageSize: 30
});
