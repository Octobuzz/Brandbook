<template>
	<div class="nav">
		<h1 class="nav__header">
			{{ activeTab.name }}
		</h1>
		<ul class="nav__list">
			<li
				v-for="tab in tabs"
				:key="tab.code"
				class="nav__item"
				:class="{'nav__item_active': tab.isActive}"
				:active="tab.isActive"
				@click="chooseTab(tab.code)"
			>
				{{ tab.name }}
			</li>
		</ul>
	</div>
</template>

<script>
import { Vue, Component, Emit } from 'vue-property-decorator';

@Component

export default class PageHeader extends Vue {
  tabs = [
  	{
  		code: 'main',
  		name: 'Айдентика',
  		isActive: true,
  	},
  	{
  		code: 'process',
  		name: 'Процесс',
  		isActive: false,
  	},
  	{
  		code: 'materials',
  		name: 'Материалы',
  		isActive: false,
  	}
  ]

  mounted() {
  	if (!window.location.pathname.includes(this.activeTab.code)) {
  		this.$router.push(`/${this.activeTab.code}`);
  	}
  }

  get activeTab() {
  	return this.tabs.find(el => el.isActive);
  }

  chooseTab(tab) {
  	if (!window.location.pathname.includes(tab)) {
  	  this.tabs.map(el => el.code === tab ? el.isActive = true : el.isActive = false);
  		this.$router.push(`/${tab}`);
  	}
  }
}
</script>

<style scoped lang="scss">
.nav {
    &__list {
        display: flex;
        justify-content: space-between;
        list-style: none;
        width: 280px;
        margin: 0 auto;
        padding: 0;
        font-size: 16px;
    }

        &__header {
        font-size: 65px;
        line-height: 80px;
        margin: 30px 0 45px;
        }

    &__item {
        margin-right: 20px;
        position: relative;
        &:last-child {
            margin-right: 0;
        }

        &:hover {
            cursor: pointer;
            transition: color .3s ease;
            color: $main;
        }

        &_active {
            &:hover {
                cursor: default;
                color: $black;
            }
            &::after {
                content: '';
                position: absolute;
                bottom: -5px;
                left: 0;
                width: 100%;
                height: 2px;
                background-color: $main;
            }

            &::before {
                content: '';
                position: absolute;
                top: -3px;
                left: 0;
                width: 100%;
                height: 2px;
                background-color: $main;
            }
        }
    }
}
</style>
