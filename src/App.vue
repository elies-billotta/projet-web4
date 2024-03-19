<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: "App",
    created() {
        if (localStorage.getItem("collection") === null || localStorage.getItem("sets") === null){
            localStorage.setItem("collection", JSON.stringify({ elements: [], filters : { search: "", themes: [], year: "2024", isRangeEnabled: false}}));
            localStorage.setItem("sets", JSON.stringify({filters : { search: "", themes: [], year: "2024", isRangeEnabled: false}}));
        }
    },
}
</script>