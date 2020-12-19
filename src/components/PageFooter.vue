<template>
	<div class="footer">
		<div class="footer-block">
			<span>Made by O.Pastukhova</span>
			<span>Не является интеллектуальной собственностью</span>
		</div>
		<div class="footer-block">
			<span>Made for A.Babin</span>
			<span>2020</span> 
		</div>
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component

export default class PageFooter extends Vue {}
</script>

<style scoped lang="scss">
.footer {
    width: 100%;
    height: 60px;
    background-color: $black;
    color: $grey;
    font-weight: 300;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    box-sizing: border-box;
    position: relative;

    &::before {
        content: '';
        height: 1px;
        width: 95%;
        position: absolute;
        top: 31px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #444444;
    }

    &-block {
        display: flex;
        flex-direction: column;
        text-align: left;

        &:last-child {
            text-align: right;
        }
    }
}
</style>
