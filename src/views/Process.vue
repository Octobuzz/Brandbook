<template>
	<div class="process">
		<h1 class="process__header">
			Процесс создания
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

export default class Process extends Vue {}
</script>

<style scoped lang="scss">
.process {
    &__header {
        font-size: 65px;
        line-height: 80px;
        margin: 30px 0 45px;
    }
}
</style>
