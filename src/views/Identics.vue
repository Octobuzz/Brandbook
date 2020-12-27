<template>
	<div class="main">
		<div>
			<landing-view />
		</div>
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import LandingView from '@/components/LandingView.vue';

@Component({
	components: {
		LandingView
	}
})

export default class Identics extends Vue {}
</script>

<style scoped lang="scss">
</style>
