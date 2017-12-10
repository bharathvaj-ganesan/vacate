<template>
  <img :src="website.url" v-show="false">
</template>

<script>
export default {
	props: ['website']
};
</script>

<style>

</style>
