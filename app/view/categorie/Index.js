Ext.define('App.view.categorie.Index', {
    extend : 'Ext.panel.Panel',
    xtype : 'categorie',
    controller: 'categorie',
    requires : [
        'App.view.categorie.Grid',
        'App.view.categorie.Add',
        'App.view.categorie.Edit',
        'App.view.main.Uploader'
    ],
    title: 'Categories',
    iconCls: 'fa fa-tags',
    layout: 'border',
    items : [{
        xtype : 'categorieAdd',
        region: 'north'
    },{
        xtype : 'categorieEdit',
        region: 'north'
    },{
        xtype : 'categorielist',
        region: 'center'
    }],
    listeners : {
    }
});