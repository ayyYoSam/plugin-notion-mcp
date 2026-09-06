import ora from "ora";
export async function runStep(label, task) {
    const spinner = ora(label).start();
    try {
        await task();
        spinner.succeed(label);
    }
    catch (error) {
        spinner.fail(label);
        throw error;
    }
}
//# sourceMappingURL=pipeline.js.map