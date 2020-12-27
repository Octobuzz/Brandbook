<template>
	<div id="app">
		<router-view
			v-if="showContent"
			class="content"
		/>
		<div
			v-if="!showContent"
			class="modal"
		>
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
import { Vue, Component } from 'vue-property-decorator';

@Component

export default class App extends Vue {
  showContent = false;
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
    padding: 10px 25px;
    font-size: 24px;
    border: 2px solid $main;
  }

  &-text {
    margin: 0;
  }
}

</style>
