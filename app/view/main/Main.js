Ext.define('App.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'App.view.main.MainController',
        'App.view.main.Uploader',
        'App.view.main.Login',
        'App.view.main.MainModel',
        'App.view.categorie.Index',
        'App.view.word.Index'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 15,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 100
                }
            }
        }
    },

    items: [{
        xtype: 'categorie'
    }, {
        xtype: 'word'
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        items: [{
            xtype: 'button',
            text: 'Login',
            iconCls: 'x-fa fa-angle-right',
            handler: 'login'
        }, {
            xtype: 'button',
            text: 'Logout',
            iconCls: 'x-fa fa-angle-right',
            handler: function () {
                Ext.Ajax.request({
                    url: '/api_v1/logout',
                    method: 'get',
                    success: function(response, opts) {

                    },
                    failure: function(response, opts) {
                        Ext.Msg.alert('Status', 'failure.');
                    }
                });
            }
        }]
    }]
});
