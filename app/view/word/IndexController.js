Ext.define('App.view.word.IndexController.js', {
    extend : 'Ext.app.ViewController',

    alias : 'controller.word',

    onItemSelected : function (sender, record) {
        this.lookupReference('btnEdit').enable();

        // Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onShowAddWord : function () {
        this.lookupReference('wordAdd').show();
        this.lookupReference('wordlist').hide();
    },

    onCancelAddWord : function () {
        this.lookupReference('wordAdd').reset();
        this.lookupReference('wordAdd').hide();
        this.lookupReference('wordlist').show();
    },

    onSaveAddWord : function () {
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
            this.lookupReference('wordlist').show();
        }
    },

    onConfirm : function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
