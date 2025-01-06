<template>
	<div class="p-3 flex flex-col w-full gap-2">
		<MenuItem
			v-for="item in menu"
			:key="item.key"
			:data="item"
		/>
	</div>
</template>

<script lang="ts" setup>
import { menu } from '~/utils/menu';
</script>

<style></style>
