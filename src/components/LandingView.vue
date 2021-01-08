<template>
	<div class="landing">
		<div class="landing-block white">
			<div class="container">
				<div
					v-if="!isLogoScrolled"
					class="landing-mockup"
				>
					<i :class="`icon--${isScrolled ? 'bl' : 'clr'}main`"><span class="path1" /><span class="path2" /><span class="path3" /><span class="path4" /><span class="path5" /><span class="path6" /><span class="path7" /><span class="path8" /><span class="path9" /><span class="path10" /><span class="path11" /><span class="path12" /></i>
				</div>
			</div>
		</div>
		<div
			ref="black"
			class="landing-block black "
		>
			<div
				v-if="isLogoScrolled"
				class="landing-mockup_static"
			>
				<i class="icon--whmain"><span class="path1" /><span class="path2" /><span class="path3" /><span class="path4" /><span class="path5" /><span class="path6" /><span class="path7" /><span class="path8" /><span class="path9" /><span class="path10" /><span class="path11" /><span class="path12" /></i>
			</div>
		</div>
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
		<div class="landing-block white flex-space-between">
			<div class="line">
				<div class="line__text-container">
					<p class="line__running-text">
						Дизайн этой секции досутпен только по платной подписке
					</p>
					<p class="line__running-text">
						Дизайн этой секции досутпен только по платной подписке
					</p>
					<p class="line__running-text">
						Дизайн этой секции досутпен только по платной подписке
					</p>
					<p class="line__running-text">
						Дизайн этой секции досутпен только по платной подписке
					</p>
				</div>
			</div>
			<div class="static-mockup">
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
			<div class="line">
				<div class="line__text-container">
					<p class="line__running-text">
						Дизайн этой секции досутпен только по платной подписке
					</p>
					<p class="line__running-text">
						Дизайн этой секции досутпен только по платной подписке
					</p>
					<p class="line__running-text">
						Дизайн этой секции досутпен только по платной подписке
					</p>
					<p class="line__running-text">
						Дизайн этой секции досутпен только по платной подписке 
					</p>
				</div>
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
import { isInViewPort } from '../assets/scripts/helpers.js';

@Component()

export default class LandingView extends Vue {
	isLogoScrolled = false;
	isScrolled = false;

	mounted() {
		this.$nextTick(() => {
			window.addEventListener('scroll', this.scrollHandler);
		});
	}

	scrollHandler() {
		const isBlackinViewPort = isInViewPort(this.$refs.black).isWasInViewPort;

		this.isScrolled = window.scrollY > 0;

		if (isBlackinViewPort) {
			if (!this.isLogoScrolled) {
				this.isLogoScrolled = true;
			}
		} else {
			if (this.isLogoScrolled) {
				this.isLogoScrolled = false;
			}
		}
	}

	beforeDestroy() {
		window.removeEventListener('scroll', this.scrollHandler);
	}
}
</script>

<style scoped lang="scss">
.landing {
	&-block {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100vh;
	}

	&-mockup {
		font-size: 182px;
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		filter: invert(1);
		mix-blend-mode: difference;

		&_static {
			font-size: 182px;	
		}
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
		position: relative;
		font-size: 25px;
		height: 50px;
		text-transform: uppercase;
		background-color: $black;
		color: white;
		overflow: hidden;
		--offset: 10vw;
		--move-initial: calc(-15% + var(--offset));
		--move-final: calc(-30% - var(--offset));

		&__text-container {
			width: fit-content;
			display: flex;
			position: relative;
			transform: translate3d(var(--move-initial), 0, 0);
			animation: toRight 5s infinite linear;
		}

		&__running-text {
			margin: 0;
			padding: 0 2vw;
			white-space: nowrap;
		}

		&:first-child {
			top: 10px;
		}

		&:last-child {
			bottom: 10px;
		}
	}

	@keyframes toRight {
		0% {
        	transform: translate3d(var(--move-initial), 0, 0);
    	}

   		100% {
        	transform: translate3d(var(--move-final), 0, 0);
    	}
	}
}

.static-mockup {
	width: 100%;
}
</style>
