import { ref } from "vue";
import { HasRemove, type Banner, type Options } from ".";

const item = ref<(Banner & HasRemove) | null>(null);

export const useBanner = () => {
	const remove = () => {
		item.value = null;
	};

	const banner = (label: string, params: Options = {}) => {
		item.value = { label, ...params, remove };
	};

	return {
		banner,
		remove,
		item,
	};
};
