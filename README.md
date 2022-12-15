# Keyaki-fes/documents

## このリポジトリは?

けやき祭実行委員会 IT 管理部のドキュメントです.
初心者向け教材やナレッジ共有・プロジェクトのドキュメントを記述しています.

https://keyaki-fes.github.io/documents/

## 開発方法

この web サイトは、静的サイトジェネレータである [Docusaurus 2](https://docusaurus.io/) を使用しています.

### 開発手順

1. Node.js と Yarn をインストールします.
2. このリポジトリを Clone します.
3. `yarn install --frozen-lockfile` で依存パッケージをインストールします.
4. `yarn start` でローカルサーバを立ち上げます.

### デプロイ

このサイトは GitHub Actions により自動で GitHub Pages へデプロイされています.
main ブランチへ`git push`すると実行されます.
