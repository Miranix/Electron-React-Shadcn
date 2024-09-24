const fileDescription = {
    'electron-main-{{name}}': { // Main process directory
        render: 'Main process output directory',
        'index.js': 'Main process entry file',
        'logo.png': 'Project logo',
        'preload.js': 'Main process preload file',
    },
    'electron-renderer-{{name}}': { // Renderer process directory
        model: { // Data model  
        },
        src: { // Business logic
            common: { // Common methods
            },
            components: { // Shared components
                ui:"shadcn UI components"
            },
            views: { // Pages
            },
        }
    },
    scripts: 'Scaffolding'
}
