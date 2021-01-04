<template>
	<div class="landing">
		<div class="landing-block white">
			<div class="container">
				<div class="landing-mockup">
					ЛОГОТИП
				</div>
			</div>
		</div>
		<div class="landing-block black" />
		<div class="landing-block flex purple">
			<img
				src="../assets/img/cards.png"
				alt="cards"
				width="700"
			/>
			<img
				src="../assets/img/card1.png"
				alt="cards"
				class="card m-r"
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
			<div class="line">
				Дизайн этой секции досутпен только по платной подписке Дизайн этой секции досутпен только по платной подписке
			</div>
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
			<div class="line">
				Дизайн этой секции досутпен только по платной подписке Дизайн этой секции досутпен только по платной подписке
			</div>
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

	&-mockup {
		font-size: 100px;
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		filter: invert(1);
		mix-blend-mode: difference;	
	}

	&-headline {
		margin: 0;
		position: absolute;
		font-size: 80px;
		z-index: 2;
		left: 100px;
		top: 50px;

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
		margin-right: 70px;
	}

	.card {
		margin-bottom: 70px;
	}

	.subtext { 
		display: inline-block;
		font-size: 14px;
		padding-right: 10px;
	}

	.line {
		width: 100%;
		font-size: 25px;
		text-transform: uppercase;
		background-color: $black;
		color: white;
		position: absolute;

		&:first-child {
			top: 10px;
		}

		&:last-child {
			bottom: 10px;
		}
	}
}
</style>
