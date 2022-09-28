import path from 'path';

export const IS_DEV = process.env.CREATE_PLUGIN_DEV !== undefined;

export const DEV_EXPORT_DIR = path.join(__dirname, '..', 'generated');

export const EXPORT_PATH_PREFIX = IS_DEV ? DEV_EXPORT_DIR : process.cwd();

export const DIST_DIR = path.join(__dirname, 'dist');

export const TEMPLATES_DIR = path.join(__dirname, '..', 'templates');

// Partials are template files that can be used in other templates
// (they won't be copied over to the generated folder as they are)
export const PARTIALS_DIR = path.join(TEMPLATES_DIR, '_partials');

export const TEMPLATE_PATHS: Record<string, string> = {
  app: path.join(TEMPLATES_DIR, 'app'),
  appBackend: path.join(TEMPLATES_DIR, 'backend', 'app'),
  common: path.join(TEMPLATES_DIR, 'common'),
  datasource: path.join(TEMPLATES_DIR, 'datasource'),
  datasourceBackend: path.join(TEMPLATES_DIR, 'backend', 'datasource'),
  panel: path.join(TEMPLATES_DIR, 'panel'),
  ciWorkflows: path.join(TEMPLATES_DIR, 'github', 'ci'),
  isCompatibleWorkflow: path.join(TEMPLATES_DIR, 'github', 'is-compatible'),
};

export enum PLUGIN_TYPES {
  app = 'app',
  panel = 'panel',
  datasource = 'datasource',
}

// This gets merged into variables coming from user prompts (when using Plop) or any other dynamic variables,
// and will be available to use in the templates.
// Example: "@grafana/ui": "{{ grafanaVersion }}"
export const EXTRA_TEMPLATE_VARIABLES = {
  grafanaVersion: '9.1.2',
};

export const MIGRATION_CONFIG = {
  // Files that should be overriden during a migration.
  // (paths are relative to the scaffolded projects root)
  filesToOverride: [
    '.config/',
    '.eslintrc',
    '.nvmrc',
    '.prettierrc.js',
    'docker-compose.yaml', // Using .yaml instead of .yml (https://yaml.org/faq.html)
    'jest-setup.js',
    'jest.config.js',
    'tsconfig.json',
  ],
  // Files that are mandatory for the plugins, but we don't want to ever override them. We are only creating the ones that don't exist.
  // (paths are relative to the scaffolded projects root)
  filesToExist: ['CHANGELOG.md'],
  // Files that are no longer needed for the project and possibly can be removed.
  filesToRemove: ['Dockerfile', 'docker-compose.yml', 'webpack/', '.webpack/', '.prettierrc'],
  // NPM dependencies that are no longer needed for the project and possibly can be removed.
  npmDependenciesToRemove: ['ts-loader', 'babel-loader', '@grafana/toolkit'],
  devNpmDependenciesToRemove: ['@grafana/toolkit', '@grafana/runtime', '@grafana/data', '@grafana/ui'],
};

export const UDPATE_CONFIG = {
  // Files that should be overriden between configuration version updates.
  filesToOverride: ['.config/'],
};

// prettier-ignore
export const TEXT = {
  overrideFilesPrompt: '**The following files will be overriden, would you like to continue?**',
  overrideFilesSuccess: 'Configuration files updated successfully.',
  overrideFilesAborted: 'Migration aborted.',

  filesToExistPrompt: '**The following files are necessary for the project to work, can we scaffold them for you?**',
  filesToExistSuccess: 'Extra necessaryily files created successfully.',
  filesToExistAborted: 'No extra necessary files were scaffolded.',

  removeFilesPrompt: '**The following files are possibly not needed for the project anymore, are you ok with us removing them?**',
  removeFilesSuccess: 'Unnecessary files have been removed successfully.',
  removeFilesAborted: 'No unnecessary files were deleted.',

  updateNpmDependenciesPrompt: '**Would you like to update the following dependencies in the `package.json?`**',
  updateNpmDependenciesSuccess: 'Successfully updated the NPM dependencies.',
  updateNpmDependenciesAborted: 'No NPM dependencies have been updated.',

  removeNpmDependenciesPrompt: '**Would you like to remove the following possibly unnecessary NPM dependencies?**',
  removeNpmDependenciesSuccess: 'Unnecessary NPM dependencies removed successfully.',
  removeNpmDependenciesAborted: 'No NPM dependencies have been removed.',

  updateNpmScriptsPrompt: '**Would you like to update the `{ scripts }` in your `package.json`?**',
  updateNpmScriptsSuccess: 'NPM scripts updated successfully.',
  updateNpmScriptsAborted: 'No NPM scripts have been added or updated.',

  migrationCommandWarning:  '**⚠️  Warning!**\nThis is going to change files in your current project to make it up-to-date with the latest plugin configuration.\nPlease make sure that you have backed up your changes.',
  migrationCommandSuccess: '**Done.**\nIf you have any questions please open an issue/discussion in https://github.com/grafana/create-plugin.',

  updateCommandWarning: '**⚠️  Warning!**\nThis is going to update files under the `.config/` folder.\nMake sure to commit your changes before running this script.',
  updateCommandSuccess: '**Done.**\nIf you have any questions please open an issue/discussion in https://github.com/grafana/create-plugin.',
}
