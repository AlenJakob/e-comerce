export const SHOE_CALCULATE = (sizeList) => {
	return sizeList.map((item) => Math.round(calculate(item)));
};

const calculate = (size) => {
	return 1.27 * (size + 23) + 2;
};
