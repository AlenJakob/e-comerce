export const DISCOUNT_CALCULATE = (discount, price) => {
	const calcPercentage = (discount / 100) * price;
	return price - calcPercentage;
};
