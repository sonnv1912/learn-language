<template>
	<div
		:class="
			clsx(
				'bg-primary-500 h-screen overflow-y-auto overflow-x-hidden',
				'transition-all duration-300',
				'md:w-0',
				{
					'w-0': collapse,
					'lg:w-72': !collapse,
				},
			)
		"
	>
		<CompanySidebarInfo />

		<UDivider />

		<UserSidebarInfo />

		<UDivider />

		<Menu />
	</div>
</template>

<script lang="ts" setup>
import Menu from './menu.vue';
import clsx from 'clsx';

defineProps<{
	collapse: boolean;
}>();
</script>

<style></style>
