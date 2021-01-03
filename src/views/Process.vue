<template>
	<div class="process">
		<div class="container">
			<h2 class="process-headline">
				Пять стадий разработки айдентики компании
			</h2>
			<div class="process-actions">
				<button
					class="process-actions__button"
					@click="prevSlide"
				>
					Назад
				</button>
				<button
					class="process-actions__button"
					@click="nextSlide"
				>
					Далее
				</button>
			</div>
			<swiper
				ref="mySwiper"
				:options="swiperOptions"
			>
				<swiper-slide class="process-block">
					<h3 class="process-block__title">
						Отрицание
					</h3>
					<div class="process-block__content">
						<img
							src="../img/denial.jpeg"
							alt="Отрицание"
							class="process-block__img"
						/>
						<ul class="process-block__list">
							<li><b>Шаг 1.</b> Обсуждаем первичные ассоциации с клевером, технологиями</li>
							<li><b>Шаг 2.</b> Получаем логотипы перекрестка, Sims, Windows и свастики различных оттенков зеленого</li>
							<li><b>Шаг 3.</b> Изучаем логотипы IT-компаний, логотипы с клевером</li>
							<li><b>Шаг 4.</b> Понимаем, что все, что мы сделали, было уже сделано до нас. Печально</li>
							<li><b>Вывод:</b> Осознанно отказываемся от классических образов клевера, прямых ассоциаций с технологиями и зеленого цвета как доминирующего</li>
						</ul>
					</div>
				</swiper-slide>
				<swiper-slide class="process-block">
					<h3 class="process-block__title">
						Гнев
					</h3>
					<div class="process-block__content">
						<img
							src="../img/anger.png"
							alt="Гнев"
							class="process-block__img process-block__img--anger"
						/>
						<ul class="process-block__list">
							<li><b>Шаг 1.</b> Пытаемся заиспользовать образ клевера поинтереснее</li>
							<li><b>Шаг 2.</b> Понимаем, что бедное растение было замусолено дизайнерами и доморощенными визионерами донельзя</li>
							<li><b>Шаг 3.</b> Гневаемся (при должном умении можно тихохонько ругнуться)</li>
							<li><b>Шаг 4.</b> Забываем про шаг 2. Замечаем интересную деталь — в латинской букве "K" читается и "T". Думаем о монограмме.</li>
							<li><b>Шаг 5.</b> Понимаем, что читается также и "IT", что делает деталь еще интереснее</li>
							<li><b>Вывод:</b> Оставляем идею с монограммой как потенциально удачную на будущее</li>
						</ul>
					</div>
				</swiper-slide>
				<swiper-slide class="process-block">
					<h3 class="process-block__title">
						Торг
					</h3>
					<div class="process-block__content">
						<img
							src="../img/trade.png"
							alt="Торг"
							class="process-block__img"
						/>
						<ul class="process-block__list process-block__list--trade">
							<li><b>Шаг 1.</b> За бог знает какие деньги и услуги просим знакомых нарисовать по одному логотипу</li>
							<li><b>Шаг 2.</b> Снова получаем свастики</li>
							<li><b>Шаг 3.</b> Уверенно идем в стадию 4</li>
							<li><b>Вывод:</b> Крепко задумываемся об идеологических убеждениях друзей. Возвращаемся к ноше графического дизайнера в одиночку</li>
						</ul>
					</div>
				</swiper-slide>
				<swiper-slide class="process-block">
					<h3 class="process-block__title">
						Депрессия
					</h3>
					<div class="process-block__content">
						<img
							src="../img/depression.jpg"
							alt="Депрессия"
							class="process-block__img"
						/>
						<ul class="process-block__list process-block__list--depression">
							<li><b>Шаг 1.</b> Включаем плейлист саундтреков к Max Payne 2, грустно смотрим вдаль</li>
							<li><b>Вывод:</b> Хорошая игра</li>
						</ul>
					</div>
				</swiper-slide>
				<swiper-slide class="process-block">
					<h3 class="process-block__title">
						Принятие
					</h3>
					<div class="process-block__content">
						<img
							src="../img/accept.jpg"
							alt="Принятие"
							class="process-block__img process-block__img--accept"
						/>
						<ul class="process-block__list">
							<li><b>Шаг 1.</b>Возвращаемся к монограмме. Классная монограмма</li>
							<li><b>Шаг 2.</b>Собираем ассоциации с CEO и с самой компанией в изящный образ рычажка</li>
							<li><b>Шаг 3.</b>Понимаем, что шаг 1 и шаг 2 идеально совмещаются</li>
							<li><b>Шаг 4.</b>«НАКАНЕЦ-ТА!» - вскрикиваете вы, разливаясь в самодовольной улыбке, распугав сидящих за окном сорок</li>
							<li><b>Вывод:</b> «...Это увлекательный был аттракцион»</li>
						</ul>
					</div>
				</swiper-slide>
			</swiper>
		</div>
		<page-footer class="footer" />
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import PageFooter from '@/components/PageFooter';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';

@Component({
	components: {
		PageFooter,
		Swiper,
    	SwiperSlide,
	},
})

export default class Process extends Vue {
mySwiper = {};
swiperOptions = {
	allowTouchMove: false,
}

mounted() {
	this.$nextTick(() => {
		this.mySwiper = this.$refs.mySwiper.$swiper;
	});
}

nextSlide() {
	this.mySwiper.slideNext();
}

prevSlide() {
	this.mySwiper.slidePrev();
}

}
</script>

<style scoped lang="scss">
li, b {
  @include unselectable
}

.process {
    &__header {
        font-size: 65px;
        line-height: 80px;
        margin: 30px 0 45px;
	}

	&-headline {
		font-size: 28px;
		font-weight: 400;
		margin: 50px 0;
	}

	&-actions {
		width: 100%;
		display: flex;
		justify-content: space-around;
		position: absolute;
		left: 50%;
		top: 130px;
    transform: translateX(-50%);
    z-index: 10;

		&__button {
			font: inherit;
			background-color: transparent;
			border: none;
      position: relative;

			&:hover {
				cursor: pointer;
				color: $main;
			}

			&:first-child::before {
				content: url('../svg/chevron-left.svg');
				position: absolute;
				top: 5px;
				left: -20px;
			}

			&:last-child::after {
				content: url('../svg/chevron-right.svg');
				position: absolute;
				top: 6px;
				right: -20px;
			}
		}
	}

	&-block {
		margin-bottom: 100px;

		&__title {
			display: inline-block;
			font-size: 24px;
			position: relative;
			margin-bottom: 80px;

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
			padding: 15px 0 15px 40px;
			width: 670px;
			list-style: none;
			text-align: left;
			background-color: $white;

			&--depression {
				margin-top: -15px;
			}

			&--trade {
				padding: 42px 0 42px 40px;
			}

			& li {
				margin-bottom: 7px;
				&:last-child {
					margin-bottom: 0;
				}
			}
		}

		&__content {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		&__img {
			width: 400px;
			height: auto;
			margin-right: -85px;

			&--anger {
				width: 415px;
			}

			&--accept {
				margin-right: -40px;
				width: 455px;
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
