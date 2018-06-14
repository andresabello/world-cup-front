<template>
    <header class="navigation-wrapper">
        <nav class="navbar navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="/">Mundial FIFA 2018</a>
                <select name="Team" id="">
                    <option value=""></option>
                </select>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        mounted () {
            console.log('Only see this once logged in')
        }
    }
</script>

<style lang="scss">
    .navigation-wrapper {
        width: 100%;
    }
</style>
