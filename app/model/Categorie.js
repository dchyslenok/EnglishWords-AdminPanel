Ext.define('App.model.Categorie', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',  type: 'int'},
        {name: 'name',   type: 'string'},
        {name: 'imgUrl', type: 'string'},
        {name: 'active', type: 'string'},
        {name: 'created_at', type: 'date'},
        {name: 'created_at', type: 'date'}
    ],
    proxy: {
        type: 'rest',
        url : '/api_v1/categorie',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
