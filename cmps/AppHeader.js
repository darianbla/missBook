export default {
    template: `
        <header class="app-header full">
            <h1>XMAS Book Store!</h1>
            <nav>
                <a @click="setRout('HomePage')" title="Home" href="#"><i class="fa-solid fa-igloo"></i></a>
                <a @click="setRout('BookIndex')" href="#">Books</a>
                <a @click="setRout('AboutPage')" href="#">About</a>
            </nav>
        </header>
    `,
    methods: {
        setRout(route) {
            this.$emit('set-route', route)
        }
    }

}