<template>
  <img :src="url" v-show="false">
</template>

<script>
export default {
	props: {
		website: {
			type: Object,
			required: true
		}
	},
	computed: {
		url() {
			return this.website.url.trim();
		}
	}
};
</script>

<style>

</style>
