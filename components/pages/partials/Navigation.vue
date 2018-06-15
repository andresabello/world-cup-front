<template>
    <header class="navigation-wrapper">
        <nav class="navbar navbar-dark bg-dark">
            <div class="row flex-xl-nowrap">
                <div class="col-4">
                    <a class="navbar-brand" href="/">Mundial FIFA 2018</a>
                </div>
                <div class="col-8">
                    <select name="Team" id="">
                        <option value=""></option>
                    </select>
                </div>
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
        .bg-dark {
            background-color:#11365A !important;
        }
    }
</style>
