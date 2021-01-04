<template>
	<div class="materials">
		<div class="container">
			<div>
				<logo-view />
			</div>
			<div class="materials-block">
				<colors-view />
			</div>
			<div
				ref="fontBlock"
				class="materials-block"
			>
				<font-view :isInViewPort="isInViewPort" />
			</div>
		</div>
		<page-footer class="footer" />
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import FontView from '@/components/FontView.vue';
import PageFooter from '@/components/PageFooter';
import ColorsView from '@/components/ColorsView';
import LogoView from '@/components/LogoView';
import { isInViewPort } from '../assets/scripts/helpers.js';

@Component({
	components: { 
		FontView,
		PageFooter,
		ColorsView,
		LogoView,
	}
})

export default class Materials extends Vue {
	isAnimationPlayed = false;
	isInViewPort = false;

	mounted() {
		this.$nextTick(() => {
			window.addEventListener('scroll', this.checkIsInViewPort);
		});
	}

	checkIsInViewPort() {
		this.isInViewPort = isInViewPort(this.$refs.fontBlock).isInViewPort;
	}

	beforeDestroy() {
		window.removeEventListener('scroll', this.checkIsInViewPort);
	}
}
</script>

<style scoped lang="scss">
.materials {

    .container {
        width: 1100px;
		margin: 0 auto;
	}
}
</style>
