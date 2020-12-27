<template>
	<div class="font">
		<div class="font-block">
			<div class="font-block__demo-wrap">
				<p class="font-block__demo">
					{{ typingDemo }}
				</p>
				<p class="font-block__demo font-block__demo-bold">
					{{ typingDemo }}
				</p>
				<p class="font-block__demo font-block__demo-light">
					{{ typingDemo }}
				</p>
				<p class="font-block__demo font-block__demo-outline">
					{{ typingDemo }}
				</p>
			</div>
			<p class="font-block__display">
				ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijk <br />
				lmopqrstuvwxyz1234567890.,;:'"?!@#$%&*{(/|\)}
			</p>
		</div>
		<div class="font-block">
			<h2 class="font-headline">
				Шрифт
			</h2>
			<p class="font-block__text">
				Фирменная гарнитура логотипа — <b>Trueno</b>  <br />
				Логотип набран начертанием <b>Regular</b> <br />
				Кириллическая гарнитура компании — <b>Open Sans</b>
			</p>
			Была выбрана гарнитура без засечек, чтобы показать модернизм и простоту, к которым стремятся нынешние <br /> IT-гиганты.
			Также важно было найти определенное начертание буквы «К» (нижняя линия, отходящая от верхней) для сохранения возможности разработки дизайна монограммы в дальнейшем.
			Семейство Trueno удовлетворяет требованиям, а также имеет очень широкий выбор начертаний. <br />
			Open Sans выбрана для кириллицы (особенность начертания буквы «К» сохранить не удалось). Впоследствии кириллическую гарнитуру можно изменить на более подходящую.
			<div class="font-actions">
				<a
					:href="require('../assets/sources/trueno.zip')"
					download="Trueno.zip"
				>Trueno</a>
				<a
					:href="require('../assets/sources/Open_Sans.zip')"
					download="Open-sans.zip"
				>Open Sans</a>
			</div>
		</div>
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component

export default class FontView extends Vue {
  demo = 'KleverTech';
  typingDemo = '';

  mounted() {
	  this.textTyping(this.demo, 'typingDemo', 300);
  }

  textTyping(text, stateTextVar, delay=150) {
  	let counter = 0;
  	let timer;

  	if (counter <= text.length) {
  		timer = setInterval(() => {
  			this[stateTextVar] = text.substr(0, counter);
			  counter++;
  		}, delay);
  	} else if (timer) {
  		clearInterval(timer);
  	}
  }
}
</script>

<style scoped lang="scss">
.font {
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;

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
            align-items: center;
            justify-content: space-between;
        }

        &__text {
            margin: 0 0 15px;
            line-height: 30px;
        }

        &__display {
            height: 60px;
            margin: 0;
            text-align: center;
            line-height: 30px;
        }

        &__demo {
            margin: 0;
            font-size: 80px;
            line-height: 120px;

            &-light {
                font-weight: 300;
            }

            &-bold {
                color: $main;
                font-weight: 600;
            }

            &-outline {
                font-weight: 700;
            }
        }
    }

    &-actions {
        margin-top: 30px;

        & a {
            display: inline-block;
            color: inherit;
            text-decoration: none;
            position: relative;

            &:first-child {
                margin-right: 35px;

                &::after {
                    content: "Архив";
                    font-size: 12px;
                    line-height: 2;
                }
            }

            &:last-child::after {
                content: "Ссылка";
                position: absolute;
                font-size: 12px;
                line-height: 2;
            }

            &:hover {
                color: $main;
            }

            &::before {
                content: "";
                position: absolute;
                top: -2px;
                width: 100%;
                height: 2px;
                background-color: $black;
            }

            &::after {
                content: "";
                position: absolute;
                bottom: -5px;
                left: 0;
                width: 100%;
                height: 2px;
                background-color: $black;
            }

            &:hover::before,
            &:hover::after {
                background-color: $main;
            }
        }
    }
}
</style>
