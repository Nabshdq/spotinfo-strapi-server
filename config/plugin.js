module.exports = ({ env }) => ({
    // ...
    "vercel-deploy": {
        enabled: true,
    },
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('dg2wam4gd'),
                api_key: env('244181458272427'),
                api_secret: env('_TINPo_EGirT0u6-0COFIQKjieE'),
            },
            actionOptions: {
                upload: {},
                delete: {},
            },
        },
    },
    // ...
});

