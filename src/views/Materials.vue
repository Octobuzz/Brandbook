<template>
	<div class="materials">
		<div class="container">
			<div>
				<logo-view />
			</div>
			<div>
				<colors-view />
			</div>
			<div>
				<font-view />
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

@Component({
	components: { 
		FontView,
		PageFooter,
		ColorsView,
		LogoView,
	}
})

export default class Materials extends Vue {}
</script>

<style scoped lang="scss">
.materials {

    .container {
        width: 1100px;
		margin: 0 auto;
	}
}
</style>
