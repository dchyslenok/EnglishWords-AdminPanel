Ext.define('App.view.word.IndexController.js', {
    extend : 'Ext.app.ViewController',

    alias : 'controller.word',

    onItemSelected : function (sender, record) {
        this.lookupReference('btnEdit').enable();
    },

    onOpenAddForm : function () {
        this.lookupReference('wordAdd').show();
        this.lookupReference('wordList').hide();
    },

    onOpenEditForm : function () {
        var form = this.lookupReference('wordEdit');
        var grid = this.lookupReference('wordList');
        var id = grid.getSelectionModel().getSelection()[0].data.id;
        var record = Ext.StoreMgr.lookup("Word").getById(id);
        var image = this.lookupReference('imageEdit');
        image.setSrc(record.data.imgUrl);
        form.getForm().setValues(record.data);
        if(record.data.active === 'T') {
            form.getForm().findField('active').setValue(true);
        } else {
            form.getForm().findField('active').setValue(false);
        }

        form.show();
        grid.hide();
    },

    onCancelAdd : function () {
        this.lookupReference('wordAdd').reset();
        this.lookupReference('wordAdd').hide();
        this.lookupReference('wordList').show();
    },

    onCancelEdit : function () {
        this.lookupReference('wordEdit').reset();
        this.lookupReference('wordEdit').hide();
        this.lookupReference('wordList').show();
    },

    onAdd : function () {
        var form = this.lookupReference('wordAdd');
        var word = Ext.create('App.model.Word', form.getForm().getValues());
        word.save({
            failure : function (record, operation) {
                console.log('fail');
            },
            success : function (record, operation) {
                console.log('save');
            }
        });
        form.reset();
        Ext.StoreManager.lookup('Word').reload();

        if (!form.hidden) {
            form.hide();
            this.lookupReference('wordList').show();
        }
    },

    onDelete : function () {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onDeleteConfirm', this);
    },

    onDeleteConfirm : function (choice) {
        if (choice === 'yes') {
            var grid = this.lookupReference('wordList');
            var data = grid.getSelectionModel().getSelection()[0].data;
            var word = Ext.create('App.model.Word', data);

            word.erase({
                success : function (record, operation) {
                    var response = Ext.decode(operation._response.responseText);
                    if (!response.result) {
                        Ext.Msg.alert('Status', response.massage);
                    }
                }
            });
            Ext.StoreManager.lookup('Categorie').reload();
        }
    },

    onUploadFileEdit : function () {
        var image = this.lookupReference('imageEdit');
        var ImgUrl = this.lookupReference('imgUrlEdit');

        var uploader = Ext.create('App.view.main.Uploader', function (url) {
            image.setSrc(url);
            ImgUrl.setValue(url);
        });
        uploader.show();
    },

    onUploadFileAdd : function () {
        var image = this.lookupReference('imageAdd');
        var ImgUrl = this.lookupReference('imgUrlAdd');

        var uploader = Ext.create('App.view.main.Uploader', function (url) {
            image.setSrc(url);
            ImgUrl.setValue(url);
        });
        uploader.show();
    }
});
