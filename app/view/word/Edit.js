Ext.define('App.view.word.Edit', {
    extend : 'Ext.form.Panel',
    xtype : 'wordEdit',
    title : 'Edit word',
    iconCls : 'fa fa-plus',
    reference : 'wordEdit',
    hidden : true,
    items : [{
        xtype : 'panel',
        layout : 'hbox',
        items : [{
            xtype : 'panel',
            layout : 'form',
            flex : 1,
            items : [{
                xtype : 'hidden',
                name : 'id'
            },{
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
                fieldLabel : 'Translate',
                name : 'translate',
                allowBlank : false
            }, {
                xtype : 'textfield',
                fieldLabel : 'Transcription',
                name : 'transcription'
            }, {
                xtype : 'textfield',
                reference : 'imgUrlEdit',
                fieldLabel : 'Image url',
                name : 'imgUrl',
                editable : false,
                allowBlank : false
            },{
                xtype : 'checkbox',
                fieldLabel : 'Active',
                name : 'active',
                value : false
            }]
        }, {
            xtype: 'image',
            reference: 'imageEdit',
            src: 'resources/images/selectImage.jpg',
            width: 201,
            height: 201,
            margin: 10,
            style: 'border: 5px solid #0097a7',
            listeners: {
                el: {
                    click: 'onUploadFileEdit'
                }
            }
        }]
    },{
        xtype : 'panel',
        items : [{
            xtype: 'container',
            layout: 'fit',
            items: [{
                xtype: 'htmleditor',
                fieldLabel : 'Page2',
                labelAlign: 'top',
                name: 'content'
            }]
        }]
    }],
    buttons : [{
        xtype : 'button',
        text : 'Save',
        formBind : true,
        iconCls : 'fa fa-floppy-o',
        handler : 'onEdit'
    }, {
        xtype : 'button',
        text : 'Cancel',
        iconCls : 'fa fa-times',
        handler : 'onCancelEdit'
    }],
    listeners : {}
});