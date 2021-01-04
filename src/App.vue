<template>
	<div id="app">
		<div
			v-if="showContent"
			class="content"
		>
			<page-header />
			<router-view />
		</div>
		<div
			v-if="!showContent"
			class="modal"
		>
			<img
				src="./assets/img/caution.png"
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
		this.showContent = screen.width >= 1100;
  		window.addEventListener('resize', this.widthHandler);
	}

	beforeDestroy() {
  		window.removeEventListener('resize', this.widthHandler);
	}

	widthHandler() {
		this.showContent = screen.width >= 1100;
	}
}
</script>

<style lang="scss">
#app {
	height:100%;
  font-family: $klever;
  text-align: center;
  color: $black;
  background-color: $main;
}

body {
  min-height: 100%;
  width: 100%;		
  margin: 0;
  font-size: 18px;
  line-height: 1.7;
}

.modal {
  background-color: $white;	
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
.content {
	height: 100%;
	max-width: 2000px;
	margin: 0 auto;
	box-shadow: 10px 0 10px;
	background-color: $white;
}

</style>
