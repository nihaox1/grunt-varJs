'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        varJs   : {
            fileone   : {
                output  : "/lib/config.js",
                vars    : {
                    version     : true,
                    name        : true,
                    age         : 18
                }
            },
            filetwo   : {
                output  : "/lib/configOther.js",
                vars    : {
                    ver             : true,
                    fav             : true,
                    other           : {
                        friends     : [
                            { name : true , age : 20 },
                            { name : true , age : 21 },
                            { name : true , age : 22 }
                        ]
                    }
                }
            }
        }
    });

    // grunt.loadNpmTasks( "grunt-varJs" );
    grunt.loadTasks('tasks');
    grunt.registerTask( "default" , [ "varJs" ]);
};