<template>
	<div id="app">
		<page-header />
		<router-view />
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

export default class App extends Vue {}
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

</style>
