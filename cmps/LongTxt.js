export default {
    props: ['txt'],
    template: `
                 Description: {{readMoreLess}}
                 <button @click="isShown = !isShown">Read more</button>
                 
      `,
      data() {
          return {
              isShown: true,
          }
      },
   
    methods: {
  
    },
    computed: {
      readMoreLess() {
        if (this.txt.length > 100) {
          this.isShown = !isShown
          return this.txt.slice(0, 100)
          
        } 
          else return this.txt
      },
    },
  }