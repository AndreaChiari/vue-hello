console.log('VUE OK',Vue )

const app = Vue.createApp({
    data(){
        return { 
            message: 'Hello 2023 !!!',
            image: 'https://parade.com/.image/t_share/MTkzNzk5NDEyNzA1NjY2NTQ0/happy-new-year-2023.jpg',
            textRed: 'text-danger',
           
        }
        }
    })
    
    app.mount('#root')
