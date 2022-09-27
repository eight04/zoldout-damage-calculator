Zold:Out Damage Calculator
==========================

[![test](https://github.com/eight04/zoldout-damage-calculator/actions/workflows/test.yml/badge.svg)](https://github.com/eight04/zoldout-damage-calculator/actions/workflows/test.yml)

武器、架勢傷害計算機

https://eight04.github.io/zoldout-damage-calculator/

傷害公式
--------

### 武器傷害（未驗證）

```
傷害 = (((角色攻擊力 + buff) * 武器加乘 + 武器攻擊力) - 防禦力) * 架勢增傷
```

### 陷阱傷害

```
傷害 = 陷阱攻擊力 - 防禦力
```

### 中毒強化

* 根據說明，強化最多至原本傷害的3倍。
* 強化直接相乘。例 120 毒傷，引蜂毒素2次，會變 120 * 1.35 * 1.35 = 218.7 毒傷。
