AFRAME.registerComponent('my-color', {
    schema : {
        color : { default : '#DDAADD' }
    },
    init : function () {
        this.el.setAttribute('material', 'color', this.data.color)
    }
});
