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
		<div class="landing-block purple">
			<img
				src="../img/cards.jpg"
				alt="cards"
			/>
		</div>
		<div class="landing-block">
			<img
				src="../img/wall.jpg"
				alt="wall"
			/>
			<img
				src="../img/sign.jpg"
				alt="sign"
			/>
		</div>
		<div class="landing-block black">
			<img
				src="../img/billboard.jpg"
				alt="billboard"
				width="1000"
			/>
			<img
				src="../img/banner.jpg"
				alt="banner"
				height="666"
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
		overflow: hidden;
	}

	&-mockup {
		font-size: 100px;
		font-weight: bold;
		position: fixed;
		top: 50%;
    	left: 50%;
  		transform: translate3d(-50%,-50%,0);
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
}
</style>
