Ext.define('App.view.categorie.Add', {
    extend : 'Ext.form.Panel',
    xtype : 'categorieAdd',
    title : 'Add categorie',
    iconCls : 'fa fa-plus',
    layout : 'hbox',
    reference : 'categorieAdd',
    hidden : true,
    items : [{
        xtype : 'panel',
        layout : 'form',
        flex : 1,
        items : [{
            xtype : 'textfield',
            fieldLabel : 'Categorie name',
            name : 'name',
            allowBlank : false
        }, {
            xtype : 'textfield',
            reference : 'imgUrlAdd',
            fieldLabel : 'Image url',
            name : 'imgUrl',
            allowBlank : false
        }]
    }, {
        xtype: 'container',
        reference: 'imageAdd',
        margin : 10,
        width: 202.33,
        height: 202.33,
        html: '<img src="http://englishwords/storage/image/FotorCreated.jpg" height="201.33" width="201.33">',
        listeners: {
            el: {
                click: 'onUploadFileAdd'
            }
        }
    }],
    buttons : [{
        xtype : 'button',
        text : 'Save',
        formBind : true,
        iconCls : 'fa fa-floppy-o',
        handler : 'onAdd'
    }, {
        xtype : 'button',
        text : 'Cancel',
        iconCls : 'fa fa-times',
        handler : 'onCancelAdd'
    }],
    listeners : {}
});