<template>
	<div class="main">
		<div class="container">
			<landing-view />
		</div>
		<page-footer class="footer" />
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import LandingView from '@/components/LandingView';
import PageFooter from '@/components/PageFooter';

@Component({
	components: {
		LandingView,
		PageFooter
	}
})

export default class Identics extends Vue {}
</script>

<style scoped lang="scss">
</style>
