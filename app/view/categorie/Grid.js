Ext.define('App.view.categorie.Grid', {
    extend : 'Ext.grid.Panel',
    xtype : 'categorielist',
    title : 'Categories',
    store : "Categorie",
    reference : 'categorielist',
    columns : [{
        text : 'Id',
        dataIndex : 'id',
        hidden : true
    }, {
        text : 'Name',
        dataIndex : 'name',
        flex : 1
    }, {
        header : 'Image',
        dataIndex : 'imgUrl',
        renderer : function (value) {
            return '<img src="' + value + '"  height="80" width="80"/>';
        }
    }, {
        text : 'Data create',
        dataIndex : 'created_at',
        renderer : Ext.util.Format.dateRenderer('d-m-Y')
    }, {
        text : 'Date update',
        dataIndex : 'updated_at',
        renderer : Ext.util.Format.dateRenderer('d-m-Y')
    }, {
        header : 'Active',
        dataIndex : 'active',
        renderer : function (value) {
            if (value === 'T') {
                return '<i class="fa fa-toggle-on fa-2x" aria-hidden="true"></i>';
            } else {
                return '<i class="fa fa-toggle-off fa-2x" aria-hidden="true"></i>';
            }
        }
    }],
    tbar: [{
        text: 'Add',
        tooltip: 'Add new categorie',
        iconCls : 'fa fa-plus',
        handler: 'onShowAddCategorie'
    }, {
        text: 'Edit',
        tooltip: 'Edit categorie',
        iconCls : 'fa fa-pencil-square-o',
        reference: 'btnEdit',
        disabled: true,
        handler: 'onShowEditCategorie'
    }],

    listeners : {
        select : 'onItemSelected'
    }
});
