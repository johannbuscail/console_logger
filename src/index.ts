import util from "util";
//enable colors in console
import chalk_ from "chalk";

const { log } = console;
const console_clone = { ...console };

type NewLog = (...args: any[]) => void;

interface NewConsole {
	nor?: NewLog;
	success?: NewLog;
	error?: NewLog;
	warn?: NewLog;
	info?: NewLog;
	rainbow?: NewLog;
	zebra?: NewLog;
	bold?: NewLog;
	dim?: NewLog;
	inverse?: NewLog;
	italic?: NewLog;
	underline?: NewLog;
	allown?: NewLog;
	newline?: NewLog;
}

let new_console: NewConsole = {};
/**
 * Outputs a message to the console
 * Equivalent to console.log but outputs the data in a blue tint to be more visible when logging information
 * @name nor
 * @param  {...any} args - The data to output
 * @returns Data with a blue tinit
 */
new_console.nor = (...args) => log(chalk_.cyan(...args));
/**
 * Outputs a success message to the console
 * @example
 * console.success('I just hacked Nasaaaaaaaaaaa !')
 * @name success
 * @param  {...any} args - The data to output
 * @returns Data with green color
 */
new_console.success = (...args) => log(chalk_.green(...args));
/**
 * Outputs an error message to the console
 * When debugging for example in a `try{}catch{}`
 * @example
 * console.error('OMG! I just did a stupid error!')
 * @name error
 * @param  {...any} args - The data to output
 * @returns Data with red color
 */
new_console.error = (...args) => log(chalk_.red(...args));
/**
 * Outputs a warning message to the console with a yellow color
 * @example
 * console.warn('The world will end in one week !')
 * @name warn
 * @param  {...any} args - The data to output
 * @returns Data with yellow color
 */
new_console.warn = (...args) => log(chalk_.yellow(...args));
/**
 * Outputs an informational message to the console
 * @example
 * console.info('Did you know that Leonard de Vinci was born in 1452 in Anchiano ?')
 * @name info
 * @param  {...any} args - The data to output
 * @returns Data with dark blue color
 */
new_console.info = (...args) => log(chalk_.blue(...args));
/**
 * Outputs the data in bold
 * @example
 * console.bold("I'm bold")
 * @name bold
 * @param  {...any} args - The data to output
 * @returns Bold output
 */
new_console.bold = (...args) => log(chalk_.bold(...args));
/**
 * Outputs the data in dim
 * @example
 * console.dim("I'm a dim output !")
 * @name dim
 * @param  {...any} args - The data to output
 * @returns Dim output
 */
new_console.dim = (...args) => log(chalk_.dim(...args));
/**
 * Outputs the inverse of the given data
 * @example
 * console.inverse("I'm a inverse output !")
 * @name inverse
 * @param  {...any} args - The data to output
 * @returns Inverse of the data
 */
new_console.inverse = (...args) => log(chalk_.inverse(...args));
/**
 * Outputs the data in italic
 * @example
 * console.italic("I'm in italic !")
 * @name italic
 * @param  {...any} args - The data to output
 * @returns Italic output
 */
new_console.italic = (...args) => log(chalk_.italic(...args));
/**
 * Underlines the data
 * @example
 * console.underline("I'm underlined !")
 * @name underline
 * @param  {...any} args - The data to output
 * @returns Underlined output
 */
new_console.underline = (...args) => log(chalk_.underline(...args));
/**
 * Isolates that given data to be more visible
 * @example
 * console.allown("This is isolated from the rest of the console")
 * @name allown
 * @param  {...any} args - The data to output
 * @returns Isolated output
 */
new_console.allown = (...args) => log("\n", ...args, "\n");
/**
 * Shows each argument on a new line.
 * @example
 * console.newline("This is on the first line", "This is on the second line","This is on the third line")
 * @name newline
 * @param  {...any} args - The data to output
 * @returns Each argument on a new line
 */
new_console.newline = (...args) => args.forEach((arg) => log(arg));

export let logger = {
	...console_clone,
	...new_console,
};
export let chalk = { ...chalk_ };
