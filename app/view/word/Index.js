Ext.define('App.view.word.Index', {
    extend : 'Ext.panel.Panel',
    xtype : 'word',
    controller: 'word',
    requires : [
        'App.view.word.Grid',
        'App.view.word.Add',
        'App.view.word.Edit',
        'Ext.toolbar.Paging'
    ],
    title: 'Words',
    iconCls: 'fa fa-language',
    layout: 'fit',
    items : [{
        xtype : 'wordAdd'
    },{
        xtype : 'wordEdit'
    },{
        xtype : 'wordlist',
        flex : 1
    }],
    listeners : {
    }
});