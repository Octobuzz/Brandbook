<template>
	<div class="materials">
		<h1 class="materials__header">
			Материалы
		</h1>
		<page-header />
		<div class="container">
			<div>
				<h2 class="materials__headline">
					Лого
				</h2>
			</div>
			<div>
				<h2 class="materials__headline">
					Цвета
				</h2>
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
import PageHeader from '@/components/PageHeader.vue';
import FontView from '@/components/FontView.vue';
import PageFooter from '@/components/PageFooter';

@Component({
	components: { 
		PageHeader,
		FontView,
		PageFooter,
	},
})

export default class Materials extends Vue {}
</script>

<style scoped lang="scss">
.materials {
    &__header {
        font-size: 65px;
        line-height: 80px;
        margin: 30px 0 45px;
    }
    .container {
        width: 1100px;
		margin: 0 auto;
	}
}
</style>
