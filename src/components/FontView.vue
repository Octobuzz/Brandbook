<template>
	<div class="font">
		<h2 class="font-headline">
			Шрифт
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
		<div class="font-actions">
			<a href="#">Trueno</a>
			<a href="#">Open Sans</a>
		</div>
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component

export default class FontView extends Vue {}
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
