<template>
    <h2>{{ set_num }}</h2>
    <h3>{{ name }}</h3>
    <p> {{ num_parts }}</p>
    <p> {{ year }}</p>
    <img pictureUrl="" v-bind:src="pictureUrl"/>
</template>

<script>
import {getSetData} from '@/api/setAPI.js'

async function printData(setID) {
    let setData = await getSetData(setID);
    console.log(setData);
    return setData;
}

let data = await printData("75210-1");

export default {
    name : 'Lego',
    props: {
        set_num: {type: String, required: true, default: data.set_num},
        name: {type: String, required: true, default: data.name},
        num_parts : {type: String, required: true, default: data.num_parts},
        year : {type: String, required: true, default: data.year},
        pictureUrl:{type:String, default: data.set_img_url}
    }
}
</script>

<style>
img {
    width : 150px;
}
</style>