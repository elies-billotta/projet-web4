<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: "App",
    created() {
        if (!localStorage.getItem("collection")) {
            localStorage.setItem("collection", JSON.stringify([]));
            localStorage.setItem("filters", JSON.stringify({ search: "", themes: [], year: "2024"}));
        }
    },
}
</script>