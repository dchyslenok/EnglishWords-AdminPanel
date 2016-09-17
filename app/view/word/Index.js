Ext.define('App.view.word.Index', {
    extend : 'Ext.panel.Panel',
    xtype : 'word',
    controller: 'word',
    requires : [
        'App.view.word.Grid',
        'App.view.word.Add'
    ],
    title: 'Words',
    iconCls: 'fa fa-language',
    items : [{
        xtype : 'wordAdd'
    },{
        xtype : 'wordlist'
    }],
    listeners : {
    }
});