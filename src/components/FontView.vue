<template>
	<div class="font">
		<div class="font-block">
			<div class="font-block__demo">
				<p>Demo</p>
			</div>
			<p class="font-block__display">
				ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijk <br />
				lmopqrstuvwxyz1234567890.,;:'"?!@#$%&*{(/|\)}
			</p>
		</div>
		<div class="font-block">
			<h2 class="font-headline">
				{{ typingHeadline }}
			</h2>
			<p class="font-block__text">
				Фирменная гарнитура логотипа — <b>Trueno</b>  <br />
				Логотип набран начертанием <b>Regular</b> <br />
				Кириллическая гарнитура компании — <b>Open Sans</b>  
			</p>
			Была выбрана гарнитура без засечек, чтобы показать модернизм и простоту, к которым стремятся нынешние IT-гиганты.
			Также важно было найти определенное начертание буквы «К» (нижняя линия, отходящая от верхней) для сохранения возможности разработки дизайна монограммы в дальнейшем.
			Семейство Trueno удовлетворяет требованиям, а также имеет очень широкий выбор начертаний. <br />
			Open Sans выбрана для кириллицы (особенность начертания буквы «К» сохранить не удалось). Впоследствии кириллическую гарнитуру можно изменить на более подходящую.
			<div class="font-actions">
				<a href="#">Trueno</a>
				<a
					href="https://fonts.google.com/specimen/Open+Sans?query=open" 
					target="_blank" 
					rel="noopener"
				>Open Sans</a>
			</div>
		</div>
		{{ typingInsult }}
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component

export default class FontView extends Vue {
  headline = 'Шрифт';
  typingHeadline = '';
  typingInsult = '';
  
  mounted() {
	  this.textTyping(this.headline, 'typingHeadline', 150);
	  this.textTyping('Ты самая красивая, а your mom gay', 'typingInsult', 100);
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
    align-items: flex-start;

    &-headline {
        font-size: 30px;
        margin: 0 0 30px;
    }

    &-block {
        padding: 25px 0;
        width: 50%;

        &:first-child {
            margin-right: 45px;
        }

        &__text {
            margin: 0 0 15px;
            line-height: 30px;
        }

        &__display {
            margin: 0;
            text-align: right;
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
                color: #6600cc;
            }

            &::before {
                content: "";
                position: absolute;
                top: -2px;
                width: 100%;
                height: 2px;
                background-color: #000000;
            }

            &::after {
                content: "";
                position: absolute;
                bottom: -2px;
                left: 0;
                width: 100%;
                height: 2px;
                background-color: #000000;
            }

            &:hover::before,
            &:hover::after {
                background-color: #6600cc;
            }
        }
    }
}
</style>
