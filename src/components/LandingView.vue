<template>
	<div class="landing">
		<div class="landing-block white">
			<div class="container">
				<div class="landing-mockup ">
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
				width="700"
			/>
			<img
				src="../assets/img/card1.png"
				alt="cards"
				class="card"
				width="400"
			/>
			<img
				src="../assets/img/card2.png"
				alt="cards"
				width="400"
			/>
			<img
				src="../assets/img/card3.png"
				alt="cards"
				width="400"
			/>
			<img
				src="../assets/img/card4.png"
				alt="cards"
				class="card"
				width="400"
			/>
			<img
				src="../assets/img/card5.png"
				alt="cards"
				width="400"
			/>
			<img
				src="../assets/img/card6.png"
				alt="cards"
				class="card"
				width="400"
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
				Реклама <span class="subtext">здесь могла бы быть ваша +7 905 773-86-13</span>
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
		filter: invert(1);
		mix-blend-mode: difference;	
		margin: 0;
		position: absolute;
		font-size: 80px;
		z-index: 2;
		left: 100px;
		top: 150px;

		&:first-child {
			top: 30px;
		}

		&::after {
			content: '';
			height: 50px;
			width: 100%;
			background-color: $main;
			position: absolute;
			bottom: 10px;
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

	.white {
		background-color: $white;
	}
	
	.flex {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}

	.m-r {
		margin-right: 50px;
	}

	.card {
		margin-bottom: 60px;
	}

	.subtext { 
		display: inline-block;
		font-size: 14px;
		padding-right: 10px;
	}
}
</style>
