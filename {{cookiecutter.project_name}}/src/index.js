import exitHook from 'exit-hook';

import { getContainer, Nodule } from '@globality/nodule-config';

import createApp from './app';


async function main() {
    exitHook(() => process.exit(0));

    const ip = process.env.{{cookiecutter.project_name.upper()}}__IP || '0.0.0.0';
    const port = process.env.{{cookiecutter.project_name.upper()}}__PORT || '{{cookiecutter.project_port}}';
    const debug = process.env.{{cookiecutter.project_name.upper()}}__DEBUG;

    const nodule = new Nodule({
        name: '{{cookiecutter.project_name}}',
        testing: false,
        debug,
    });

    const { terminal } = getContainer();

    terminal.newline();
    terminal.show('initializing', nodule.metadata.name);
    await nodule.fromEnvironment().fromCredstash().load();

    const app = createApp();
    const server = app.listen(port, ip);

    server.on('listening', () => {
        terminal.show('listening on', `${ip}:${port}`);
        terminal.newline();
    });
}


main().catch(error => global.console.log(error));
