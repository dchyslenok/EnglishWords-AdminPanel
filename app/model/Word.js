Ext.define('App.model.Word', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',  type: 'int'},
        {name: 'categorie_id',  type: 'int'},
        {name: 'word',   type: 'string'},
        {name: 'translate',   type: 'string'},
        {name: 'transcription',   type: 'string'},
        {name: 'imgUrl', type: 'string'},
        {name: 'active', type: 'string'},
        {name: 'created_at', type: 'date'},
        {name: 'created_at', type: 'date'}
    ],

    proxy: {
        type: 'rest',
        url : 'http://englishwords/api_v1/word'
    }
});