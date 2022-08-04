export default {
    data: () => {
        return {
            opacity: 0
        }
    },
    onPageScroll: function (e) {
        if(e.scrollTop < 200){
            this.opacity = Math.floor(e.scrollTop / 2) / 100;
        } else {
            this.opacity = 1;
        }
    }
}