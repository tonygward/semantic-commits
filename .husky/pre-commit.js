import { readFileSync } from "fs"

const commitMessage = await readFileSync('.git/COMMIT_EDITMSG');
console.log('Commit message:', commitMessage.toString().trim());

// const regexPattern = '^(feat|fix|docs|style|refactor|perf|test|build|ci|temp)(\([a-zA-Z0-9_\-]+\))?:\s.+$';
// if (new RegExp(regexPattern).test(commitMessage)) {
//   console.log('Commit message is valid.');
//   process.exit(0); // Simulate a successful validation
// } else {
//   console.log('Commit message is invalid.');
//   console.log('Please use the format: type(scope): description');
//   console.log('Where type is one of: feat, fix, docs, style, refactor, perf, test, build, ci, temp');
//   console.log('*** Example: feat(123): add new feature ***');
//   process.exit(1); // Simulate a failure
// }