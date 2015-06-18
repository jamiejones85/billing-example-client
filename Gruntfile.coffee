module.exports = (grunt) ->

    grunt.initConfig
        pkg: grunt.file.readJSON 'package.json'

        # compile coffeescript to raw javascript.
        coffee:
            dist:
                expand: true
                flatten: true
                cwd: 'src/coffee'
                src: [ '*.coffee' ]
                dest: 'public/js'
                ext: '.js'

        # compile sass/scss.
        sass:
            dist:
                files:
                    'public/css/app.css': 'src/scss/app.scss'

        # copy node_modules to the public lib folder
        copy:
            main:
                files: [{
                    expand: true
                    flatten: true
                    src: 'node_modules/angular/angular.min.*'
                    dest: 'public/lib'
                }]

        # watch the source code for changes, trigger actions, then push built files to the server.
        watch:
            coffee:
                files: [ 'src/coffee/**/*.coffee' ]
                tasks: [ 'coffee' ]

            sass:
                files: [ 'src/scss/**/*.scss' ]
                tasks: [ 'sass' ]

        'http-server':
            'dev' :
                root: 'public/'
                port: 8282
                host: '0.0.0.0'
                runInBackground: false

    # load grunt modules/tasks.
    grunt.loadNpmTasks 'grunt-contrib-coffee'
    grunt.loadNpmTasks 'grunt-contrib-sass'
    grunt.loadNpmTasks 'grunt-contrib-watch'
    grunt.loadNpmTasks 'grunt-contrib-copy'
    grunt.loadNpmTasks 'grunt-http-server'

    # configure higher level grunt tasks.
    grunt.registerTask 'default', [
        'sass'
        'coffee'
        'copy'
        'watch'
    ]
    grunt.registerTask 'build', [
        'sass'
        'coffee'
        'copy',
        'http-server'
    ]
