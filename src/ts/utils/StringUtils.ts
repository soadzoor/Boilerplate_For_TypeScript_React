// eslint-disable-next-line import/no-unused-modules
export class StringUtils {
	public static capitalize(value: string = "") {
		return value.charAt(0).toUpperCase() + value.slice(1);
	}
}
