#grunt-insert-varjs

```
grunt.initConfig({
        varJs   : {
            fileone   : {
                output  : "/lib/config.js",
                keyName : "__varJs",
                vars    : {
                    version     : true,
                    name        : true,
                    age         : 18
                }
            },
            filetwo   : {
                output  : "/lib/configOther.js",
                keyName : "__John",
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
```

#options

###output
the js file output file

###vars
the variant you want to insert into js file
it should be a json
the value is true means replace to a md5 value

###keyName
the variant name you want to use in js files