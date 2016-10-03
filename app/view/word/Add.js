Ext.define('App.view.word.Add', {
    extend : 'Ext.form.Panel',
    xtype : 'wordAdd',
    title : 'Add word',
    iconCls : 'fa fa-plus',
    layout : 'hbox',
    reference : 'wordAdd',
    hidden : true,
    items : [{
        xtype : 'panel',
        layout : 'form',
        flex : 1,
        items : [{
            xtype : 'combobox',
            fieldLabel : 'Categorie',
            emptyText : 'categorie',
            name : 'categorie_id',
            displayField : 'name',
            valueField : 'id',
            triggerAction : 'all',
            queryMode : 'local',
            forceSelection : true,
            editable : false,
            store : 'Categorie'
        }, {
            xtype : 'textfield',
            fieldLabel : 'Word',
            name : 'word',
            allowBlank : false
        }, {
            xtype : 'textfield',
            fieldLabel : 'Transcription',
            name : 'transcription'
        }, {
            xtype : 'textfield',
            fieldLabel : 'Translate',
            name : 'translate',
            allowBlank : false
        },{
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