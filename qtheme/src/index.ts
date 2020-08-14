// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
  ILabShell,
} from '@jupyterlab/application';

import 'typeface-fira-code';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for the Jupyter Light Theme.
 */

const plugin: JupyterFrontEndPlugin<void> = {
  id: '@quansight/q-theme:plugin',
  requires: [ILabShell, IThemeManager],
  activate: (app: JupyterFrontEnd, shell: ILabShell, manager: IThemeManager) => {
    const style = '@quansight/q-theme/index.css';
    shell.restored.then(() => {
      shell.presentationMode = true;
      shell.mode = 'single-document';
      shell.expandLeft();
      shell.collapseRight();
    })

    manager.register({
      name: 'Qtheme DK',
      isLight: false,
      themeScrollbars: true,
      load: () => {
        console.log(shell.presentationMode);
        /**shell.presentationMode || app.commands.execute('application:toggle-presentation-mode', {});**/
        return manager.loadCSS(style);
      },
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
