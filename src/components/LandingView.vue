<template>
	<div class="landing">
		<div class="landing-block">
			<div class="container">
				<div class="landing-mockup">
					ЛОГОТИП
				</div>
			</div>
		</div>
		<div class="landing-block black" />
		<div class="landing-block purple" />
		<div class="landing-block flex">
			<h1 class="landing-headline">
				Визитки
			</h1>
			<img
				src="../assets/img/cards.jpg"
				alt="cards"
			/>
		</div>
		<div class="landing-block flex">
			<h1 class="landing-headline">
				Вывески
			</h1>
			<img
				src="../assets/img/wall.jpg"
				alt="wall"
				height="414"
				class="m-r"
			/>
			<img
				src="../assets/img/sign.jpg"
				alt="sign"
			/>
		</div>
		<div class="landing-block black flex">
			<h1 class="landing-headline">
				Реклама
			</h1>
			<img
				src="../assets/img/billboard.jpg"
				alt="billboard"
				width="850"
				class="m-r"
			/>
			<img
				src="../assets/img/banner.jpg"
				alt="banner"
				height="566"
			/>
		</div>
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component()

export default class LandingView extends Vue {}
</script>

<style scoped lang="scss">
.landing {
	margin-top: 100px;

	&-block {
		width: 100%;
		height: 100vh;
	}

	&-headline {
		margin: 0;
		position: absolute;
		font-size: 80px;
		z-index: 2;

		&::after {
			content: '';
			height: 50px;
			width: 100%;
			background-color: $main;
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
			z-index: -1;
		}
	}

	.container {
		width: 1100px;
		margin: 0 auto;
	}

	.purple {
		background-color: $main;
		color: $white;
	}

	.black {
		background-color: $black;
		color: $white;
	}

	.flex {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.m-r {
		margin-right: 50px;
	}
}
</style>
