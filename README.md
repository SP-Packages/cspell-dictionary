# **cSpell Dictionary**

<p align="center"><i>A custom dictionary for Senthil Ponnusamy's projects used with cSpell.</i></p>

<p align="center">
  <a href="https://www.npmjs.com/package/@sp-packages/cspell-dictionary"><img src="https://img.shields.io/npm/v/@sp-packages/cspell-dictionary" alt="npm version"></a>
  <a href="https://packagephobia.com/result?p=@sp-packages/cspell-dictionary"><img src="https://packagephobia.com/badge?p=@sp-packages/cspell-dictionary" alt="install size"></a>
  <a href="https://www.npmjs.com/package/@sp-packages/cspell-dictionary"><img src="https://img.shields.io/npm/dw/@sp-packages/cspell-dictionary" alt="npm downloads"></a>
  <a href="./LICENSE"><img src="https://img.shields.io/npm/l/@sp-packages/cspell-dictionary" alt="license"></a>
  <a href="https://github.com/SP-Packages/cspell-dictionary/actions"><img src="https://github.com/SP-Packages/cspell-dictionary/actions/workflows/release.yml/badge.svg" alt="build status"></a>
  <a href="https://github.com/semantic-release/semantic-release"><img src="https://img.shields.io/badge/semantic--release-conventionalcommits-e10079?logo=semantic-release" alt="semantic-release"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/Made%20with-TypeScript-blue.svg" alt="TypeScript"></a>
  <a href="https://prettier.io/"><img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" alt="Prettier"></a>
  <a href="https://codecov.io/gh/SP-Packages/cspell-dictionary"><img src="https://codecov.io/gh/SP-Packages/cspell-dictionary/graph/badge.svg?token=60X95UNTQL" alt="codecov"></a>
  <a href="https://github.com/SP-Packages/cspell-dictionary/pulls"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome"></a>
  <a href="https://github.com/sponsors/iamsenthilprabu"><img src="https://img.shields.io/badge/Sponsor-%E2%9D%A4-pink?logo=github" alt="Sponsor"></a>
</p>

## **✨ Features**

- 🚀 A collection of predefined dictionaries with words related to personal names, technical terms, WordPress, infrastructure, vendors, and more.

## **📦 Installation**

### **Global Installation**

```bash
npm install -g @sp-packages/cspell-dictionary
```

### **Local Installation**

```bash
npm install --save-dev @sp-packages/cspell-dictionary
```

## **🚀 Usage**

Add the dictionary to your `.cspell.json` configuration file:

```json
{
  "import": ["./node_modules/@sp-packages/cspell-dictionary/cspell-ext.json"]
}
```

### Available Dictionaries

The package includes the following dictionaries:

- `libraries` - Libraries & Dependencies (e.g., `phpdotenv`).
- `linting-tools` - Development Tools & Linting (e.g., `codesniffer`).
- `personal` - Personal names and project names (e.g., `iamsenthilprabu`).
- `system` - System & Infrastructure (e.g., `appserver`).
- `vendor` - Vendor Names (e.g., `squizlabs`).
- `wordpress` - WordPress-related terms (e.g., `muplugin`).

## **🤝 Contributing**

Contributions are welcome! Please check our [Contributing Guidelines](CONTRIBUTING.md) before submitting issues or pull requests.

## **📜 License**

Licensed under the [MIT License](LICENSE).
