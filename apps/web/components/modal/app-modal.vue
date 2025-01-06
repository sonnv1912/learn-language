<template>
	<div
		v-for="(item, index) in modalStore.modals"
		:key="item.name"
		:class="
			clsx('fixed top-0 left-0 right-0 bottom-0', 'flex items-center justify-center', {
				'bg-black/50': index === modalStore.modals.length - 1,
			})
		"
		:style="{
			zIndex: 1000 + index,
		}"
	>
		<component
			:is="modal[item.name]"
			v-bind="item.props"
			class="transition-all animate-fadeIn"
		/>
	</div>
</template>

<script lang="ts" setup>
import { useModalStore } from '~/stores/modal-store';

const modalStore = useModalStore();
</script>

<style></style>
