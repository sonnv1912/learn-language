<template>
	<div>
		<UCard>
			<template #header>
				<p>Phiên đăng nhập hết hạn</p>
			</template>

			<template #footer>
				<UButton
					:block="true"
					label="Đăng nhập"
					@click="
						() => {
							modalStore.closeModal('expired');

							navigateTo('/auth/login');
						}
					"
				/>
			</template>
		</UCard>
	</div>
</template>

<script lang="ts" setup>
import { useModalStore } from '~/stores/modal-store';

const modalStore = useModalStore();
</script>

<style></style>
