<template>
	<div id="app">
		<div v-if="showContent">
			<page-header />
			<router-view
				class="content"
			/>
		</div>
		<div
			v-if="!showContent"
			class="modal"
		>
			<img
				src="./img/caution.png"
				alt="Caution"
			/>
			<p class="modal-headline">
				Caution!
			</p>
			<p class="modal-text">
				Всю мою красоту можно разглядеть только на экране шириной 1100px и более <br />
				Спасибо за понимание <br />
				И да, времени на мобильную версию не хватило
			</p>
		</div>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import PageHeader from '@/components/PageHeader.vue';

@Component({
	components: {
		PageHeader
	}
})

export default class App extends Vue {
	showContent = true;
	mounted() {
  		window.addEventListener('resize', this.widthHandler);
	}

	beforeDestroy() {
  		window.removeEventListener('resize', this.widthHandler);
	}

	widthHandler() {
		const width = window.innerWidth;
		
		this.showContent = width >= 1100;
	}
}
</script>

<style lang="scss">
#app {
  font-family: $klever;
  text-align: center;
  color: $black;
}

body {
  margin: 0;
  font-size: 18px;
  line-height: 1.7;
}

.modal {
  font-size: 16px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-headline {
    font-size: 24px;
    position: relative;
  }

  &-text {
    margin: 0;
  }
}

</style>
