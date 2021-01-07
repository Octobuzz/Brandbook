<template>
	<div class="logo">
		<div class="logo-block">
			<div class="demo">
				<img
					src="../assets/img/logo.png"
					alt="logo"
					class="logo"
				/>
				<img
					src="../assets/img/logo-black.png"
					alt="logo"
					class="logo"
				/>
				<img
					src="../assets/img/logo-white.png"
					alt="logo"
					class="logo white"
				/>
				<div class="demo-block">
					<img
						src="../assets/img/mainlogo.png"
						alt="logo"
						class="main-logo logo"
					/>
					<img
						src="../assets/img/mainlogoblack.png"
						alt="logo"
						class="main-logo logo"
						width="500"
					/>
					<img
						src="../assets/img/mainlogowhite.png"
						alt="logo"
						class="main-logo logo white"
						width="500"
					/>
				</div>
			</div>
		</div>
		<div class="logo-block">
			<h2 class="logo-headline">
				Лого
			</h2>
			<p>
				Главный образ логотипа — <b>K и Т, читающиеся одна в другой</b>  <br />
				В дальнейшем можно добавить детали для считывания букв "IT"
			</p>
			Лого представляет собой достаточно простую минималистичную форму, образ можно выбрать самому.
			Оставить только монограмму, или же использовать то, что это похоже и на компьютер, и на знак реплики в графических романах и много всего остального.
			Мне показалось интересным, что Т - похожа на рычаг, а сама форма на гимнастический трамплин. 
			В дальнейшей работе я играла именно с этими образами, но можно выбрать другие. 
			Обе вещи олицетворяют некий подъем, что достаточно интересно переложить на характер самой компании. 
			Усилиями KleverTech бизнес-идея клиента может получить реализацию,
			а сам проект - выход в онлайн и новые охваты, подняться на новый уровень. <br />
			KleverTech - lever for your business. <br /> 
			Использовала это как импровизированный слоган, его можно заменить на любой другой. 
			Но на английском получается весьма интересное созвучие с названием.
			Трамплин же олицетворяет энергию и силу, с которой компания стремится к развитию и самосовершеностованию. <br />
			Накапливая опыт и компетенцию, с каждым "прыжком" она поднимается все выше.
			<p class="logo-block__text">
				Текстовая часть логотипа откернена вручную, поэтому рекоммендуется использовать иконку, а не набирать ее текстом. <br />
				Расстояние между лого и текстом равно строчной букве "f" соответсвующего шрифта. <br />
				Допускается использование лого в монохромном белом или черном варианте. <br />
			</p>
			<a
				href="#"
				class="logo-block__button"
			>Исходные файлы</a>
		</div>
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component

export default class LogoView extends Vue {}
</script>

<style scoped lang="scss">
.logo {
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    margin: 50px 0;

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

        &__text {
            margin-bottom: 35px;
        }

        &__button {
            display: inline-block;
            color: inherit;
            text-decoration: none;
            position: relative;

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

            &::after {
                content: "Архив";
                font-size: 12px;
                line-height: 2;
            }

            &:hover::before,
            &:hover::after {
                background-color: $main;
            }
        }
    }

    .demo {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        padding: 15px 0 25px 0;

        &-block {
            width: 100%;
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }
    }

    .main-logo {
        width: 200px;
        height: auto;
    }

    .logo {
        padding: 20px;
        box-sizing: border-box;
        margin: 0;
        display: block;

        &:nth-last-child(1),
        &:nth-last-child(2),
        &:nth-last-child(3) {
            padding: 10px;
        }

    }

    .white {
        background-color: $black;
    }
}
</style>
