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
            editable : false,
            allowBlank : false,
            listeners: {
                el: {
                    click: 'onUploadFileAdd'
                }
            }
        }]
    }, {
        xtype: 'image',
        reference: 'imageAdd',
        src: 'resources/images/selectImage.jpg',
        width: 201,
        height: 201,
        margin: 10,
        style: 'border: 5px solid #0097a7',
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