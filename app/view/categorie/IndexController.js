Ext.define('App.view.categorie.IndexController.js', {
    extend : 'Ext.app.ViewController',

    alias : 'controller.categorie',

    onItemSelected : function (sender, record) {
        this.lookupReference('btnEdit').enable();
        this.lookupReference('btnDelete').enable();
    },

    onOpenAddForm : function () {
        if (this.lookupReference('categorieAdd').hidden) {
            this.lookupReference('categorieAdd').show();
            this.lookupReference('categorieList').hide();
        }
    },

    onOpenEditForm : function () {
        var form = this.lookupReference('categorieEdit');
        var grid = this.lookupReference('categorieList');
        var id = grid.getSelectionModel().getSelection()[0].data.id;
        var record = Ext.StoreMgr.lookup("Categorie").getById(id);
        var image = this.lookupReference('imageEdit');
        image.setSrc(record.data.imgUrl);
        form.getForm().setValues(record.data);
        ImgUrl.update('<img src="'+ record.data.imgUrl +'" style="width:201.33px;height:201.33px; border: solid 5px #0097a7;">');
        if(record.data.active === 'T') {
            form.getForm().findField('active').setValue(true);
        } else {
            form.getForm().findField('active').setValue(false);
        }

        form.show();
        grid.hide();
    },

    onAdd : function () {
        var form = this.lookupReference('categorieAdd');
        var categorie = Ext.create('App.model.Categorie', form.getForm().getValues());
        categorie.save({
            failure : function (record, operation) {
            },
            success : function (record, operation) {
            }
        });
        form.reset();
        Ext.StoreManager.lookup('Categorie').reload();

        if (!form.hidden) {
            form.hide();
            this.lookupReference('categorieList').show();
        }
    },

    onEdit : function () {
        var grid = this.lookupReference('categorieList');
        var form = this.lookupReference('categorieEdit');
        var formData = form.getForm().getValues();

        var categorie = Ext.create('App.model.Categorie', {
            'id' : formData.id
        });
        categorie.set('name', formData.name);
        categorie.set('imgUrl', formData.imgUrl);
        categorie.set('active', formData.active === 'on' ? 'T' : 'F');
        categorie.save();

        form.hide();
        grid.show();
        Ext.StoreManager.lookup('Categorie').reload();
    },

    onDelete : function () {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onDeleteConfirm', this);
    },

    onDeleteConfirm : function (choice) {
        if (choice === 'yes') {
            var grid = this.lookupReference('categorieList');
            var data = grid.getSelectionModel().getSelection()[0].data;
            var categorie = Ext.create('App.model.Categorie', data);

            categorie.erase({
                success : function (record, operation) {
                    var response = Ext.decode(operation._response.responseText);
                    if (!response.result) {
                        Ext.Msg.alert('Status', response.massage);
                    }
                    Ext.StoreManager.lookup('Categorie').reload();
                }
            });

        }
    },

    onCancelAdd : function () {
        if (!this.lookupReference('categorieAdd').hidden) {
            this.lookupReference('categorieAdd').reset();
            this.lookupReference('categorieAdd').hide();
            this.lookupReference('categorieList').show();
            this.lookupReference('imageAdd').setSrc('resources/images/selectImage.jpg');
        }
    },

    onCancelEdit : function () {
        var form = this.lookupReference('categorieEdit');
        var grid = this.lookupReference('categorieList');

        form.reset();
        form.hide();
        grid.show();
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
