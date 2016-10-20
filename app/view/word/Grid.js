Ext.define('App.view.word.Grid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.util.*',
        'Ext.toolbar.Paging',
    ],
    xtype: 'wordlist',
    title: 'Words',
    store: "Word",
    reference: 'wordList',
    plugins : [{
        ptype : 'gridfilters'
    }],
    columns: [{
        text: 'Id',
        dataIndex: 'id',
        hidden: true
    }, {
        text: 'Word',
        dataIndex: 'word',
        flex: 1,
        filter : {
            type : 'string'
        }
    }, {
        text: 'Translate',
        dataIndex: 'translate',
        flex: 1,
        filter : {
            type : 'string'
        }
    }, {
        header: 'Image',
        dataIndex: 'imgUrl',
        renderer: function (value) {
            return '<img src="' + value + '"  height="80" width="80"/>';
        }
    }, {
        text: 'Data create',
        dataIndex: 'created_at',
        renderer: Ext.util.Format.dateRenderer('d-m-Y'),
        filter : {
            type : 'date'
        }
    }, {
        text: 'Date update',
        dataIndex: 'updated_at',
        renderer: Ext.util.Format.dateRenderer('d-m-Y'),
        filter : {
            type : 'date'
        }
    }, {
        header: 'Active',
        dataIndex: 'active',
        renderer: function (value) {
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
        iconCls: 'fa fa-plus',
        handler: 'onOpenAddForm'
    }, {
        text: 'Edit',
        tooltip: 'Edit categorie',
        iconCls: 'fa fa-pencil-square-o',
        reference: 'btnEdit',
        disabled: true,
        handler: 'onOpenEditForm'
    }, {
        text: 'Delete',
        tooltip: 'Delete categorie',
        iconCls: 'fa fa-pencil-square-o',
        reference: 'btnDelete',
        disabled: true,
        handler: 'onDelete'
    }],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'Word',
        dock: 'bottom',
        displayInfo: true
    }],
    listeners: {
        select: 'onItemSelected'
    }
})
;
