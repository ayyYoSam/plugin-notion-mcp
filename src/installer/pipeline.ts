import ora from "ora";

export async function runStep(
  label: string,
  task: () => Promise<void>
) {
  const spinner = ora(label).start();

  try {
    await task();

    spinner.succeed(label);

  } catch (error) {
    spinner.fail(label);

    throw error;
  }
}