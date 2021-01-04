export const isInViewPort = (el) => { 
	const rect = el.getBoundingClientRect();

	return {
		isInViewPort: (
			rect.top >= 0 &&
    		rect.left >= 0 &&
    		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)),
		isWasInViewPort: rect.height > rect.bottom
	};
};