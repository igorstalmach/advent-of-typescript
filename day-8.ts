type RemoveNaughtyChildren<T> = {
	[K in keyof T as K extends `naughty${string}` ? never : K]: T[K];
};
