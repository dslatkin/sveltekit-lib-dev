import './app.css'

const components = import.meta.glob('./lib/**/*.wc.svelte', { eager: true });

const namespace = 'my';

for (const [path, module] of Object.entries(components)) {
    // todo: Allow customizing name with something like `module.wcTagName`
    // @ts-expect-error
    if (module.wcTagName) {
        // @ts-expect-error
        console.log('Detected custom tag name', module.wcTagName)
    }

    const pascalCaseName = path.match(/\/([^\/]+)\.wc\.svelte$/)?.[1];
    if (!pascalCaseName) {
        throw new Error(`Could not extract component name from ${path}`);
    }

    if (!/^[A-Za-z]+$/.test(pascalCaseName)) {
        throw new Error(`Component name ${pascalCaseName} is not pascal case (only a-zA-Z characters are allowed)`);
    }

    const kebabCaseName = pascalCaseName.replace(/([A-Z])/g, '-$1').toLowerCase().slice(1);
    const customElementName = `${namespace}-${kebabCaseName}`
    // todo: Verify valid names and make namespace optional
    // https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define#valid_custom_element_names

    // @ts-expect-error Note `customElements.define` will throw if this is not a valid constructor
    const customElementConstructor = module.default.element as CustomElementConstructor;

    console.log(`defining ${customElementName}`)
    customElements.define(customElementName, (customElementConstructor));
}

console.log('Loading main.js')

// const app = new App({
//   target: document.getElementById('app')!,
// })

// export default app
