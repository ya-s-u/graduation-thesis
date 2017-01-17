# 卒論

[![ptex2pdf](https://img.shields.io/badge/ptex2pdf-0.9-orange.svg)](https://texwiki.texjp.org/?ptex2pdf)
[![npm](https://img.shields.io/badge/npm-4.0.5-orange.svg)](https://www.npmjs.com)
[![gulp](https://img.shields.io/badge/gulp-3.9.1-orange.svg)](http://gulpjs.com/)

## タイトル
MissionForest: 組織内外における協働支援のためのタスク構造化システムの試作

Prototyping a Task Structuring System for Supporting Collaboration in Intra-organization and Inter-organization

## 概要
本研究ではこれまで，公益活動やシビックテックといった分野を対象とし，公共圏で目標を共有するWebシステム「ゴオルシェア」を開発・運営してきた．
しかし，非公開な組織内部の活動には適していない問題があった．
新システム「MissionForest」では，組織内部の日常的な活動を非公開な目標ツリーとして記録し，外部発表後にツリー構造の一部をオープンデータ化可能にする．
さらに，目標ツリーを直感的操作で作成・編集可能にする．
これにより，組織内部の日常的な活動から組織外部との協働までをサポートする．

## PDF出力

- 1. ``ptex2pdf``をインストール

- 2. 以下のコマンドを実行
```sh
$ make export
```

## 画像書き出し
- 1. npmパッケージをインストール
```sh
$ npm install
```

- 2. Sketch**3.5**以下の時のみ``sketchtool``をインストール
```sh
$ sudo sh ./install-sketchtool.sh
```


- 3. 以下のコマンドを実行
```sh
$ npm run export
```
