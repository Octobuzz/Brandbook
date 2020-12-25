<template>
	<div class="process">
		<h1 class="process__header">
			Процесс создания
		</h1>
		<page-header />
		<div class="container">
			<h2 class="process-headline">
				Пять стадий разработки айдентики компании
			</h2>
			<div class="process-actions">
				<button class="process-actions__button">
					Назад
				</button>
				<button class="process-actions__button">
					Далее
				</button>
			</div>
			<div class="process-block">
				<h3 class="process-block__title">
					Отрицание
				</h3>
				<ul class="process-block__list">
					<li><b>Шаг 1.</b>  Обсуждаем первичные ассоциации с клевером, технологиями</li>
					<li><b>Шаг 2.</b> Получаем логотипы перекрестка, Sims, Windows и свастики различных оттенков зеленого</li>
					<li><b>Шаг 3.</b> Изучаем логотипы IT-компаний, логотипы с клевером</li>
					<li><b>Шаг 4.</b> Понимаем, что все, что мы сделали, было уже сделано до нас. Печально</li>
					<li><b>Вывод:</b> Осознанно отказываемся от классических образов клевера, прямых ассоциаций с технологиями и зеленого цвета как доминирующего</li>
				</ul>
			</div>
			<div class="process-block">
				<h3 class="process-block__title">
					Гнев
				</h3>
				<ul class="process-block__list">
					<li><b>Шаг 1.</b> Пытаемся спрятать образ клевер изящнее, обыграть тех</li>
					<li><b>Шаг 2.</b> Понимаем, что название компании может изменится</li>
					<li><b>Шаг 3.</b> Гневаемся</li>
					<li><b>Шаг 4.</b> Забываем про шаг 2. Замечаем интересную деталь — в латинской букве "K" читается и "T". Думаем о монограмме.</li>
					<li><b>Шаг 5.</b> Понимаем, что читается также и "IT", что делает деталь еще интереснее</li>
					<li><b>Шаг 6.</b> Вспоминаем о шаге 2. Гневаемся</li>
					<li><b>Вывод:</b> Оставляем идею с монограммой как потенциально удачную на будущее. Ищем образ универсальнее</li>
				</ul>
			</div>
			<div class="process-block">
				<h3 class="process-block__title">
					Торг 
				</h3>
				<ul class="process-block__list">
					<li><b>Шаг 1.</b> За бог знает какие деньги и услуги просим знакомых нарисовать по одному логотипу</li>
					<li><b>Шаг 2.</b> Снова получаем свастики</li>
					<li><b>Шаг 3.</b> Уверенно идем в стадию 4</li>
					<li><b>Вывод:</b> Крепко задумываемся об идеологических убеждениях друзей. Возвращаемся к ноше графического дизайнера в одиночку</li>
				</ul>
			</div>
			<div class="process-block">
				<h3 class="process-block__title">
					Депрессия 
				</h3>
				<ul class="process-block__list">
					<li><b>Шаг 1.</b> Включаем плейлист саундтреков к Max Payne 2, грустно смотрим вдаль</li>
					<li><b>Вывод:</b> Хорошая игра</li>
				</ul>
			</div>
			<div class="process-block">
				<h3 class="process-block__title">
					Принятие
				</h3>
			</div>
		</div>
		<page-footer class="footer" />
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import PageHeader from '@/components/PageHeader.vue';
import PageFooter from '@/components/PageFooter';

@Component({
	components: { 
		PageHeader,
		PageFooter,
	},
})

export default class Process extends Vue {}
</script>

<style scoped lang="scss">
.process {
    &__header {
        font-size: 65px;
        line-height: 80px;
        margin: 30px 0 45px;
	}

	&-headline {
		font-size: 28px;
		font-weight: 400;
		margin-top: 50px;
	}

	&-actions {
		width: 100%;
		display: flex;
		justify-content: space-around;
		position: absolute;
		left: 50%;
		top: 100px;
		transform: translateX(-50%);

		&__button {
			font: inherit;
			background-color: transparent;
			border: none;

			&:hover {
				cursor: pointer;
			}
		}
	}

	&-block {
		&__title {
			display: inline-block;
			font-size: 24px;
			position: relative;

			&::before {
				content: '';
				width: 100%;
				height: 3px;
				background-color: $main;
				position: absolute;
				top: 0;
				left: 0;
			}

			&::after {
				content: '';
				width: 100%;
				height: 3px;
				background-color: $main;
				position: absolute;
				bottom: -3px;
				left: 0;
			}
		}

		&__list {
			list-style: none;
			text-align: left;
			& li {
				margin-bottom: 7px;
			}
		}
	}

	.container {
		width: 1100px;
		margin: 0 auto;
		margin-bottom: 100px;
		position: relative;
	}
}
</style>
