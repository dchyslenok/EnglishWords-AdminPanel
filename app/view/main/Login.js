Ext.define('App.view.main.Login', {
    extend: 'Ext.Window',
    title: 'Login',
    width: 450,
    height: 300,
    modal: true,
    layout: 'fit',
    constructor: function (callbeck) {
        var me = this;
        Ext.apply(this, {});
        me.items = [{
            xtype: 'form',
            itemId: 'LoginForm',
            layout: 'form',
            items: [{
                xtype: 'textfield',
                fieldLabel: 'Login',
                name: 'email',
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'Password',
                inputType: 'password',
                name: 'password',
                allowBlank: false
            }],
            buttons: [{
                xtype: 'button',
                text: 'Login',
                formBind: true,
                iconAlign: 'right',
                iconCls: 'x-fa fa-angle-right',
                handler: function () {
                    var form = me.getComponent('LoginForm');
                    Ext.Ajax.request({
                        url: '/api_v1/login',
                        params : form.getForm().getValues(),
                        success: function(response, opts) {
                            me.close();
                        },
                        failure: function(response, opts) {
                            Ext.Msg.alert('Status', 'failure.');
                        }
                    });
                }
            }, {
                xtype: 'button',
                text: 'Cancel',
                iconCls: 'fa fa-times',
                handler: function () {
                    me.close();
                }
            }]
        }];
        this.callParent(arguments);
    }
});

