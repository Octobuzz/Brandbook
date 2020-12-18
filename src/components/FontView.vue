<template>
	<div class="font">
		<h2 class="font-headline">
			{{ typingHeadline }}
		</h2>
		<div class="font-block">
			<p>
				Фирменная гарнитура логотипа — <b>Trueno</b>  <br />
				Логотип набран начертанием <b>Regular</b> <br />
				Основная кириллическая гарнитура компании — <b>Open Sans</b>  
			</p>
			Была выбрана гарнитура без засечек, чтобы показать модернизм и простоту, к которым стремятся нынешние IT-гиганты.
			Также важно было найти определенное начертание буквы «К» (нижняя линия, отходящая от верхней) для сохранения возможности разработки дизайна монограммы в дальнейшем.
			Семейство Trueno удовлетворяет требованиям, а также имеет очень широкий выбор начертаний.
			Open Sans выбрана для кириллицы (особенность начертания буквы «К» сохранить не удалось). Впоследствии кириллическую гарнитуру можно изменить на более подходящую.
		</div>
		{{ typingInsult }}
		<div class="font-actions">
			<a href="#">Trueno</a>
			<a href="#">Open Sans</a>
		</div>
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

    &-headline {
        margin: 0;
    }

    &-block p {
        margin: 0;
    }
}
</style>
