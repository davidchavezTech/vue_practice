const app = Vue.createApp({
    //data, functions
    data() {
        return {
            url: "http://davidchavez.tech",
            showBooks: true,
            books: [
                {
                    title: "The final Empire",
                    author: "Brandon Sanderson",
                    img: "assets/1.jpg",
                    isFav: true
                },
                {
                    title: "Las mujeres que aman demasiado",
                    author: "No me acuerdo",
                    img: "assets/2.jpg",
                    isFav: false
                }
            ],
            age: 45,
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleFavClass(book) {
            book.isFav = !book.isFav
        }
        // mouseEvent(e, data){
        //     console.log("yes")
        //     if(data) {
        //         this.x = e.offsetX
        //         this.y = e.offsetY
        //     }
        // }
    }
})

app.mount('#app')