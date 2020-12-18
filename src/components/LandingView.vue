<template>
	<div class="landing">
		<h1 class="landing__header">
			Айдентика для «Клевертех»
		</h1>
		<page-header />
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import PageHeader from '@/components/PageHeader.vue';

@Component({
	components: { PageHeader },
})

export default class LandingView extends Vue {}
</script>

<style scoped lang="scss">
.landing {
    &__header {
        font-size: 65px;
        line-height: 80px;
        margin: 30px 0 45px;
    }
}
</style>
