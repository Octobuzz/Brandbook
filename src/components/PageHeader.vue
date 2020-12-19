<template>
	<div class="nav">
		<ul class="nav__list">
			<li
				class="nav__item"
				active
			>
				<router-link to="/">
					Главная
				</router-link>
			</li>
			<li class="nav__item">
				<router-link to="/process">
					Процесс
				</router-link>
			</li>
			<li class="nav__item">
				<router-link to="/materials">
					Материалы
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component

export default class PageHeader extends Vue {}
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

    &__item {
        margin-right: 20px;
        position: relative;
        &:last-child {
            margin-right: 0;
        }
    }

    &__item a {
        color: #000000;
        text-decoration: none;
        &:hover {
            transition: color .3s ease;
            color: $main;
        }
    }
}
</style>
