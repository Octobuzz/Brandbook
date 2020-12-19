<template>
	<div class="colors">
		<div class="colors-block">
			<div class="demo">
				<div class="demo-block m-b-80 m-r-25">
					<div class="demo-block__color demo-block__color--main" />
					<div class="demo-block__text">
						Purple<br />
						102.0.204 <br />
						HEX: #6600cc
					</div>
				</div>
				<div class="demo-block m-b-80">
					<div class="demo-block__color demo-block__color--white" />
					<div class="demo-block__text">
						White <br />
						255.255.255 <br />
						HEX: #ffffff
					</div>
				</div>
				<div class="demo-block m-r-25">
					<div class="demo-block__color demo-block__color--black" />
					<div class="demo-block__text">
						Black <br />
						0.0.0 <br />
						HEX: #000000
					</div>
				</div>
				<div class="demo-block">
					<div class="demo-block__color demo-block__color--grey" />
					<div class="demo-block__text">
						Silver <br />
						202.202.202 <br />
						HEX: #cacaca
					</div>
				</div>
			</div>
		</div>
		<div class="colors-block">
			<h2 class="colors-headline">
				Цвета
			</h2>
		</div>
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component

export default class ColorsView extends Vue {}
</script>

<style scoped lang="scss">
.colors {
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    margin-bottom: 100px;

    &-headline {
        font-size: 30px;
        margin: 0 0 30px;
    }

    &-block {
        padding: 25px 0;
        width: 50%;

        &:first-child {
            margin-right: 45px;
            padding-bottom: 0;
            display: flex;
            flex-direction: column;
        }
    }

    .demo {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        padding: 15px 0 25px 0;

        &-block {
            display: flex;
            align-items: center;

            &__color {
                width: 90px;
                height: 90px;
                border-radius: 50%;
                position: relative;
                margin-right: 25px;

                &--black {
                    background-color: $black;
                }

                &--main {
                    background-color: $main;
                }

                &--white {
                    border: 1px solid $grey;

                    &::after {
                        content: '';
                        background-color: $white;
                        width: 35px;
                        height: 35px;
                        border-radius: 50%;
                        border: 1px solid $grey;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                }

                &--grey {
                    background-color: $grey;
                }

                &::after {
                    content: '';
                    background-color: $white;
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }

            &__text {
                width: 135px;
            }
        }
    }
}

.m-b-80 {
    margin-bottom: 80px;
}

.m-r-25 {
    margin-right: 25px;
}
</style>
