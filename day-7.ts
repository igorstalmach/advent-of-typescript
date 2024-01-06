type AppendGood<T extends { [key: string]: any }> = {
	[K in keyof T as `good_${string & K}`]: T[K];
};
