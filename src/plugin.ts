import { router, usePage } from "@inertiajs/vue3";
import type { Toast, Banner } from ".";
import { useToast } from ".";
import { useBanner } from ".";

const { toast } = useToast();
const { banner } = useBanner();

export const plugin = () => {
	router.on("finish", () => {
		const toastData = usePage().props?.toast as Toast | undefined;
		const bannerData = usePage().props?.banner as Banner | undefined;

		if (toastData) {
			const { label, ...rest } = toastData;
			toast(label, rest);
		}

		if (bannerData) {
			const { label, ...rest } = bannerData;
			banner(label, rest);
		}
	});
};
