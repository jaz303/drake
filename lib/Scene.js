function Scene() {
    this.drawables = [];
}

Scene.prototype.addDrawable = function(d) {
    this.drawables.push(d);
}

Scene.prototype.clear = function(gl, color) {
    
    gl.clearColor(color.r, color.g, color.b, color.a);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

}

Scene.prototype.draw = function(gl, camera) {

    this.drawables.forEach(function(d) {
        d.draw(gl, camera);
    }, this);

}