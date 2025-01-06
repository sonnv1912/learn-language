<template>
	<div>
		<UButton
			color="whiteOnGreen"
			:class="
				clsx('w-full', {
					'sticky top-0 z-10': active && data.items,
				})
			"
			:variant="active ? 'solid' : 'ghost'"
			:to="data.to"
			@click="onClick"
		>
			<template #leading>
				<UIcon
					:name="data.icon ? data.icon : 'tabler:circle'"
					class="w-5 h-5"
				/>
			</template>

			<p
				v-if="data.label"
				class="flex-1 text-left"
			>
				{{ $t(data.label) }}
			</p>

			<template
				v-if="data?.items"
				#trailing
			>
				<UIcon
					name="i-heroicons-chevron-right-20-solid"
					class="w-5 h-5 transition-transform duration-300"
					:class="[collapse && 'rotate-90']"
				/>
			</template>
		</UButton>

		<div
			v-if="data.items"
			:class="
				clsx('flex flex-col gap-1 mt-1 transition-all duration-300 overflow-hidden', {
					'max-h-0': collapse,
					'max-h-[2000px]': !collapse,
				})
			"
		>
			<MenuItem
				v-for="item in data.items"
				:key="item.key"
				:data="item"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
import clsx from 'clsx';
import type { Option } from '@repo/types';

const { data } = defineProps<{
	data: Option;
}>();

const route = useRoute();
const collapse = ref(true);

const checkParentHasChildActive = (payload: Option): boolean => {
	let result = false;
	let index = 0;

	if (!payload.items) {
		return payload.to === route.path || route.path.startsWith(payload.to + '/' || '');
	}

	while (payload.items && index < payload.items?.length) {
		const child = payload.items[index];

		const childActive = child.to === route.path || route.path.startsWith(child.to + '/' || '');

		if (childActive) {
			result = childActive;

			break;
		}

		if (child.items) {
			result = checkParentHasChildActive(child);
		}

		index++;
	}

	return result;
};

const active = computed(() => {
	return checkParentHasChildActive(data);
});

const onClick = () => {
	if (data.items) {
		collapse.value = !collapse.value;
	}

	data.action?.();
};

onMounted(() => {
	if (checkParentHasChildActive(data)) {
		collapse.value = false;
	}
});
</script>

<style></style>
