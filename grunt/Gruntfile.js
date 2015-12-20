'use strict'
module.exports = function (grunt) {
    grunt.initConfig({
        pkga:grunt.file.readJSON('package.json'),
        par:{
            name : 'abc'
        },
        jshint:{
            files:['src/*.js']
        },
        concat: {
            options: {
                separator: ','
            },
            a:{
                options:{
                    banner: '/*fafaf*/\n',
                    separator: ';',
                },
                src:['src/aa.js','src/bb.js'],
                dest:'build/aabb.js'
            },
            b:{
                files:[
                    {src:['src/aaa.js'],dest:'build/aaa.min.js'},
                    {src:['src/bbb.js'],dest:'build/bbb.min.js'}
                ]
            }
        },
        uglify:{ //
            //options:{
            //    banner:'/*uglify banner*/\n'
            //},
            buildJson:{
                src:['src/jquery.jsonp.js'],
                dest:'build/jquery-jsonp.min.js'
            },
            buildOne:{
                dot: true, //
                src: ['src/*.js'],  //
                dest: 'build/<%= par.name%>.min.js' //??
            },
            buildTwo:{
                expand: true,
                cwd: 'src/',
                src: 'test/*.js',
                dest: 'build/',
                ext: '.txt',
                extDot: 'first',
                flatten: true,
                rename:'abc'
            },
            buildThree:{
                files: {
                    'build/all.min.js': ['<%= concat.a.dest %>']
                }
            },
            build4:{
                files:[
                    {src: [''],dest: '',nonull:true},
                    {src: [''],dest: '',filter:'isFile'}
                ]
            }
        },
        qunit:{

        },
        watch:{//??????????? ??tasks
            files:['<%= jshint.files%>'],
            tasks:['jshint']
        },
        clean:{
            src:'build/test'
        }
    });

    var testTask = function(){
        grunt.log.write('testTask...');//.ok();
    };

    var fstest = function() {
        var fs = require('fs');
        console.log(fs.readdirSync('src'));
    }

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('test', testTask);
    grunt.registerTask('fstest', fstest);
    //grunt.registerTask('testConcat','concat');
    //grunt.registerTask('default',['uglify']);
    //grunt.registerTask('jshint:foo',['jshint:foo']);
    grunt.registerTask('uglifyJson',['uglify:buildJson']);
};