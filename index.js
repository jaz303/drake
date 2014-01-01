var glm = require('gl-matrix');

module.exports = {

    //
    // export gl-matrix

    mat2        : glm.mat2,
    mat3        : glm.mat3,
    mat4        : glm.mat4,
    quat        : glm.quat,
    vec2        : glm.vec2,
    vec3        : glm.vec3,
    vec4        : glm.vec4,
    
    //
    // utility functions

    deg2rad     : require('./lib/util/deg2rad'),

    //
    // drake
    
    Scene       : require('./lib/Scene')

};
