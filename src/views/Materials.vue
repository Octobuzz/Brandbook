<template>
	<div class="materials">
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
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import FontView from '@/components/FontView.vue';

@Component({
	components: {
		FontView
	},
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
